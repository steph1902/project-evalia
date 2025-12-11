# Project Evalia

Project Evalia is a modern, AI-powered form builder and response analysis platform designed to streamline data collection and insight generation. It empowers recruiters and hiring managers to create sophisticated forms, collect responses via public links, and leverage Generative AI to automatically score and summarize qualitative data.

## Key Features

- **Drag-and-Drop Form Builder**: Intuitive interface for creating complex forms with various question types (Text, Multiple Choice, Linear Scale, etc.).
- **AI-Powered Analysis**: Automatically grades and summarizes open-ended responses using Gemini AI, providing instant insights without manual review.
- **Public Sharing**: One-click publishing to generate secure, public-facing links for data collection.
- **Real-Time Dashboard**: Comprehensive view of all forms, response counts, and key metrics.
- **Role-Based Access**: Secure environment with support for multiple roles (Admin, Recruiter, Hiring Manager).
- **Responsive Design**: Optimized for fully functional use across desktop and mobile devices.

## Demo Availability

> [!NOTE]
> **Live Demo Coming Soon!**
> We are currently finalizing the hosted demo environment. Check back shortly for a link to try Project Evalia directly in your browser without any setup.

## Example Use Case: Automated Candidate Screening

**Scenario**: A hiring manager needs to screen 100+ applicants for a "Senior Product Manager" role.

1.  **Create Form**: The manager creates a screening form using the Drag-and-Drop Builder.
    -   *Question 1*: "Describe a time you managed a product crisis." (Long Text)
    -   *Question 2*: "How do you prioritize backlog items?" (Short Text)
    -   *AI Settings*: "Grade answers based on 'clarity', 'strategic thinking', and 'user-centricity'."

2.  **Collect Responses**: The public link is shared in the job description. Candidates submit their answers.

3.  **Automated Analysis**: As responses flow in, Project Evalia's AI automatically:
    -   Summarizes each candidate's response.
    -   Assigns a suitability score (e.g., 85/100).
    -   Flags high-potential candidates based on the custom criteria.

4.  **Result**: The hiring manager saves hours of manual reading and focuses only on the top 10% of candidates.

## Architecture Summary

The project follows a **Monorepo** structure separating the frontend and backend applications, enabling clear separation of concerns while sharing type safety and conventions.

```mermaid
graph TD
    User[User / Public Respondent] -->|HTTPS| CDN[Next.js Frontend (Vercel)]
    CDN -->|API Calls| API[NestJS Backend]
    API -->|ORM| DB[(PostgreSQL)]
    API -->|Analysis| AI[Gemini AI]
```

### Technology Stack

| Component | Technology | Description |
|-----------|------------|-------------|
| **Frontend** | Next.js 16 | React framework with App Router and Server Components. |
| **Styling** | TailwindCSS 4 | Utility-first CSS framework with Shadcn UI components. |
| **State** | Zustand | Lightweight client-side state management. |
| **Backend** | NestJS 11 | Progressive Node.js framework for scalable server-side apps. |
| **Database** | PostgreSQL | Relational database managed via Prisma ORM. |
| **AI** | Google Gemini | Generative AI model for response processing. |
| **Language** | TypeScript | End-to-end type safety. |

## Project Structure

```
project-evalia/
├── apps/
│   ├── api/                 # NestJS Backend
│   │   ├── src/
│   │   │   ├── modules/     # Feature modules (Auth, Forms, AI)
│   │   │   ├── database/    # Prisma service and config
│   │   │   └── main.ts      # Entry point
│   │   └── prisma/          # Database schema and migrations
│   │
│   └── web/                 # Next.js Frontend
│       ├── src/
│       │   ├── app/         # App Router pages ((dashboard), (public))
│       │   ├── components/  # Reusable UI components
│       │   ├── lib/         # API clients and utils
│       │   └── stores/      # Zustand state stores
└── package.json
```

## Deployment

### Frontend (Vercel)
The frontend is optimized for deployment on Vercel.
1.  Connect your GitHub repository to Vercel.
2.  Set Root Directory to `apps/web`.
3.  Add `NEXT_PUBLIC_API_URL` environment variable pointing to your production backend.

### Backend (Railway/Render/AWS)
The backend is a standard Node.js application.
1.  Build the application: `npm run build`.
2.  Start the production server: `npm run start:prod`.
3.  Ensure `DATABASE_URL` and `JWT_SECRET` are set in the production environment.

## Testing

**Backend Tests**
```bash
cd apps/api
# Unit tests
npm run test
# E2E tests
npm run test:e2e
```

**Frontend Tests**
(Currently in setup phase, using Jest/React Testing Library)

## Security & Compliance

- **Authentication**: JWT-based stateless authentication. Passwords are hashed using bcrypt.
- **Data Privacy**: Response data is scoped to the organization/user who created the form.
- **Validation**: All inputs are validated using `class-validator` (backend) and Zod/React Hook Form (frontend) to prevent injection attacks.

## Roadmap

- [ ] **Advanced Analytics**: Visual charts for response distribution.
- [ ] **Response Export**: CSV/Excel export functionality.
- [ ] **Team Collaboration**: Shared workspaces for multiple recruiters.
- [ ] **Custom Themes**: Brand customization for public forms.

## Contributing

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## License

SPDX-License-Identifier: MIT

Copyright (c) 2025 Project Evalia.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files... (standard MIT text)
