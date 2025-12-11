# Project Evalia

Project Evalia is a modern, AI-powered form builder and response analysis platform designed to streamline data collection and insight generation. It empowers recruiters and hiring managers to create sophisticated forms, collect responses via public links, and leverage Generative AI to automatically score and summarize qualitative data.

## Key Features

- **Drag-and-Drop Form Builder**: Intuitive interface for creating complex forms with various question types (Text, Multiple Choice, Linear Scale, etc.).
- **AI-Powered Analysis**: Automatically grades and summarizes open-ended responses using Gemini AI, providing instant insights without manual review.
- **Public Sharing**: One-click publishing to generate secure, public-facing links for data collection.
- **Real-Time Dashboard**: Comprehensive view of all forms, response counts, and key metrics.
- **Role-Based Access**: Secure environment with support for multiple roles (Admin, Recruiter, Hiring Manager).
- **Responsive Design**: Optimized for fully functional use across desktop and mobile devices.

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

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- PostgreSQL (Local instance or cloud connection)
- NPM or Yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/steph1902/project-evalia.git
    cd project-evalia
    ```

2.  **Install dependencies:**
    ```bash
    # Install backend dependencies
    cd apps/api
    npm install

    # Install frontend dependencies (in a new terminal)
    cd ../web
    npm install
    ```

3.  **Database Setup:**
    Ensure your PostgreSQL database is running.
    ```bash
    cd apps/api
    npx prisma generate
    npx prisma db push
    ```

### Environment Configuration

Create a `.env` file in `apps/api` with the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/evalia?schema=public"

# Auth (JWT)
JWT_SECRET="your-super-secret-key"
JWT_EXPIRATION="1d"

# AI Configuration
GEMINI_API_KEY="your-google-gemini-api-key"
```

## Usage Guide

### Running Locally

To run the full stack locally effectively, you will need two terminal windows.

**Terminal 1: Backend (API)**
```bash
cd apps/api
npm run start:dev
# Server starts at http://localhost:3000
# Swagger docs at http://localhost:3000/api
```

**Terminal 2: Frontend (Web)**
```bash
cd apps/web
npm run dev
# App starts at http://localhost:3001 (or 3000 if port free)
```

### Common Workflows

1.  **Creating a Form**:
    - Navigate to Dashboard -> "Create Form".
    - Drag questions from the sidebar to the canvas.
    - Click "Save Draft".

2.  **Publishing**:
    - Click "Publish" in the form builder.
    - Copy the generated public link.

3.  **Submitting Responses**:
    - Open the public link in an incognito window.
    - Fill out the form and submit.

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
