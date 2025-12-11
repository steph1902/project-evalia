# Vercel Deployment & Credentials Guide

This guide explains how to obtain the required environment variables and deploy **Project Evalia** to Vercel.

## 1. Obtain Environment Variables

### **A. DATABASE_URL** (PostgreSQL)
You need a cloud-hosted PostgreSQL database.
1.  **Recommended**: Go to [Neon.tech](https://neon.tech) (Free Tier available) or [Supabase](https://supabase.com).
2.  Create a new project.
3.  Copy the **Connection String** (Pooled Mode recommended if available).
    *   Format: `postgres://user:pass@host:5432/dbname?sslmode=require`

### **B. GEMINI_API_KEY** (AI Features)
1.  Go to [Google AI Studio](https://aistudio.google.com/).
2.  Click **"Get API key"**.
3.  Create a key in a new project.
4.  Copy the API Key (starts with `AIzb...`).

### **C. JWT_SECRET** (Authentication)
This is a secure random string used to sign login tokens.
1.  Open your terminal.
2.  Run: `openssl rand -base64 32`
3.  Copy the output string.

### **D. FRONTEND_URL** (CORS Configuration)
This is the URL where your app will live on Vercel.
*   Initial Value: `http://localhost:3000` (for local dev).
*   Production Value: `https://your-project-name.vercel.app` (after first deployment).

---

## 2. Configure Vercel Project

1.  Go to [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New..."** -> **"Project"**.
2.  Connect your GitHub repository: `project-evalia`.
3.  **Configure Project**:
    *   **Framework Preset**: Next.js
    *   **Root Directory**: Leave as `./` (Root) because we added `vercel.json` and workspaces.
4.  **Environment Variables**:
    Expand the **"Environment Variables"** section and add:

    | Key | Value |
    | :--- | :--- |
    | `DATABASE_URL` | *(Paste from Step 1A)* |
    | `GEMINI_API_KEY` | *(Paste from Step 1B)* |
    | `JWT_SECRET` | *(Paste from Step 1C)* |
    | `FRONTEND_URL` | `https://project-evalia.vercel.app` (or similar) |
    | `NEXT_PUBLIC_API_URL` | `https://project-evalia.vercel.app/api` |

5.  Click **"Deploy"**.

---

## 3. Post-Deployment Steps

After successful deployment:
1.  **Seed the Production Database**:
    You cannot run the seed script directly from Vercel easily. Connect to your database locally using the production `DATABASE_URL` in your `.env` and run:
    ```bash
    npx prisma db push
    npx ts-node apps/api/prisma/seed.ts
    ```

2.  **Verify**:
    Open your Vercel URL and try to Login.
