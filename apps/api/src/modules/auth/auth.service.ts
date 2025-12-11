import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../database/prisma.service';
import { RegisterDto, LoginDto, RefreshTokenDto } from './dto';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
        private config: ConfigService,
    ) { }

    async register(dto: RegisterDto) {
        const existing = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });

        if (existing) {
            throw new ConflictException('Email already in use');
        }

        const passwordHash = await bcrypt.hash(dto.password, 10);

        let organizationId = null;
        if (dto.organization) {
            // Create or find organization
            // For simplicity, we create a new one if provided
            const slug = dto.organization.toLowerCase().replace(/[^a-z0-9]/g, '-');
            const org = await this.prisma.organization.upsert({
                where: { slug },
                update: {},
                create: {
                    name: dto.organization,
                    slug,
                },
            });
            organizationId = org.id;
        }

        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                passwordHash,
                name: dto.name,
                organizationId,
            },
        });

        const tokens = await this.generateTokens(user.id, user.email);
        await this.saveRefreshToken(user.id, tokens.refreshToken);

        const { passwordHash: _, ...userWithoutPassword } = user;

        return {
            user: userWithoutPassword,
            ...tokens,
        };
    }

    async login(dto: LoginDto) {
        const user = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const valid = await bcrypt.compare(dto.password, user.passwordHash);
        if (!valid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const tokens = await this.generateTokens(user.id, user.email);
        await this.saveRefreshToken(user.id, tokens.refreshToken);

        const { passwordHash: _, ...userWithoutPassword } = user;

        return {
            user: userWithoutPassword,
            ...tokens,
        };
    }

    async refresh(dto: RefreshTokenDto) {
        try {
            const payload = this.jwtService.verify(dto.refreshToken, {
                secret: this.config.get('JWT_SECRET'),
            });

            const savedToken = await this.prisma.refreshToken.findUnique({
                where: { token: dto.refreshToken },
            });

            if (!savedToken || savedToken.userId !== payload.sub) {
                throw new UnauthorizedException('Invalid refresh token');
            }

            if (new Date() > savedToken.expiresAt) {
                await this.prisma.refreshToken.delete({ where: { token: dto.refreshToken } });
                throw new UnauthorizedException('Refresh token expired');
            }

            const tokens = await this.generateTokens(payload.sub, payload.email);

            // Rotate refresh token
            await this.prisma.refreshToken.delete({ where: { token: dto.refreshToken } });
            await this.saveRefreshToken(payload.sub, tokens.refreshToken);

            return tokens;
        } catch (e) {
            throw new UnauthorizedException('Invalid refresh token');
        }
    }

    private async generateTokens(userId: string, email: string) {
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(
                { sub: userId, email },
                { expiresIn: this.config.get('JWT_EXPIRATION') || '15m' },
            ),
            this.jwtService.signAsync(
                { sub: userId, email },
                { expiresIn: this.config.get('JWT_REFRESH_EXPIRATION') || '7d' },
            ),
        ]);

        return {
            accessToken,
            refreshToken,
        };
    }

    private async saveRefreshToken(userId: string, token: string) {
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 7); // 7 days

        await this.prisma.refreshToken.create({
            data: {
                token,
                userId,
                expiresAt,
            },
        });
    }
}
