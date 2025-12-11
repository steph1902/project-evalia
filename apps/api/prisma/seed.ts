import { PrismaClient, QuestionType, UserRole } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting seed...');

    // 1. Create Organization
    const org = await prisma.organization.upsert({
        where: { slug: 'kairos-projects' },
        update: {},
        create: {
            name: 'Kairos Projects',
            slug: 'kairos-projects',
        },
    });

    // 2. Create User
    const passwordHash = await bcrypt.hash('password123', 10);
    const user = await prisma.user.upsert({
        where: { email: 'demo@projectevalia.com' },
        update: {
            passwordHash, // Ensure password is set to known value
        },
        create: {
            email: 'demo@projectevalia.com',
            name: 'Demo Recruiter',
            passwordHash,
            role: UserRole.RECRUITER,
            organizationId: org.id,
            emailVerified: true,
        },
    });

    // 3. Create Form
    const formTitle = 'Product Stylist Photographer - Pre-Interview Questionnaire';

    // Clean up existing form if it exists to clean slate re-seed
    const existingForm = await prisma.form.findFirst({
        where: { title: formTitle, createdById: user.id }
    });

    if (existingForm) {
        await prisma.form.delete({ where: { id: existingForm.id } });
    }

    const form = await prisma.form.create({
        data: {
            title: formTitle,
            description: 'Thank you for your interest in the Product Stylist Photographer position at Kairos Projects. This questionnaire is designed to help us understand your skills, experience, and creative approach in alignment with our requirements for creating stunning and strategic visual storytelling for premium and lifestyle brands.',
            createdById: user.id,
            status: 'PUBLISHED',
            publishedAt: new Date(),
            settings: {
                create: {
                    collectEmail: true,
                    requireEmail: true,
                    allowMultipleSubmissions: false,
                }
            }
        }
    });

    console.log(`📝 Created Form: ${form.title}`);

    // 4. Create Questions
    let orderCounter = 0;

    // --- Section 1 ---
    await prisma.question.create({
        data: {
            formId: form.id,
            title: 'Candidate Background & Contact Information',
            description: 'Purpose: Gather essential personal and professional details for initial screening.',
            type: QuestionType.SECTION_BREAK,
            order: orderCounter++,
            required: false,
        }
    });

    await prisma.question.create({
        data: {
            formId: form.id,
            title: 'Full Name',
            description: 'Please provide your full name.',
            type: QuestionType.SHORT_TEXT,
            order: orderCounter++,
            required: true,
        }
    });

    await prisma.question.create({
        data: {
            formId: form.id,
            title: 'Email Address',
            description: 'What is your preferred email address for communication?',
            type: QuestionType.SHORT_TEXT, // Although we collect email via settings, forcing a field is fine too
            order: orderCounter++,
            required: true,
        }
    });

    await prisma.question.create({
        data: {
            formId: form.id,
            title: 'Portfolio Link',
            description: 'Please share a link to your portfolio (e.g., PDF, Google Drive, Dropbox, or Instagram). Ensure it showcases diversity in style, product categories, and technical excellence as outlined in the job description.',
            type: QuestionType.SHORT_TEXT,
            order: orderCounter++,
            required: true,
        }
    });

    await prisma.question.create({
        data: {
            formId: form.id,
            title: 'Years of Experience',
            description: 'How many years of experience do you have as a Product Photographer or Stylist?',
            type: QuestionType.SINGLE_CHOICE,
            order: orderCounter++,
            required: true,
            options: {
                create: [
                    { label: 'Less than 1 year', value: 'Less than 1 year', order: 0 },
                    { label: '1-2 years', value: '1-2 years', order: 1 },
                    { label: '2-3 years', value: '2-3 years', order: 2 },
                    { label: '3+ years', value: '3+ years', order: 3 },
                ]
            }
        }
    });

    await prisma.question.create({
        data: {
            formId: form.id,
            title: 'Expected Monthly Basic Salary (IDR)',
            description: 'What is your expected monthly basic salary in Indonesian Rupiah (IDR)?',
            type: QuestionType.SHORT_TEXT,
            order: orderCounter++,
            required: true,
        }
    });

    await prisma.question.create({
        data: {
            formId: form.id,
            title: 'Notice Period',
            description: 'How much notice are you required to give your current employer?',
            type: QuestionType.SINGLE_CHOICE,
            order: orderCounter++,
            required: true,
            options: {
                create: [
                    { label: 'Immediate availability', value: 'Immediate availability', order: 0 },
                    { label: '1-2 weeks', value: '1-2 weeks', order: 1 },
                    { label: '3-4 weeks', value: '3-4 weeks', order: 2 },
                    { label: 'More than 4 weeks', value: 'More than 4 weeks', order: 3 },
                ]
            }
        }
    });


    // --- Section 2 ---
    await prisma.question.create({
        data: {
            formId: form.id,
            title: 'Technical Skills & Equipment Proficiency',
            description: 'Purpose: Assess mastery of photography techniques and tools required for the role.',
            type: QuestionType.SECTION_BREAK,
            order: orderCounter++,
        }
    });

    await prisma.question.create({
        data: {
            formId: form.id,
            title: 'Photography Skills',
            description: 'Which of the following photography skills and techniques do you have advanced proficiency in? (Select all that apply)',
            type: QuestionType.MULTIPLE_CHOICE,
            order: orderCounter++,
            required: true,
            options: {
                create: [
                    { label: 'Manual mode camera operation', value: 'Manual mode camera operation', order: 0 },
                    { label: 'Studio and natural lighting setup', value: 'Studio and natural lighting setup', order: 1 },
                    { label: 'Composition and visual hierarchy', value: 'Composition and visual hierarchy', order: 2 },
                    { label: 'Flat lay, lifestyle, and editorial styles', value: 'Flat lay, lifestyle, and editorial styles', order: 3 },
                    { label: 'Macro/detail photography', value: 'Macro/detail photography', order: 4 },
                    { label: 'None of the above', value: 'None of the above', order: 5 },
                ]
            }
        }
    });

    await prisma.question.create({
        data: {
            formId: form.id,
            title: 'Equipment Ownership',
            description: 'Which of the following equipment do you own and are proficient in using? (Select all that apply)',
            type: QuestionType.MULTIPLE_CHOICE,
            order: orderCounter++,
            required: true,
            options: {
                create: [
                    { label: 'High-end professional camera (Canon 5D/R5, Sony A7, Nikon Z series, etc.)', value: 'High-end professional camera', order: 0 },
                    { label: 'High-quality lenses (24-70mm, 85mm, macro, wide angle)', value: 'High-quality lenses', order: 1 },
                    { label: 'Professional lighting kit (softbox, beauty dish, reflector, diffuser)', value: 'Professional lighting kit', order: 2 },
                    { label: 'Tripod and camera support system', value: 'Tripod and camera support system', order: 3 },
                    { label: 'Backdrop and background materials (3+ types)', value: 'Backdrop and background materials', order: 4 },
                    { label: 'None of the above', value: 'None of the above', order: 5 },
                ]
            }
        }
    });

    await prisma.question.create({
        data: {
            formId: form.id,
            title: 'Post-Production Expertise',
            description: 'What is your proficiency level with Adobe Lightroom and Photoshop for post-production tasks such as color grading and retouching?',
            type: QuestionType.SINGLE_CHOICE,
            order: orderCounter++,
            required: true,
            options: {
                create: [
                    { label: 'Beginner (Basic edits only)', value: 'Beginner', order: 0 },
                    { label: 'Intermediate (Moderate edits and adjustments)', value: 'Intermediate', order: 1 },
                    { label: 'Expert (Advanced retouching, compositing, and color correction)', value: 'Expert', order: 2 },
                ]
            }
        }
    });

    // --- Section 3 ---
    await prisma.question.create({
        data: {
            formId: form.id,
            title: 'Styling & Creative Direction Competencies',
            description: 'Purpose: Evaluate expertise in visual storytelling, styling, and concept development.',
            type: QuestionType.SECTION_BREAK,
            order: orderCounter++,
        }
    });

    await prisma.question.create({
        data: {
            formId: form.id,
            title: 'Styling Experience',
            description: 'Describe a specific project where you curated props, backgrounds, and color schemes to create a cohesive visual narrative for a product. What was the product category, and how did your styling choices reflect the brand identity or target audience? (Limit: 150 words)',
            type: QuestionType.LONG_TEXT,
            order: orderCounter++,
            required: true,
        }
    });

    await prisma.question.create({
        data: {
            formId: form.id,
            title: 'Concept Development',
            description: 'Explain how you develop a unique visual concept for a client campaign. Walk us through your process from understanding the brief to presenting the mood board or visual direction. (Limit: 150 words)',
            type: QuestionType.LONG_TEXT,
            order: orderCounter++,
            required: true,
        }
    });

    await prisma.question.create({
        data: {
            formId: form.id,
            title: 'Trend Awareness',
            description: 'How confident are you in staying updated with current trends in visual design, photography, and styling to bring fresh, innovative ideas to projects? (1 = Not confident, 5 = Extremely confident)',
            type: QuestionType.LINEAR_SCALE,
            order: orderCounter++,
            required: true,
            // Using options to store min/max labels not standard in Schema but typically Linear Scale is 1-5 or 1-10.
            // Schema doesn't have dedicated fields for min/max labels, often stored in validation or description.
            // Typically Linear Scale in this schema would be simulated or just imply 1-5 validation.
            // Adding validation json to be safe if implemented.
            validation: { min: 1, max: 5, minLabel: "Not confident at all", maxLabel: "Extremely confident" }
        }
    });

    // --- Section 4 ---
    await prisma.question.create({
        data: {
            formId: form.id,
            title: 'Collaboration & Soft Skills',
            description: 'Purpose: Gauge communication, problem-solving, and team dynamics fit.',
            type: QuestionType.SECTION_BREAK,
            order: orderCounter++,
        }
    });

    await prisma.question.create({
        data: {
            formId: form.id,
            title: 'Client Communication',
            description: 'Describe a time when you had to present a visual concept to a client and justify your design decisions. How did you ensure alignment with their needs, and what was the outcome? (Limit: 150 words)',
            type: QuestionType.LONG_TEXT,
            order: orderCounter++,
            required: true,
        }
    });

    await prisma.question.create({
        data: {
            formId: form.id,
            title: 'Problem-Solving in Shoots',
            description: 'Share an example of a challenge you faced during a product shoot (e.g., lighting issues, prop limitations, or tight deadlines). How did you resolve it, and what was the impact on the final deliverables? (Limit: 150 words)',
            type: QuestionType.LONG_TEXT,
            order: orderCounter++,
            required: true,
        }
    });

    await prisma.question.create({
        data: {
            formId: form.id,
            title: 'Team Collaboration',
            description: 'How comfortable are you collaborating with creative teams and mentoring junior photographers or stylists? (1 = Not comfortable, 5 = Extremely comfortable)',
            type: QuestionType.LINEAR_SCALE,
            order: orderCounter++,
            required: true,
            validation: { min: 1, max: 5, minLabel: "Not comfortable at all", maxLabel: "Extremely comfortable" }
        }
    });

    // --- Section 5 ---
    await prisma.question.create({
        data: {
            formId: form.id,
            title: 'Cultural Fit & Work Preferences',
            description: 'Purpose: Assess alignment with company values and work style.',
            type: QuestionType.SECTION_BREAK,
            order: orderCounter++,
        }
    });

    await prisma.question.create({
        data: {
            formId: form.id,
            title: 'Attention to Detail',
            description: 'How would you rate your attention to detail in ensuring every frame, color, texture, and element in a shoot is perfect before delivery? (1 = Not detail-oriented, 5 = Obsessively detail-oriented)',
            type: QuestionType.LINEAR_SCALE,
            order: orderCounter++,
            required: true,
            validation: { min: 1, max: 5, minLabel: "Not detail-oriented", maxLabel: "Obsessively detail-oriented" }
        }
    });

    await prisma.question.create({
        data: {
            formId: form.id,
            title: 'Creative Freedom',
            description: 'How do you feel about having unlimited creative freedom in project execution, as long as it aligns with the client’s brief and brand identity?',
            type: QuestionType.SINGLE_CHOICE,
            order: orderCounter++,
            required: true,
            options: {
                create: [
                    { label: 'I thrive with creative freedom and can balance it with strategic goals.', value: 'Thrive', order: 0 },
                    { label: 'I prefer structured guidelines over full creative freedom.', value: 'Structured', order: 1 },
                    { label: 'I’m unsure how to handle unlimited creative freedom.', value: 'Unsure', order: 2 },
                ]
            }
        }
    });

    await prisma.question.create({
        data: {
            formId: form.id,
            title: 'Project Categories',
            description: 'Which of the following premium product categories are you most experienced or comfortable working with? (Select all that apply)',
            type: QuestionType.MULTIPLE_CHOICE,
            order: orderCounter++,
            required: true,
            options: {
                create: [
                    { label: 'Luxury & Fashion (clothing, accessories, jewelry)', value: 'Luxury & Fashion', order: 0 },
                    { label: 'Premium Beauty (skincare, cosmetics, fragrance)', value: 'Premium Beauty', order: 1 },
                    { label: 'Lifestyle & Home (furniture, decor, tableware)', value: 'Lifestyle & Home', order: 2 },
                    { label: 'F&B Premium (specialty food, gourmet products)', value: 'F&B Premium', order: 3 },
                    { label: 'Tech & Gadgets (electronics, photography equipment)', value: 'Tech & Gadgets', order: 4 },
                    { label: 'Sports & Wellness (sports gear, wellness products)', value: 'Sports & Wellness', order: 5 },
                    { label: 'Artisan & Handmade (craft products)', value: 'Artisan & Handmade', order: 6 },
                    { label: 'None of the above', value: 'None', order: 7 },
                ]
            }
        }
    });


    console.log('✅ Seeding completed!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
