# FormGenius: AI-Powered Pre-Interview Assessment Platform

## Complete Product Documentation

---

# Table of Contents

1. [Product Requirements Document (PRD)](#product-requirements-document-prd)
2. [Functional Specification Document (FSD)](#functional-specification-document-fsd)
3. [UI/UX Design Guidelines](#uiux-design-guidelines)
4. [Technical Architecture](#technical-architecture)
5. [Database Schema](#database-schema)
6. [API Specifications](#api-specifications)
7. [Deployment Guide](#deployment-guide)

---

# Product Requirements Document (PRD)

## 1. Executive Summary

### 1.1 Product Vision

FormGenius is a minimalist, AI-powered pre-interview assessment platform that transforms traditional form responses into actionable hiring insights. By leveraging Gemini AI, the platform automatically analyzes candidate responses, generates comprehensive summaries, and provides intelligent scoring to streamline the recruitment process.

### 1.2 Problem Statement

HR professionals and hiring managers face several challenges:
- Manual review of numerous pre-interview forms is time-consuming
- Subjective evaluation leads to inconsistent candidate assessment
- Lack of structured insights from open-ended responses
- No standardized scoring mechanism for comparing candidates
- Difficulty identifying key strengths and red flags quickly

### 1.3 Solution Overview

FormGenius addresses these challenges by providing:
- Clean, distraction-free form creation and submission experience
- AI-powered response analysis with Gemini integration
- Automated candidate scoring based on customizable criteria
- Smart summaries highlighting key candidate attributes
- Comparative analytics for batch candidate evaluation

### 1.4 Target Users

| User Type | Description | Primary Needs |
|-----------|-------------|---------------|
| HR Managers | Oversee recruitment process | Dashboard overview, analytics, team management |
| Recruiters | Create forms, review candidates | Form creation, candidate review, AI insights |
| Hiring Managers | Final decision makers | Quick summaries, scoring, comparisons |
| Candidates | Job applicants | Easy form completion, pleasant UX |

---

## 2. Product Goals & Success Metrics

### 2.1 Primary Goals

1. **Efficiency**: Reduce candidate review time by 70%
2. **Consistency**: Provide standardized scoring across all candidates
3. **Insights**: Surface hidden patterns and key information from responses
4. **Experience**: Deliver a delightful, modern form experience

### 2.2 Key Performance Indicators (KPIs)

| Metric | Target | Measurement Method |
|--------|--------|-------------------|
| Form completion rate | >85% | Submissions / Form opens |
| Average review time | <3 min/candidate | Time tracking |
| AI accuracy rating | >4.2/5 | User feedback |
| System response time | <200ms | Performance monitoring |
| User satisfaction | >4.5/5 | NPS surveys |

---

## 3. Feature Requirements

### 3.1 Core Features (MVP)

#### F1: Form Management
| ID | Feature | Priority | Description |
|----|---------|----------|-------------|
| F1.1 | Create Form | P0 | Create new pre-interview forms with custom questions |
| F1.2 | Edit Form | P0 | Modify existing forms |
| F1.3 | Delete Form | P0 | Remove forms with confirmation |
| F1.4 | Duplicate Form | P1 | Clone existing forms as templates |
| F1.5 | Form Versioning | P2 | Track form changes over time |

#### F2: Question Types
| ID | Type | Priority | Description |
|----|------|----------|-------------|
| F2.1 | Short Text | P0 | Single-line text input |
| F2.2 | Long Text | P0 | Multi-line paragraph input |
| F2.3 | Single Choice | P0 | Radio button selection |
| F2.4 | Multiple Choice | P0 | Checkbox selection |
| F2.5 | Dropdown | P1 | Select from dropdown list |
| F2.6 | Linear Scale | P1 | Numeric rating scale (1-5, 1-10) |
| F2.7 | Date | P1 | Date picker |
| F2.8 | File Upload | P2 | Resume/document upload |
| F2.9 | Section Break | P1 | Visual section divider with description |

#### F3: Form Response Collection
| ID | Feature | Priority | Description |
|----|---------|----------|-------------|
| F3.1 | Public Form Link | P0 | Shareable link for candidates |
| F3.2 | Response Recording | P0 | Store all submissions securely |
| F3.3 | Email Collection | P0 | Capture candidate email |
| F3.4 | Submission Confirmation | P0 | Thank you page after submission |
| F3.5 | Duplicate Prevention | P1 | Prevent multiple submissions |
| F3.6 | Form Scheduling | P2 | Open/close forms on schedule |

#### F4: AI Analysis (Gemini Integration)
| ID | Feature | Priority | Description |
|----|---------|----------|-------------|
| F4.1 | Response Summary | P0 | AI-generated candidate summary |
| F4.2 | Scoring | P0 | Automated scoring (0-100) |
| F4.3 | Strength Detection | P0 | Identify candidate strengths |
| F4.4 | Concern Flags | P0 | Highlight potential concerns |
| F4.5 | Keyword Extraction | P1 | Extract key skills/terms |
| F4.6 | Sentiment Analysis | P1 | Gauge response sentiment |
| F4.7 | Batch Analysis | P1 | Analyze multiple candidates |
| F4.8 | Custom Criteria | P2 | Define scoring rubrics |

#### F5: Dashboard & Analytics
| ID | Feature | Priority | Description |
|----|---------|----------|-------------|
| F5.1 | Response List | P0 | View all form responses |
| F5.2 | Individual View | P0 | Detailed candidate response view |
| F5.3 | AI Insights Panel | P0 | Display AI analysis results |
| F5.4 | Search & Filter | P1 | Find specific responses |
| F5.5 | Sort by Score | P1 | Rank candidates by AI score |
| F5.6 | Export Data | P1 | CSV/PDF export |
| F5.7 | Comparison View | P2 | Side-by-side candidate comparison |

### 3.2 Enhanced Features (Mindblowing Additions)

#### F6: Smart Features
| ID | Feature | Priority | Description |
|----|---------|----------|-------------|
| F6.1 | **AI Question Suggestions** | P1 | Gemini suggests relevant follow-up questions based on job role |
| F6.2 | **Smart Templates** | P1 | Pre-built templates for common roles (Developer, Designer, PM, etc.) |
| F6.3 | **Response Prediction** | P2 | Predict candidate success likelihood |
| F6.4 | **Bias Detection** | P1 | Alert on potentially biased question phrasing |
| F6.5 | **Answer Quality Score** | P1 | Rate response quality (thoroughness, relevance) |

#### F7: Collaboration Features
| ID | Feature | Priority | Description |
|----|---------|----------|-------------|
| F7.1 | **Team Comments** | P1 | Add internal notes on candidates |
| F7.2 | **Rating by Team** | P1 | Multiple reviewers can rate |
| F7.3 | **Candidate Status** | P1 | Pipeline stages (New, Reviewing, Shortlisted, Rejected) |
| F7.4 | **Activity Log** | P2 | Track all actions on responses |

#### F8: Candidate Experience
| ID | Feature | Priority | Description |
|----|---------|----------|-------------|
| F8.1 | **Progress Saving** | P1 | Auto-save draft responses |
| F8.2 | **Progress Indicator** | P0 | Visual completion progress |
| F8.3 | **Mobile Optimization** | P0 | Fully responsive design |
| F8.4 | **Accessibility** | P0 | WCAG 2.1 AA compliance |
| F8.5 | **Multi-language** | P2 | Support for multiple languages |

#### F9: Advanced Analytics
| ID | Feature | Priority | Description |
|----|---------|----------|-------------|
| F9.1 | **Talent Pool Insights** | P2 | Aggregate analysis across candidates |
| F9.2 | **Time-to-Complete Analytics** | P1 | Track form completion patterns |
| F9.3 | **Drop-off Analysis** | P2 | Identify where candidates abandon forms |
| F9.4 | **AI Confidence Score** | P1 | Show AI analysis confidence level |

#### F10: Integration & Automation
| ID | Feature | Priority | Description |
|----|---------|----------|-------------|
| F10.1 | **Webhook Notifications** | P2 | Notify on new submissions |
| F10.2 | **Email Notifications** | P1 | Alert recruiters of new responses |
| F10.3 | **Calendar Integration** | P3 | Schedule interviews directly |
| F10.4 | **ATS Integration** | P3 | Connect with applicant tracking systems |

---

## 4. User Stories

### 4.1 Recruiter Stories

```
US-R1: As a recruiter, I want to create a pre-interview form by importing 
       questions from a markdown file so that I can quickly set up assessments.

US-R2: As a recruiter, I want to view AI-generated summaries of each candidate 
       so that I can quickly understand their profile without reading every response.

US-R3: As a recruiter, I want to see candidates ranked by AI score so that 
       I can prioritize my review of top performers.

US-R4: As a recruiter, I want to filter candidates by score range so that 
       I can focus on qualified applicants.

US-R5: As a recruiter, I want to add internal notes to candidate responses 
       so that I can share insights with my team.

US-R6: As a recruiter, I want to receive email notifications when new 
       submissions arrive so that I can respond promptly.

US-R7: As a recruiter, I want to export candidate data to CSV so that 
       I can share reports with stakeholders.
```

### 4.2 Candidate Stories

```
US-C1: As a candidate, I want to complete the form on my mobile device 
       so that I can submit from anywhere.

US-C2: As a candidate, I want to see my progress through the form so that 
       I know how much is remaining.

US-C3: As a candidate, I want my answers auto-saved so that I don't lose 
       progress if I navigate away.

US-C4: As a candidate, I want clear error messages so that I can fix 
       issues before submitting.

US-C5: As a candidate, I want a confirmation after submitting so that 
       I know my application was received.
```

### 4.3 Hiring Manager Stories

```
US-H1: As a hiring manager, I want to see a quick summary of each candidate 
       so that I can make informed decisions efficiently.

US-H2: As a hiring manager, I want to compare multiple candidates side-by-side 
       so that I can evaluate them fairly.

US-H3: As a hiring manager, I want to see highlighted strengths and concerns 
       so that I can focus on key differentiators.

US-H4: As a hiring manager, I want to update candidate status so that 
       the team knows who is progressing.
```

---

## 5. Non-Functional Requirements

### 5.1 Performance
| Requirement | Specification |
|-------------|---------------|
| Page Load Time | < 2 seconds (First Contentful Paint) |
| API Response Time | < 200ms (95th percentile) |
| AI Analysis Time | < 10 seconds per response |
| Concurrent Users | Support 1000+ simultaneous users |
| Database Queries | < 50ms average |

### 5.2 Security
| Requirement | Specification |
|-------------|---------------|
| Authentication | JWT-based with refresh tokens |
| Authorization | Role-based access control (RBAC) |
| Data Encryption | AES-256 at rest, TLS 1.3 in transit |
| Input Validation | Server-side validation for all inputs |
| Rate Limiting | 100 requests/minute per IP |
| CORS | Strict origin policy |

### 5.3 Reliability
| Requirement | Specification |
|-------------|---------------|
| Uptime | 99.9% availability |
| Backup | Daily automated backups |
| Recovery | < 1 hour RTO, < 24 hour RPO |
| Error Handling | Graceful degradation |

### 5.4 Scalability
| Requirement | Specification |
|-------------|---------------|
| Horizontal Scaling | Stateless architecture |
| Database | Connection pooling, read replicas |
| Caching | Redis for session/response caching |
| CDN | Static asset delivery |

---

## 6. Release Plan

### Phase 1: MVP (Weeks 1-4)
- Core form creation and management
- Basic question types (text, choice, scale)
- Response collection
- Basic AI summary and scoring
- Simple dashboard

### Phase 2: Enhanced AI (Weeks 5-6)
- Advanced AI analysis features
- Strength/concern detection
- Keyword extraction
- Batch analysis

### Phase 3: Collaboration (Weeks 7-8)
- Team comments
- Candidate status pipeline
- Email notifications
- Export functionality

### Phase 4: Advanced Features (Weeks 9-12)
- Comparison view
- Advanced analytics
- Smart templates
- File uploads
- Integrations

---

# Functional Specification Document (FSD)

## 1. System Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                              FRONTEND                                    │
│                         Next.js 14 + Tailwind                           │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐    │
│  │   Public    │  │  Dashboard  │  │    Form     │  │  Analytics  │    │
│  │   Forms     │  │    View     │  │   Builder   │  │    View     │    │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘    │
└────────────────────────────────┬────────────────────────────────────────┘
                                 │ HTTPS/REST
                                 ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                              BACKEND                                     │
│                           NestJS API                                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐    │
│  │    Auth     │  │    Form     │  │  Response   │  │     AI      │    │
│  │   Module    │  │   Module    │  │   Module    │  │   Module    │    │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘    │
└────────────────────────────────┬────────────────────────────────────────┘
                                 │
          ┌──────────────────────┼──────────────────────┐
          ▼                      ▼                      ▼
   ┌─────────────┐       ┌─────────────┐       ┌─────────────┐
   │ PostgreSQL  │       │    Redis    │       │  Gemini AI  │
   │  Database   │       │    Cache    │       │     API     │
   └─────────────┘       └─────────────┘       └─────────────┘
```

---

## 2. Module Specifications

### 2.1 Authentication Module

#### 2.1.1 User Registration
```typescript
// Request
POST /api/auth/register
{
  "email": "string",
  "password": "string",
  "name": "string",
  "organization": "string" // optional
}

// Response
{
  "success": true,
  "data": {
    "user": {
      "id": "uuid",
      "email": "string",
      "name": "string",
      "role": "RECRUITER"
    },
    "accessToken": "jwt_token",
    "refreshToken": "jwt_token"
  }
}
```

#### 2.1.2 User Login
```typescript
// Request
POST /api/auth/login
{
  "email": "string",
  "password": "string"
}

// Response
{
  "success": true,
  "data": {
    "user": {...},
    "accessToken": "jwt_token",
    "refreshToken": "jwt_token"
  }
}
```

#### 2.1.3 Token Refresh
```typescript
// Request
POST /api/auth/refresh
{
  "refreshToken": "string"
}

// Response
{
  "success": true,
  "data": {
    "accessToken": "jwt_token",
    "refreshToken": "jwt_token"
  }
}
```

#### 2.1.4 Password Reset Flow
```
1. User requests reset → POST /api/auth/forgot-password
2. System sends email with reset link
3. User clicks link → Validates token
4. User sets new password → POST /api/auth/reset-password
```

---

### 2.2 Form Management Module

#### 2.2.1 Form Data Structure
```typescript
interface Form {
  id: string;
  title: string;
  description: string;
  createdBy: string;
  organizationId: string;
  status: 'DRAFT' | 'PUBLISHED' | 'CLOSED';
  settings: FormSettings;
  questions: Question[];
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date | null;
  closedAt: Date | null;
}

interface FormSettings {
  collectEmail: boolean;
  allowMultipleSubmissions: boolean;
  showProgressBar: boolean;
  shuffleQuestions: boolean;
  confirmationMessage: string;
  redirectUrl: string | null;
  scheduledOpen: Date | null;
  scheduledClose: Date | null;
  maxResponses: number | null;
  aiAnalysisEnabled: boolean;
  scoringCriteria: ScoringCriteria | null;
}

interface Question {
  id: string;
  formId: string;
  type: QuestionType;
  title: string;
  description: string | null;
  required: boolean;
  order: number;
  options: QuestionOption[] | null;
  validation: ValidationRules | null;
  aiWeight: number; // 0-10, importance for AI scoring
  aiInstructions: string | null; // Custom AI analysis instructions
}

type QuestionType = 
  | 'SHORT_TEXT'
  | 'LONG_TEXT'
  | 'SINGLE_CHOICE'
  | 'MULTIPLE_CHOICE'
  | 'DROPDOWN'
  | 'LINEAR_SCALE'
  | 'DATE'
  | 'FILE_UPLOAD'
  | 'SECTION_BREAK';

interface QuestionOption {
  id: string;
  value: string;
  order: number;
}

interface ValidationRules {
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  minValue?: number;
  maxValue?: number;
  allowedFileTypes?: string[];
  maxFileSize?: number;
}

interface ScoringCriteria {
  categories: ScoringCategory[];
  passingScore: number;
}

interface ScoringCategory {
  name: string;
  weight: number;
  description: string;
}
```

#### 2.2.2 Form CRUD Operations

**Create Form**
```typescript
// Request
POST /api/forms
{
  "title": "Senior Developer Pre-Interview",
  "description": "Initial screening questions",
  "settings": {
    "collectEmail": true,
    "showProgressBar": true,
    "aiAnalysisEnabled": true
  },
  "questions": [...]
}

// Response
{
  "success": true,
  "data": {
    "id": "form_uuid",
    "title": "...",
    "shareUrl": "https://formgenius.app/f/abc123",
    ...
  }
}
```

**Import from Markdown**
```typescript
// Request
POST /api/forms/import-markdown
Content-Type: multipart/form-data
{
  "file": <markdown_file>,
  "title": "Form Title"
}

// Markdown Format Example
/*
# Form Title
## Form Description

---

### Question 1 *
Type: SHORT_TEXT
What is your full name?

---

### Question 2 *
Type: LONG_TEXT
AI_WEIGHT: 8
Describe your experience with React and TypeScript.

---

### Question 3
Type: SINGLE_CHOICE
Options: 1-3 years, 3-5 years, 5-10 years, 10+ years
How many years of experience do you have?

---

### Question 4 *
Type: LINEAR_SCALE
Min: 1
Max: 10
AI_WEIGHT: 6
Rate your proficiency in system design.

*/
```

**Get Form**
```typescript
// Request
GET /api/forms/:id

// Response (authenticated user - full form)
{
  "success": true,
  "data": {
    "id": "uuid",
    "title": "...",
    "questions": [...],
    "responses": [...], // Only for owners
    "analytics": {...}
  }
}
```

**Get Public Form**
```typescript
// Request
GET /api/forms/public/:shareId

// Response (public - no sensitive data)
{
  "success": true,
  "data": {
    "id": "uuid",
    "title": "...",
    "description": "...",
    "settings": {
      "showProgressBar": true
    },
    "questions": [...]
  }
}
```

**Update Form**
```typescript
// Request
PATCH /api/forms/:id
{
  "title": "Updated Title",
  "questions": [...]
}

// Response
{
  "success": true,
  "data": {...}
}
```

**Delete Form**
```typescript
// Request
DELETE /api/forms/:id

// Response
{
  "success": true,
  "message": "Form deleted successfully"
}
```

**Publish/Close Form**
```typescript
// Publish
POST /api/forms/:id/publish

// Close
POST /api/forms/:id/close

// Reopen
POST /api/forms/:id/reopen
```

---

### 2.3 Response Module

#### 2.3.1 Response Data Structure
```typescript
interface FormResponse {
  id: string;
  formId: string;
  respondentEmail: string | null;
  answers: Answer[];
  metadata: ResponseMetadata;
  status: ResponseStatus;
  aiAnalysis: AIAnalysis | null;
  internalNotes: InternalNote[];
  createdAt: Date;
  updatedAt: Date;
}

interface Answer {
  id: string;
  questionId: string;
  value: string | string[] | number | File;
  answeredAt: Date;
}

interface ResponseMetadata {
  ipAddress: string;
  userAgent: string;
  completionTime: number; // seconds
  startedAt: Date;
  submittedAt: Date;
  deviceType: 'DESKTOP' | 'MOBILE' | 'TABLET';
  referrer: string | null;
}

type ResponseStatus = 
  | 'NEW'
  | 'REVIEWING'
  | 'SHORTLISTED'
  | 'REJECTED'
  | 'HIRED';

interface InternalNote {
  id: string;
  userId: string;
  userName: string;
  content: string;
  createdAt: Date;
}
```

#### 2.3.2 Response Operations

**Submit Response (Public)**
```typescript
// Request
POST /api/responses
{
  "formId": "uuid",
  "email": "candidate@email.com",
  "answers": [
    {
      "questionId": "q1_uuid",
      "value": "John Doe"
    },
    {
      "questionId": "q2_uuid",
      "value": "I have 5 years of experience..."
    },
    {
      "questionId": "q3_uuid",
      "value": ["React", "TypeScript", "Node.js"]
    }
  ]
}

// Response
{
  "success": true,
  "data": {
    "id": "response_uuid",
    "message": "Thank you for your submission!"
  }
}
```

**Save Draft (Auto-save)**
```typescript
// Request
POST /api/responses/draft
{
  "formId": "uuid",
  "draftId": "uuid | null", // null for new draft
  "answers": [...]
}

// Response
{
  "success": true,
  "data": {
    "draftId": "uuid",
    "savedAt": "ISO_DATE"
  }
}
```

**Get Responses (Authenticated)**
```typescript
// Request
GET /api/forms/:formId/responses
?page=1
&limit=20
&status=NEW,REVIEWING
&minScore=70
&sortBy=score
&sortOrder=desc
&search=john

// Response
{
  "success": true,
  "data": {
    "responses": [...],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 150,
      "totalPages": 8
    },
    "aggregations": {
      "byStatus": {
        "NEW": 50,
        "REVIEWING": 30,
        "SHORTLISTED": 20
      },
      "averageScore": 72.5,
      "averageCompletionTime": 845
    }
  }
}
```

**Update Response Status**
```typescript
// Request
PATCH /api/responses/:id/status
{
  "status": "SHORTLISTED"
}

// Response
{
  "success": true,
  "data": {...}
}
```

**Add Internal Note**
```typescript
// Request
POST /api/responses/:id/notes
{
  "content": "Strong technical background, proceed to interview"
}

// Response
{
  "success": true,
  "data": {
    "noteId": "uuid",
    "createdAt": "ISO_DATE"
  }
}
```

---

### 2.4 AI Analysis Module

#### 2.4.1 AI Analysis Data Structure
```typescript
interface AIAnalysis {
  id: string;
  responseId: string;
  overallScore: number; // 0-100
  confidence: number; // 0-1
  summary: string;
  strengths: AnalysisPoint[];
  concerns: AnalysisPoint[];
  keywords: Keyword[];
  categoryScores: CategoryScore[];
  sentiment: SentimentAnalysis;
  recommendations: string[];
  rawPrompt: string; // For debugging
  rawResponse: string; // For debugging
  analyzedAt: Date;
  modelVersion: string;
}

interface AnalysisPoint {
  title: string;
  description: string;
  relevantQuestions: string[];
  confidence: number;
}

interface Keyword {
  term: string;
  category: 'SKILL' | 'EXPERIENCE' | 'TRAIT' | 'OTHER';
  frequency: number;
  sentiment: 'POSITIVE' | 'NEUTRAL' | 'NEGATIVE';
}

interface CategoryScore {
  category: string;
  score: number;
  maxScore: number;
  feedback: string;
}

interface SentimentAnalysis {
  overall: 'POSITIVE' | 'NEUTRAL' | 'NEGATIVE';
  score: number; // -1 to 1
  breakdown: {
    questionId: string;
    sentiment: string;
    score: number;
  }[];
}
```

#### 2.4.2 AI Operations

**Trigger Analysis**
```typescript
// Request
POST /api/ai/analyze/:responseId

// Response
{
  "success": true,
  "data": {
    "analysisId": "uuid",
    "status": "PROCESSING"
  }
}
```

**Get Analysis Result**
```typescript
// Request
GET /api/ai/analysis/:responseId

// Response
{
  "success": true,
  "data": {
    "id": "uuid",
    "overallScore": 85,
    "confidence": 0.92,
    "summary": "Strong candidate with 5+ years of full-stack experience...",
    "strengths": [
      {
        "title": "Technical Expertise",
        "description": "Demonstrates deep knowledge of React, TypeScript, and Node.js",
        "relevantQuestions": ["q2", "q5"],
        "confidence": 0.95
      }
    ],
    "concerns": [
      {
        "title": "Limited Management Experience",
        "description": "Has not led teams larger than 3 people",
        "relevantQuestions": ["q7"],
        "confidence": 0.78
      }
    ],
    "keywords": [
      { "term": "React", "category": "SKILL", "frequency": 5, "sentiment": "POSITIVE" },
      { "term": "Leadership", "category": "TRAIT", "frequency": 2, "sentiment": "NEUTRAL" }
    ],
    "categoryScores": [
      { "category": "Technical Skills", "score": 90, "maxScore": 100, "feedback": "..." },
      { "category": "Communication", "score": 82, "maxScore": 100, "feedback": "..." }
    ],
    "sentiment": {
      "overall": "POSITIVE",
      "score": 0.72
    },
    "recommendations": [
      "Ask about leadership aspirations in interview",
      "Probe deeper into system design experience"
    ]
  }
}
```

**Batch Analysis**
```typescript
// Request
POST /api/ai/analyze-batch
{
  "responseIds": ["uuid1", "uuid2", "uuid3"]
}

// Response
{
  "success": true,
  "data": {
    "batchId": "uuid",
    "status": "PROCESSING",
    "total": 3,
    "processed": 0
  }
}
```

**Get Batch Status**
```typescript
// Request
GET /api/ai/batch/:batchId

// Response
{
  "success": true,
  "data": {
    "batchId": "uuid",
    "status": "COMPLETED",
    "total": 3,
    "processed": 3,
    "results": [
      { "responseId": "uuid1", "status": "SUCCESS", "score": 85 },
      { "responseId": "uuid2", "status": "SUCCESS", "score": 72 },
      { "responseId": "uuid3", "status": "FAILED", "error": "..." }
    ]
  }
}
```

**Compare Candidates**
```typescript
// Request
POST /api/ai/compare
{
  "responseIds": ["uuid1", "uuid2", "uuid3"]
}

// Response
{
  "success": true,
  "data": {
    "comparison": {
      "ranking": [
        { "responseId": "uuid1", "rank": 1, "score": 85 },
        { "responseId": "uuid2", "rank": 2, "score": 72 },
        { "responseId": "uuid3", "rank": 3, "score": 68 }
      ],
      "analysis": "Candidate 1 stands out due to...",
      "categoryComparison": [
        {
          "category": "Technical Skills",
          "scores": {
            "uuid1": 90,
            "uuid2": 75,
            "uuid3": 70
          }
        }
      ]
    }
  }
}
```

#### 2.4.3 Gemini Integration Details

**Prompt Engineering for Analysis**
```typescript
const buildAnalysisPrompt = (response: FormResponse, form: Form): string => {
  return `
You are an expert HR analyst. Analyze the following pre-interview form response 
and provide a comprehensive assessment.

## Form Context
Title: ${form.title}
Description: ${form.description}
Scoring Criteria: ${JSON.stringify(form.settings.scoringCriteria)}

## Candidate Responses
${response.answers.map(a => {
  const question = form.questions.find(q => q.id === a.questionId);
  return `
### ${question.title}
${question.aiInstructions ? `Analysis Focus: ${question.aiInstructions}` : ''}
Weight: ${question.aiWeight}/10
Response: ${a.value}
`;
}).join('\n')}

## Required Output (JSON format)
{
  "overallScore": <0-100>,
  "confidence": <0-1>,
  "summary": "<2-3 sentence executive summary>",
  "strengths": [
    {
      "title": "<strength title>",
      "description": "<explanation>",
      "relevantQuestions": ["<question_ids>"],
      "confidence": <0-1>
    }
  ],
  "concerns": [...],
  "keywords": [
    {
      "term": "<keyword>",
      "category": "SKILL|EXPERIENCE|TRAIT|OTHER",
      "frequency": <number>,
      "sentiment": "POSITIVE|NEUTRAL|NEGATIVE"
    }
  ],
  "categoryScores": [
    {
      "category": "<category name>",
      "score": <0-100>,
      "maxScore": 100,
      "feedback": "<specific feedback>"
    }
  ],
  "sentiment": {
    "overall": "POSITIVE|NEUTRAL|NEGATIVE",
    "score": <-1 to 1>
  },
  "recommendations": ["<interview follow-up questions or notes>"]
}

Provide honest, balanced assessment. Be specific with evidence from responses.
`;
};
```

---

### 2.5 Analytics Module

#### 2.5.1 Dashboard Analytics
```typescript
// Request
GET /api/analytics/dashboard

// Response
{
  "success": true,
  "data": {
    "overview": {
      "totalForms": 12,
      "totalResponses": 456,
      "activeFormCount": 5,
      "responsesThisWeek": 34,
      "averageScore": 71.2
    },
    "recentActivity": [
      {
        "type": "NEW_RESPONSE",
        "formId": "uuid",
        "formTitle": "Developer Assessment",
        "respondentEmail": "john@example.com",
        "score": 85,
        "timestamp": "ISO_DATE"
      }
    ],
    "topCandidates": [
      {
        "responseId": "uuid",
        "email": "jane@example.com",
        "formTitle": "...",
        "score": 92,
        "status": "REVIEWING"
      }
    ],
    "formPerformance": [
      {
        "formId": "uuid",
        "title": "...",
        "responseCount": 45,
        "averageScore": 73,
        "completionRate": 0.87
      }
    ]
  }
}
```

#### 2.5.2 Form Analytics
```typescript
// Request
GET /api/analytics/forms/:formId

// Response
{
  "success": true,
  "data": {
    "responseMetrics": {
      "total": 150,
      "thisWeek": 23,
      "thisMonth": 89,
      "completionRate": 0.85,
      "averageCompletionTime": 845
    },
    "scoreDistribution": {
      "0-20": 5,
      "21-40": 12,
      "41-60": 35,
      "61-80": 65,
      "81-100": 33
    },
    "statusBreakdown": {
      "NEW": 50,
      "REVIEWING": 40,
      "SHORTLISTED": 35,
      "REJECTED": 20,
      "HIRED": 5
    },
    "questionAnalytics": [
      {
        "questionId": "uuid",
        "title": "...",
        "averageScore": 75,
        "skipRate": 0.02,
        "averageResponseLength": 245 // for text questions
      }
    ],
    "deviceBreakdown": {
      "DESKTOP": 0.65,
      "MOBILE": 0.30,
      "TABLET": 0.05
    },
    "dropOffAnalysis": {
      "questionId": "q5_uuid",
      "dropOffRate": 0.08,
      "questionTitle": "Describe your system design experience"
    },
    "timeline": [
      {
        "date": "2024-01-15",
        "responses": 12,
        "averageScore": 74
      }
    ]
  }
}
```

---

## 3. Business Logic Rules

### 3.1 Form Rules

| Rule ID | Description |
|---------|-------------|
| FR-01 | Forms must have at least one question to be published |
| FR-02 | Published forms cannot have questions deleted, only deactivated |
| FR-03 | Form share URLs are unique and immutable once created |
| FR-04 | Closed forms reject new submissions with appropriate message |
| FR-05 | Scheduled forms auto-publish/close at specified times |
| FR-06 | Forms reaching maxResponses auto-close |

### 3.2 Response Rules

| Rule ID | Description |
|---------|-------------|
| RR-01 | All required questions must be answered for submission |
| RR-02 | Duplicate submissions blocked by email + form combination (if enabled) |
| RR-03 | Drafts expire after 7 days of inactivity |
| RR-04 | Response status changes are logged in activity |
| RR-05 | Deleted responses are soft-deleted (recoverable for 30 days) |

### 3.3 AI Analysis Rules

| Rule ID | Description |
|---------|-------------|
| AR-01 | AI analysis triggers automatically on submission (if enabled) |
| AR-02 | Manual re-analysis allowed, previous analysis archived |
| AR-03 | Batch analysis limited to 50 responses per request |
| AR-04 | AI confidence below 0.5 triggers manual review flag |
| AR-05 | Rate limited to 100 analyses per hour per organization |

### 3.4 Access Control Rules

| Rule ID | Description |
|---------|-------------|
| AC-01 | Users can only access forms in their organization |
| AC-02 | Public form links require no authentication |
| AC-03 | Only form creators/admins can delete forms |
| AC-04 | All team members can view/comment on responses |
| AC-05 | Only admins can access organization settings |

---

## 4. Error Handling

### 4.1 Error Response Format
```typescript
interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: Record<string, any>;
    timestamp: string;
    requestId: string;
  };
}
```

### 4.2 Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| AUTH_001 | 401 | Invalid credentials |
| AUTH_002 | 401 | Token expired |
| AUTH_003 | 403 | Insufficient permissions |
| FORM_001 | 404 | Form not found |
| FORM_002 | 400 | Invalid form structure |
| FORM_003 | 409 | Form already published |
| FORM_004 | 410 | Form closed |
| RESP_001 | 404 | Response not found |
| RESP_002 | 400 | Invalid response data |
| RESP_003 | 409 | Duplicate submission |
| AI_001 | 503 | AI service unavailable |
| AI_002 | 429 | Rate limit exceeded |
| AI_003 | 500 | Analysis failed |
| VAL_001 | 400 | Validation error |
| SYS_001 | 500 | Internal server error |

---

# UI/UX Design Guidelines

## 1. Design Philosophy

### 1.1 Core Principles

```
┌─────────────────────────────────────────────────────────────────┐
│                    FORMGENIUS DESIGN PILLARS                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ╭─────────╮    ╭─────────╮    ╭─────────╮    ╭─────────╮     │
│   │ MINIMAL │    │  FLUID  │    │ FOCUSED │    │  WARM   │     │
│   │         │    │         │    │         │    │         │     │
│   │ Remove  │    │ Smooth  │    │ Guide   │    │ Human   │     │
│   │ clutter │    │ motion  │    │ attention│    │ touch   │     │
│   ╰─────────╯    ╰─────────╯    ╰─────────╯    ╰─────────╯     │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

**Minimalism**
- Every element must earn its place
- Generous whitespace for breathing room
- No decorative elements without function
- Information hierarchy through typography, not decoration

**Fluidity**
- Micro-animations for state changes
- Smooth transitions between views
- Natural, physics-based motion
- Progressive disclosure of complexity

**Focus**
- One primary action per screen
- Clear visual hierarchy
- Reduced cognitive load
- Contextual actions, not cluttered toolbars

**Warmth**
- Approachable, not corporate
- Subtle personality in interactions
- Encouraging feedback for candidates
- Celebratory moments for achievements

---

## 2. Visual Design System

### 2.1 Color Palette

```scss
// Primary Colors
$colors: (
  // Brand
  primary-50: #f0f9ff,
  primary-100: #e0f2fe,
  primary-200: #bae6fd,
  primary-300: #7dd3fc,
  primary-400: #38bdf8,
  primary-500: #0ea5e9,  // Primary action
  primary-600: #0284c7,
  primary-700: #0369a1,
  primary-800: #075985,
  primary-900: #0c4a6e,

  // Neutrals (Warm Gray)
  neutral-50: #fafaf9,
  neutral-100: #f5f5f4,
  neutral-200: #e7e5e4,
  neutral-300: #d6d3d1,
  neutral-400: #a8a29e,
  neutral-500: #78716c,
  neutral-600: #57534e,
  neutral-700: #44403c,
  neutral-800: #292524,
  neutral-900: #1c1917,

  // Semantic
  success-500: #22c55e,
  success-50: #f0fdf4,
  warning-500: #f59e0b,
  warning-50: #fffbeb,
  error-500: #ef4444,
  error-50: #fef2f2,
  info-500: #3b82f6,
  info-50: #eff6ff,

  // AI Accent (Purple gradient for AI features)
  ai-from: #8b5cf6,
  ai-to: #d946ef,

  // Score Colors
  score-excellent: #22c55e,  // 80-100
  score-good: #84cc16,       // 60-79
  score-average: #f59e0b,    // 40-59
  score-below: #f97316,      // 20-39
  score-poor: #ef4444        // 0-19
);
```

### 2.2 Typography

```scss
// Font Family
$font-family-sans: 'Inter', system-ui, -apple-system, sans-serif;
$font-family-mono: 'JetBrains Mono', 'Fira Code', monospace;

// Type Scale
$type-scale: (
  // Display
  display-2xl: (
    size: 4.5rem,      // 72px
    line-height: 1,
    weight: 700,
    tracking: -0.025em
  ),
  display-xl: (
    size: 3.75rem,     // 60px
    line-height: 1,
    weight: 700,
    tracking: -0.025em
  ),
  display-lg: (
    size: 3rem,        // 48px
    line-height: 1.1,
    weight: 600,
    tracking: -0.02em
  ),

  // Headings
  h1: (
    size: 2.25rem,     // 36px
    line-height: 1.2,
    weight: 600,
    tracking: -0.02em
  ),
  h2: (
    size: 1.875rem,    // 30px
    line-height: 1.25,
    weight: 600,
    tracking: -0.015em
  ),
  h3: (
    size: 1.5rem,      // 24px
    line-height: 1.3,
    weight: 600,
    tracking: -0.01em
  ),
  h4: (
    size: 1.25rem,     // 20px
    line-height: 1.4,
    weight: 600,
    tracking: 0
  ),

  // Body
  body-lg: (
    size: 1.125rem,    // 18px
    line-height: 1.6,
    weight: 400
  ),
  body: (
    size: 1rem,        // 16px
    line-height: 1.6,
    weight: 400
  ),
  body-sm: (
    size: 0.875rem,    // 14px
    line-height: 1.5,
    weight: 400
  ),

  // Caption
  caption: (
    size: 0.75rem,     // 12px
    line-height: 1.5,
    weight: 500
  ),

  // Labels
  label: (
    size: 0.875rem,    // 14px
    line-height: 1.4,
    weight: 500
  )
);
```

### 2.3 Spacing System

```scss
// 4px base unit
$spacing: (
  0: 0,
  px: 1px,
  0.5: 0.125rem,   // 2px
  1: 0.25rem,      // 4px
  1.5: 0.375rem,   // 6px
  2: 0.5rem,       // 8px
  2.5: 0.625rem,   // 10px
  3: 0.75rem,      // 12px
  3.5: 0.875rem,   // 14px
  4: 1rem,         // 16px
  5: 1.25rem,      // 20px
  6: 1.5rem,       // 24px
  7: 1.75rem,      // 28px
  8: 2rem,         // 32px
  9: 2.25rem,      // 36px
  10: 2.5rem,      // 40px
  11: 2.75rem,     // 44px
  12: 3rem,        // 48px
  14: 3.5rem,      // 56px
  16: 4rem,        // 64px
  20: 5rem,        // 80px
  24: 6rem,        // 96px
  28: 7rem,        // 112px
  32: 8rem,        // 128px
);
```

### 2.4 Shadows & Elevation

```scss
$shadows: (
  // Subtle shadows for cards
  xs: 0 1px 2px 0 rgb(0 0 0 / 0.05),
  sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1),
  md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1),
  lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1),
  xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1),
  2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25),

  // Inner shadow for inputs
  inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05),

  // Glow for focus states
  glow-primary: 0 0 0 3px rgba(14, 165, 233, 0.15),
  glow-error: 0 0 0 3px rgba(239, 68, 68, 0.15),
  glow-success: 0 0 0 3px rgba(34, 197, 94, 0.15),

  // AI gradient shadow
  glow-ai: 0 0 20px rgba(139, 92, 246, 0.3)
);
```

### 2.5 Border Radius

```scss
$radii: (
  none: 0,
  sm: 0.25rem,     // 4px
  md: 0.375rem,    // 6px
  lg: 0.5rem,      // 8px
  xl: 0.75rem,     // 12px
  2xl: 1rem,       // 16px
  3xl: 1.5rem,     // 24px
  full: 9999px
);
```

---

## 3. Component Library

### 3.1 Buttons

```tsx
// Button Variants
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'ai';
type ButtonSize = 'sm' | 'md' | 'lg';

// Primary Button
<Button variant="primary" size="md">
  Create Form
</Button>

// Styles
.button-primary {
  @apply bg-primary-500 text-white font-medium;
  @apply hover:bg-primary-600;
  @apply active:bg-primary-700;
  @apply focus:outline-none focus:ring-2 focus:ring-primary-500/20;
  @apply transition-all duration-200;
  @apply disabled:opacity-50 disabled:cursor-not-allowed;
}

// AI Button (Gradient)
.button-ai {
  @apply bg-gradient-to-r from-violet-500 to-fuchsia-500;
  @apply text-white font-medium;
  @apply hover:from-violet-600 hover:to-fuchsia-600;
  @apply shadow-lg shadow-violet-500/25;
}

// Button Sizes
.button-sm { @apply px-3 py-1.5 text-sm rounded-md; }
.button-md { @apply px-4 py-2 text-sm rounded-lg; }
.button-lg { @apply px-6 py-3 text-base rounded-xl; }
```

**Button States Animation**
```css
.button {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.button:hover {
  transform: translateY(-1px);
}

.button:active {
  transform: translateY(0);
  transition-duration: 0.1s;
}

/* Loading state */
.button-loading {
  position: relative;
  color: transparent;
}

.button-loading::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}
```

### 3.2 Input Fields

```tsx
// Text Input
<Input
  label="Full Name"
  placeholder="Enter your name"
  hint="As it appears on your ID"
  error="Name is required"
/>

// Styles
.input-wrapper {
  @apply flex flex-col gap-1.5;
}

.input-label {
  @apply text-sm font-medium text-neutral-700;
}

.input-field {
  @apply w-full px-4 py-2.5;
  @apply bg-white border border-neutral-200 rounded-xl;
  @apply text-neutral-900 placeholder:text-neutral-400;
  @apply transition-all duration-200;
  @apply focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10;
}

.input-field:hover:not(:focus) {
  @apply border-neutral-300;
}

.input-error {
  @apply border-error-500 focus:border-error-500 focus:ring-error-500/10;
}

.input-hint {
  @apply text-xs text-neutral-500;
}

.input-error-message {
  @apply text-xs text-error-500 flex items-center gap-1;
}
```

**Input Animation**
```css
/* Label float animation */
.input-floating-label {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.2s ease-out;
  pointer-events: none;
  color: var(--neutral-400);
}

.input-field:focus + .input-floating-label,
.input-field:not(:placeholder-shown) + .input-floating-label {
  top: 0;
  transform: translateY(-50%) scale(0.85);
  background: white;
  padding: 0 4px;
  color: var(--primary-500);
}

/* Error shake animation */
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-4px); }
  40%, 80% { transform: translateX(4px); }
}

.input-shake {
  animation: shake 0.4s ease-out;
}
```

### 3.3 Cards

```tsx
// Base Card
<Card variant="default" padding="lg">
  <CardContent />
</Card>

// Styles
.card {
  @apply bg-white rounded-2xl;
  @apply border border-neutral-100;
  @apply shadow-sm;
  @apply transition-all duration-300;
}

.card-hover {
  @apply hover:shadow-md hover:border-neutral-200;
  @apply hover:-translate-y-0.5;
}

.card-interactive {
  @apply cursor-pointer;
  @apply active:scale-[0.99];
}

// AI Card (Special)
.card-ai {
  @apply bg-gradient-to-br from-violet-50 to-fuchsia-50;
  @apply border-violet-100;
  position: relative;
  overflow: hidden;
}

.card-ai::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(to right, var(--violet-500), var(--fuchsia-500));
}
```

### 3.4 Score Display

```tsx
// Score Circle
<ScoreCircle score={85} size="lg" animated />

// Styles & Animation
.score-circle {
  position: relative;
  width: var(--size);
  height: var(--size);
}

.score-circle-bg {
  stroke: var(--neutral-100);
  fill: none;
}

.score-circle-progress {
  stroke: var(--score-color);
  fill: none;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: center;
  transition: stroke-dashoffset 1s ease-out;
}

.score-value {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: var(--value-size);
}

/* Animated count up */
@keyframes countUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### 3.5 Progress Bar

```tsx
// Form Progress
<ProgressBar 
  current={3} 
  total={10} 
  showLabel 
  animated 
/>

// Styles
.progress-container {
  @apply w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden;
}

.progress-bar {
  @apply h-full bg-primary-500 rounded-full;
  @apply transition-all duration-500 ease-out;
}

.progress-label {
  @apply text-sm text-neutral-500 mt-2;
}

/* Shimmer effect for active state */
.progress-bar-active {
  background: linear-gradient(
    90deg,
    var(--primary-500) 0%,
    var(--primary-400) 50%,
    var(--primary-500) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### 3.6 Toast Notifications

```tsx
// Toast Types
<Toast 
  type="success" 
  message="Form published successfully!" 
  action={{ label: 'View', onClick: () => {} }}
/>

// Styles
.toast {
  @apply flex items-center gap-3 px-4 py-3;
  @apply bg-white rounded-xl shadow-lg;
  @apply border border-neutral-100;
  @apply min-w-80 max-w-md;
}

.toast-icon {
  @apply w-5 h-5 flex-shrink-0;
}

.toast-success .toast-icon { @apply text-success-500; }
.toast-error .toast-icon { @apply text-error-500; }
.toast-warning .toast-icon { @apply text-warning-500; }
.toast-info .toast-icon { @apply text-info-500; }

/* Enter/Exit animations */
.toast-enter {
  animation: slideInRight 0.3s ease-out;
}

.toast-exit {
  animation: slideOutRight 0.2s ease-in forwards;
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOutRight {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}
```

---

## 4. Micro-Animations Catalog

### 4.1 Page Transitions

```tsx
// Page wrapper with Framer Motion
import { motion, AnimatePresence } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

<AnimatePresence mode="wait">
  <motion.div
    key={router.pathname}
    variants={pageVariants}
    initial="initial"
    animate="enter"
    exit="exit"
  >
    {children}
  </motion.div>
</AnimatePresence>
```

### 4.2 List Stagger Animation

```tsx
// Stagger children animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95,
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24,
    },
  },
};

<motion.ul variants={containerVariants} initial="hidden" animate="show">
  {items.map((item) => (
    <motion.li key={item.id} variants={itemVariants}>
      {item.content}
    </motion.li>
  ))}
</motion.ul>
```

### 4.3 Hover Effects

```tsx
// Card hover
const cardHoverVariants = {
  rest: {
    scale: 1,
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  hover: {
    scale: 1.02,
    boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 17,
    },
  },
  tap: {
    scale: 0.98,
  },
};

// Icon button hover
.icon-button {
  @apply relative overflow-hidden;
}

.icon-button::before {
  content: '';
  @apply absolute inset-0 bg-neutral-900/5 rounded-full;
  @apply scale-0 transition-transform duration-200;
}

.icon-button:hover::before {
  @apply scale-100;
}
```

### 4.4 Loading States

```tsx
// Skeleton loader
const SkeletonPulse = () => (
  <div className="skeleton">
    <div className="skeleton-shimmer" />
  </div>
);

// CSS
.skeleton {
  @apply bg-neutral-100 rounded-lg overflow-hidden;
  position: relative;
}

.skeleton-shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.5) 50%,
    transparent 100%
  );
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

// Spinner
.spinner {
  @apply w-5 h-5 border-2 border-primary-500/30 rounded-full;
  border-top-color: var(--primary-500);
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

// Dots loader
.dots-loader {
  display: flex;
  gap: 4px;
}

.dot {
  @apply w-2 h-2 bg-primary-500 rounded-full;
  animation: bounce 1.4s ease-in-out infinite;
}

.dot:nth-child(1) { animation-delay: 0s; }
.dot:nth-child(2) { animation-delay: 0.16s; }
.dot:nth-child(3) { animation-delay: 0.32s; }

@keyframes bounce {
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.5; }
  40% { transform: scale(1); opacity: 1; }
}
```

### 4.5 Form Interactions

```tsx
// Question transition
const questionVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  }),
};

// Checkbox/Radio animation
.checkbox-indicator {
  @apply w-5 h-5 border-2 border-neutral-300 rounded-md;
  @apply flex items-center justify-center;
  @apply transition-all duration-200;
}

.checkbox-indicator[data-checked="true"] {
  @apply bg-primary-500 border-primary-500;
  animation: checkPop 0.3s ease-out;
}

@keyframes checkPop {
  0% { transform: scale(0.8); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

// Success checkmark draw
.checkmark {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: drawCheck 0.5s ease-out forwards;
  animation-delay: 0.2s;
}

@keyframes drawCheck {
  to { stroke-dashoffset: 0; }
}
```

### 4.6 AI Analysis Animation

```tsx
// AI processing animation
const AIProcessingIndicator = () => (
  <motion.div
    className="ai-indicator"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
  >
    <motion.div
      className="ai-pulse"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
    <SparklesIcon className="ai-icon" />
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      Analyzing with AI...
    </motion.span>
  </motion.div>
);

// CSS
.ai-indicator {
  @apply flex items-center gap-3 px-4 py-3;
  @apply bg-gradient-to-r from-violet-50 to-fuchsia-50;
  @apply rounded-xl border border-violet-100;
}

.ai-pulse {
  @apply absolute inset-0 rounded-xl;
  background: linear-gradient(to right, var(--violet-200), var(--fuchsia-200));
}

.ai-icon {
  @apply w-5 h-5 text-violet-500;
  animation: sparkle 1.5s ease-in-out infinite;
}

@keyframes sparkle {
  0%, 100% { transform: rotate(0deg) scale(1); }
  25% { transform: rotate(-10deg) scale(1.1); }
  75% { transform: rotate(10deg) scale(1.1); }
}

// Score reveal animation
const ScoreReveal = ({ score }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      type: 'spring',
      stiffness: 200,
      damping: 15,
    }}
  >
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {score}
    </motion.span>
  </motion.div>
);
```

### 4.7 Celebration Animation

```tsx
// Confetti for high scores or form completion
import confetti from 'canvas-confetti';

const celebrateScore = (score: number) => {
  if (score >= 90) {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#8b5cf6', '#d946ef', '#22c55e'],
    });
  } else if (score >= 80) {
    confetti({
      particleCount: 50,
      spread: 50,
      origin: { y: 0.6 },
    });
  }
};

// Success screen animation
const SuccessScreen = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="success-screen"
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 15,
        delay: 0.2,
      }}
      className="success-icon"
    >
      <CheckCircleIcon />
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      Submission Complete!
    </motion.h2>
  </motion.div>
);
```

---

## 5. Screen Layouts

### 5.1 Dashboard Layout

```
┌────────────────────────────────────────────────────────────────────────┐
│ ╭────────╮                                          🔔  👤 John Doe ▾ │
│ │  LOGO  │  Dashboard   Forms   Responses   Analytics                  │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  Welcome back, John 👋                              ╭──────────────╮  │
│                                                     │ + Create Form │  │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐   ╰──────────────╯  │
│  │   12        │ │   456       │ │   72.5      │                      │
│  │ Active Forms│ │  Responses  │ │  Avg Score  │                      │
│  │   ↑ 2       │ │   ↑ 34      │ │   ↑ 3.2     │                      │
│  └─────────────┘ └─────────────┘ └─────────────┘                      │
│                                                                        │
│  Recent Responses                            View All →                │
│  ┌─────────────────────────────────────────────────────────────────┐  │
│  │ 🧑 Jane Smith          Developer Form        ⭐ 92   NEW    2m  │  │
│  ├─────────────────────────────────────────────────────────────────┤  │
│  │ 🧑 Mike Johnson        Designer Form         ⭐ 78   NEW   15m  │  │
│  ├─────────────────────────────────────────────────────────────────┤  │
│  │ 🧑 Sarah Williams      PM Assessment         ⭐ 85   REV    1h  │  │
│  └─────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  Your Forms                                                            │
│  ┌──────────────────────┐ ┌──────────────────────┐                    │
│  │ Senior Developer     │ │ UI/UX Designer       │                    │
│  │ Pre-Interview        │ │ Assessment           │                    │
│  │                      │ │                      │                    │
│  │ 45 responses         │ │ 23 responses         │                    │
│  │ 73% completion       │ │ 81% completion       │                    │
│  └──────────────────────┘ └──────────────────────┘                    │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

### 5.2 Form Builder Layout

```
┌────────────────────────────────────────────────────────────────────────┐
│ ← Back to Dashboard        Form Builder             Preview  Publish  │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌────────────────────────┐  ┌───────────────────────────────────────┐│
│  │                        │  │                                       ││
│  │  📝 Form Settings      │  │  ╭─────────────────────────────────╮  ││
│  │                        │  │  │                                 │  ││
│  │  Title:                │  │  │   Senior Developer              │  ││
│  │  ┌──────────────────┐  │  │  │   Pre-Interview Assessment      │  ││
│  │  │ Senior Developer │  │  │  │                                 │  ││
│  │  └──────────────────┘  │  │  │   Please complete all questions │  ││
│  │                        │  │  │                                 │  ││
│  │  Description:          │  │  ╰─────────────────────────────────╯  ││
│  │  ┌──────────────────┐  │  │                                       ││
│  │  │ Pre-interview... │  │  │  ┌───────────────────────────────┐   ││
│  │  └──────────────────┘  │  │  │ 1. What is your full name? *  │   ││
│  │                        │  │  │ ┌─────────────────────────┐   │   ││
│  │  ───────────────────   │  │  │ │ Your answer             │   │   ││
│  │                        │  │  │ └─────────────────────────┘   │   ││
│  │  🧩 Add Question       │  │  └───────────────────────────────┘   ││
│  │                        │  │                                       ││
│  │  ├ Short Text          │  │  ┌───────────────────────────────┐   ││
│  │  ├ Long Text           │  │  │ 2. Describe your experience * │   ││
│  │  ├ Single Choice       │  │  │ ┌─────────────────────────┐   │   ││
│  │  ├ Multiple Choice     │  │  │ │                         │   │   ││
│  │  ├ Dropdown            │  │  │ │                         │   │   ││
│  │  ├ Linear Scale        │  │  │ │                         │   │   ││
│  │  └ Section Break       │  │  │ └─────────────────────────┘   │   ││
│  │                        │  │  └───────────────────────────────┘   ││
│  │  ───────────────────   │  │                                       ││
│  │                        │  │  ╭─ + Add Question ─╮                 ││
│  │  ⚙️ Settings           │  │  ╰──────────────────╯                 ││
│  │  ☑️ Collect email      │  │                                       ││
│  │  ☑️ Show progress      │  │                                       ││
│  │  ☑️ AI Analysis        │  │                                       ││
│  │                        │  │                                       ││
│  └────────────────────────┘  └───────────────────────────────────────┘│
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

### 5.3 Public Form View (Candidate)

```
┌────────────────────────────────────────────────────────────────────────┐
│                         ▬▬▬▬▬▬▬▬▬▬▬░░░░░ 40%                          │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│                                                                        │
│              ╭─────────────────────────────────────────╮              │
│              │                                         │              │
│              │      Senior Developer Assessment        │              │
│              │                                         │              │
│              │      TechCorp Inc.                      │              │
│              │                                         │              │
│              ╰─────────────────────────────────────────╯              │
│                                                                        │
│              ┌─────────────────────────────────────────┐              │
│              │                                         │              │
│              │  4. Rate your experience with React     │              │
│              │                                         │              │
│              │     1    2    3    4    5    6    7     │              │
│              │     ○    ○    ○    ○    ●    ○    ○     │              │
│              │   None              Expert              │              │
│              │                                         │              │
│              └─────────────────────────────────────────┘              │
│                                                                        │
│              ┌─────────────────────────────────────────┐              │
│              │                                         │              │
│              │  5. Describe a challenging project *    │              │
│              │                                         │              │
│              │  ┌─────────────────────────────────┐   │              │
│              │  │                                 │   │              │
│              │  │                                 │   │              │
│              │  │                                 │   │              │
│              │  │                                 │   │              │
│              │  └─────────────────────────────────┘   │              │
│              │                                         │              │
│              └─────────────────────────────────────────┘              │
│                                                                        │
│                   ← Previous            Next →                         │
│                                                                        │
│                                                                        │
│              ─────────────────────────────────────────                │
│                        Powered by FormGenius                          │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

### 5.4 Response Detail with AI Analysis

```
┌────────────────────────────────────────────────────────────────────────┐
│ ← All Responses        Jane Smith's Response        ⋯ More Actions    │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌──────────────────────────────────┐ ┌──────────────────────────────┐│
│  │                                  │ │  ✨ AI Analysis              ││
│  │  👤 Jane Smith                   │ │  ─────────────────────────── ││
│  │     jane.smith@email.com         │ │                              ││
│  │                                  │ │    ╭───────╮                 ││
│  │  Status: ┌─────────────┐         │ │    │  92   │  Excellent     ││
│  │          │ Reviewing ▾ │         │ │    │       │                 ││
│  │          └─────────────┘         │ │    ╰───────╯                 ││
│  │                                  │ │    Confidence: 94%           ││
│  │  ⏱️ Completed in: 14 min 23 sec  │ │                              ││
│  │  📅 Submitted: Dec 8, 2024       │ │  Summary                     ││
│  │                                  │ │  ─────────                   ││
│  │  ─────────────────────────────   │ │  Strong full-stack developer ││
│  │                                  │ │  with 6 years of React and   ││
│  │  📝 Responses                    │ │  TypeScript experience.      ││
│  │                                  │ │  Excellent communication...  ││
│  │  ┌────────────────────────────┐  │ │                              ││
│  │  │ 1. Full Name               │  │ │  💪 Strengths               ││
│  │  │    Jane Elizabeth Smith    │  │ │  ─────────                   ││
│  │  └────────────────────────────┘  │ │  • Technical Expertise (95%)││
│  │                                  │ │  • Problem Solving (90%)     ││
│  │  ┌────────────────────────────┐  │ │  • Communication (88%)       ││
│  │  │ 2. Years of Experience     │  │ │                              ││
│  │  │    5-10 years              │  │ │  ⚠️ Areas to Explore        ││
│  │  └────────────────────────────┘  │ │  ─────────────────           ││
│  │                                  │ │  • Team leadership exp.      ││
│  │  ┌────────────────────────────┐  │ │  • Large-scale systems       ││
│  │  │ 3. Describe your exp...    │  │ │                              ││
│  │  │                            │  │ │  🏷️ Keywords                ││
│  │  │    I have been working     │  │ │  ─────────                   ││
│  │  │    with React and          │  │ │  React  TypeScript  Node.js  ││
│  │  │    TypeScript for over     │  │ │  AWS  PostgreSQL  GraphQL    ││
│  │  │    6 years now. In my...   │  │ │                              ││
│  │  └────────────────────────────┘  │ │  📋 Interview Questions      ││
│  │                                  │ │  ─────────────────────       ││
│  │                                  │ │  • Ask about team scaling... ││
│  │                                  │ │  • Probe system design...    ││
│  │                                  │ │                              ││
│  └──────────────────────────────────┘ └──────────────────────────────┘│
│                                                                        │
│  💬 Internal Notes                                    + Add Note       │
│  ──────────────────────────────────────────────────────────────────   │
│  │ John D. (2h ago): Strong candidate, schedule technical interview │  │
│  │ Sarah M. (1h ago): Agreed. Let's prioritize this one.           │  │
│  ──────────────────────────────────────────────────────────────────   │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

### 5.5 Comparison View

```
┌────────────────────────────────────────────────────────────────────────┐
│ ← Back               Compare Candidates                    Export PDF  │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  Comparing 3 candidates for: Senior Developer Position                 │
│                                                                        │
│  ┌─────────────────────┬─────────────────────┬─────────────────────┐  │
│  │  👤 Jane Smith      │  👤 Mike Johnson    │  👤 Sarah Williams  │  │
│  │  ──────────────     │  ──────────────     │  ──────────────     │  │
│  │                     │                     │                     │  │
│  │    ╭───╮            │    ╭───╮            │    ╭───╮            │  │
│  │    │92 │ #1         │    │78 │ #2         │    │71 │ #3         │  │
│  │    ╰───╯            │    ╰───╯            │    ╰───╯            │  │
│  │                     │                     │                     │  │
│  │  Technical ████████░ │  Technical █████░░░ │  Technical ████░░░░ │  │
│  │           90%       │            72%      │            65%      │  │
│  │                     │                     │                     │  │
│  │  Communic ████████░ │  Communic ███████░░ │  Communic ████████░ │  │
│  │           88%       │           80%       │            85%      │  │
│  │                     │                     │                     │  │
│  │  Problem  █████████░│  Problem  █████░░░░ │  Problem  ██████░░░ │  │
│  │           95%       │           68%       │            75%      │  │
│  │                     │                     │                     │  │
│  │  ──────────────     │  ──────────────     │  ──────────────     │  │
│  │                     │                     │                     │  │
│  │  Key Strengths:     │  Key Strengths:     │  Key Strengths:     │  │
│  │  • React expert     │  • System design    │  • Communication    │  │
│  │  • Clean code       │  • DevOps exp       │  • Leadership       │  │
│  │                     │                     │                     │  │
│  │  Concerns:          │  Concerns:          │  Concerns:          │  │
│  │  • Team lead exp    │  • Frontend gaps    │  • Technical depth  │  │
│  │                     │                     │                     │  │
│  │  ┌───────────────┐  │  ┌───────────────┐  │  ┌───────────────┐  │  │
│  │  │  Shortlist ✓  │  │  │  Shortlist    │  │  │   Reject      │  │  │
│  │  └───────────────┘  │  └───────────────┘  │  └───────────────┘  │  │
│  │                     │                     │                     │  │
│  └─────────────────────┴─────────────────────┴─────────────────────┘  │
│                                                                        │
│  ✨ AI Recommendation                                                  │
│  ────────────────────────────────────────────────────────────────────  │
│  Jane Smith is the strongest candidate overall, excelling in          │
│  technical skills and problem-solving. Consider Mike Johnson for      │
│  roles requiring more DevOps/infrastructure focus.                    │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 6. Responsive Design

### 6.1 Breakpoints

```scss
$breakpoints: (
  sm: 640px,   // Mobile landscape
  md: 768px,   // Tablet
  lg: 1024px,  // Desktop
  xl: 1280px,  // Large desktop
  2xl: 1536px  // Extra large
);
```

### 6.2 Mobile Adaptations

```
MOBILE FORM VIEW (< 640px)
┌─────────────────────────┐
│  ▬▬▬▬▬▬▬░░░░░ 40%       │
├─────────────────────────┤
│                         │
│  Senior Developer       │
│  Assessment             │
│                         │
│  ─────────────────────  │
│                         │
│  4. Rate your React     │
│     experience          │
│                         │
│    1  2  3  4  5  6  7  │
│    ○  ○  ○  ○  ●  ○  ○  │
│                         │
│  ─────────────────────  │
│                         │
│  5. Describe a project  │
│     you're proud of *   │
│                         │
│  ┌───────────────────┐  │
│  │                   │  │
│  │                   │  │
│  │                   │  │
│  └───────────────────┘  │
│                         │
│  ─────────────────────  │
│                         │
│  ┌─────────────────────┐│
│  │       Next →        ││
│  └─────────────────────┘│
│                         │
└─────────────────────────┘

MOBILE DASHBOARD
┌─────────────────────────┐
│  ☰  FormGenius      👤  │
├─────────────────────────┤
│                         │
│  Welcome, John 👋       │
│                         │
│  ┌─────────────────────┐│
│  │   + Create Form     ││
│  └─────────────────────┘│
│                         │
│  ┌─────┐ ┌─────┐ ┌─────┐│
│  │ 12  │ │ 456 │ │ 72  ││
│  │Forms│ │Resp │ │Score││
│  └─────┘ └─────┘ └─────┘│
│                         │
│  Recent Responses       │
│                         │
│  ┌─────────────────────┐│
│  │ 👤 Jane Smith       ││
│  │    Developer Form   ││
│  │    ⭐ 92  NEW  2m   ││
│  └─────────────────────┘│
│                         │
│  ┌─────────────────────┐│
│  │ 👤 Mike Johnson     ││
│  │    Designer Form    ││
│  │    ⭐ 78  NEW  15m  ││
│  └─────────────────────┘│
│                         │
├─────────────────────────┤
│  🏠    📋    📊    ⚙️   │
│ Home  Forms Stats  Set  │
└─────────────────────────┘
```

---

## 7. Accessibility Guidelines

### 7.1 WCAG 2.1 AA Compliance

```tsx
// Color Contrast
// All text must meet minimum contrast ratios:
// - Normal text: 4.5:1
// - Large text (18px+ or 14px+ bold): 3:1
// - UI components: 3:1

// Focus States
.focusable:focus-visible {
  @apply outline-none ring-2 ring-primary-500 ring-offset-2;
}

// Skip Link
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
             focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:rounded-lg"
>
  Skip to main content
</a>

// Form Labels
<label htmlFor="name" className="block text-sm font-medium">
  Full Name
  <span className="text-error-500" aria-label="required">*</span>
</label>
<input
  id="name"
  name="name"
  type="text"
  aria-required="true"
  aria-describedby="name-hint name-error"
/>
<p id="name-hint" className="text-xs text-neutral-500">
  As it appears on your ID
</p>
<p id="name-error" className="text-xs text-error-500" role="alert">
  Name is required
</p>

// Live Regions for Dynamic Content
<div aria-live="polite" aria-atomic="true" className="sr-only">
  {statusMessage}
</div>

// Reduced Motion
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 7.2 Keyboard Navigation

```tsx
// Tab order follows logical flow
// All interactive elements are keyboard accessible
// Custom components implement proper ARIA roles

// Radio Group
<div role="radiogroup" aria-labelledby="question-4">
  <h3 id="question-4">Rate your experience</h3>
  {options.map((option, index) => (
    <label key={option.value}>
      <input
        type="radio"
        name="experience"
        value={option.value}
        aria-checked={selected === option.value}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            focusNext();
          } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            focusPrevious();
          }
        }}
      />
      {option.label}
    </label>
  ))}
</div>

// Modal Dialog
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <h2 id="modal-title">Confirm Delete</h2>
  <p id="modal-description">Are you sure you want to delete this form?</p>
</div>
```

---

# Technical Architecture

## 1. Project Structure

### 1.1 Monorepo Structure

```
formgenius/
├── apps/
│   ├── web/                    # Next.js frontend
│   │   ├── app/                # App router pages
│   │   │   ├── (auth)/         # Auth pages (login, register)
│   │   │   ├── (dashboard)/    # Protected dashboard pages
│   │   │   ├── (public)/       # Public pages (form view)
│   │   │   ├── api/            # API routes (if needed)
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── components/
│   │   │   ├── ui/             # Base UI components
│   │   │   ├── forms/          # Form-related components
│   │   │   ├── dashboard/      # Dashboard components
│   │   │   ├── ai/             # AI analysis components
│   │   │   └── shared/         # Shared components
│   │   ├── hooks/              # Custom React hooks
│   │   ├── lib/                # Utilities, API client
│   │   ├── stores/             # Zustand stores
│   │   ├── styles/             # Global styles
│   │   ├── types/              # TypeScript types
│   │   └── utils/              # Helper functions
│   │
│   └── api/                    # NestJS backend
│       ├── src/
│       │   ├── modules/
│       │   │   ├── auth/
│       │   │   │   ├── auth.module.ts
│       │   │   │   ├── auth.controller.ts
│       │   │   │   ├── auth.service.ts
│       │   │   │   ├── strategies/
│       │   │   │   └── guards/
│       │   │   ├── forms/
│       │   │   │   ├── forms.module.ts
│       │   │   │   ├── forms.controller.ts
│       │   │   │   ├── forms.service.ts
│       │   │   │   ├── dto/
│       │   │   │   └── entities/
│       │   │   ├── responses/
│       │   │   ├── ai/
│       │   │   │   ├── ai.module.ts
│       │   │   │   ├── ai.service.ts
│       │   │   │   ├── gemini.service.ts
│       │   │   │   └── prompts/
│       │   │   ├── analytics/
│       │   │   └── users/
│       │   ├── common/
│       │   │   ├── decorators/
│       │   │   ├── filters/
│       │   │   ├── guards/
│       │   │   ├── interceptors/
│       │   │   └── pipes/
│       │   ├── config/
│       │   ├── database/
│       │   │   ├── migrations/
│       │   │   └── seeds/
│       │   ├── app.module.ts
│       │   └── main.ts
│       └── test/
│
├── packages/
│   ├── shared/                 # Shared types, utilities
│   │   ├── types/
│   │   ├── constants/
│   │   └── utils/
│   ├── ui/                     # Shared UI components (if needed)
│   └── config/                 # Shared configuration
│
├── prisma/
│   ├── schema.prisma           # Database schema
│   └── migrations/
│
├── docker/
│   ├── Dockerfile.web
│   ├── Dockerfile.api
│   └── docker-compose.yml
│
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
│
├── turbo.json                  # Turborepo config
├── package.json
└── README.md
```

### 1.2 Frontend Structure Detail (Next.js)

```
apps/web/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   ├── forgot-password/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   │
│   ├── (dashboard)/
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── forms/
│   │   │   ├── page.tsx              # Forms list
│   │   │   ├── new/
│   │   │   │   └── page.tsx          # Create form
│   │   │   ├── [formId]/
│   │   │   │   ├── page.tsx          # Form detail/edit
│   │   │   │   ├── responses/
│   │   │   │   │   ├── page.tsx      # All responses
│   │   │   │   │   └── [responseId]/
│   │   │   │   │       └── page.tsx  # Response detail
│   │   │   │   ├── analytics/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── settings/
│   │   │   │       └── page.tsx
│   │   │   └── compare/
│   │   │       └── page.tsx
│   │   ├── analytics/
│   │   │   └── page.tsx
│   │   ├── settings/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   │
│   ├── (public)/
│   │   ├── f/
│   │   │   └── [shareId]/
│   │   │       ├── page.tsx          # Public form
│   │   │       └── success/
│   │   │           └── page.tsx      # Success page
│   │   └── layout.tsx
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                      # Landing page
│
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── select.tsx
│   │   ├── checkbox.tsx
│   │   ├── radio-group.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── avatar.tsx
│   │   ├── progress.tsx
│   │   ├── skeleton.tsx
│   │   ├── toast.tsx
│   │   ├── modal.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── tooltip.tsx
│   │   ├── tabs.tsx
│   │   └── index.ts
│   │
│   ├── forms/
│   │   ├── form-builder/
│   │   │   ├── form-builder.tsx
│   │   │   ├── question-editor.tsx
│   │   │   ├── question-types/
│   │   │   │   ├── short-text.tsx
│   │   │   │   ├── long-text.tsx
│   │   │   │   ├── single-choice.tsx
│   │   │   │   ├── multiple-choice.tsx
│   │   │   │   ├── dropdown.tsx
│   │   │   │   ├── linear-scale.tsx
│   │   │   │   ├── date-picker.tsx
│   │   │   │   └── section-break.tsx
│   │   │   ├── form-settings.tsx
│   │   │   ├── form-preview.tsx
│   │   │   └── drag-handle.tsx
│   │   │
│   │   ├── form-renderer/
│   │   │   ├── form-renderer.tsx
│   │   │   ├── question-renderer.tsx
│   │   │   ├── progress-bar.tsx
│   │   │   └── navigation-buttons.tsx
│   │   │
│   │   └── form-card.tsx
│   │
│   ├── dashboard/
│   │   ├── stats-card.tsx
│   │   ├── recent-responses.tsx
│   │   ├── forms-list.tsx
│   │   └── activity-feed.tsx
│   │
│   ├── responses/
│   │   ├── response-list.tsx
│   │   ├── response-card.tsx
│   │   ├── response-detail.tsx
│   │   ├── response-filters.tsx
│   │   ├── status-badge.tsx
│   │   └── internal-notes.tsx
│   │
│   ├── ai/
│   │   ├── ai-analysis-panel.tsx
│   │   ├── score-circle.tsx
│   │   ├── strengths-list.tsx
│   │   ├── concerns-list.tsx
│   │   ├── keywords-cloud.tsx
│   │   ├── sentiment-indicator.tsx
│   │   ├── ai-processing.tsx
│   │   └── comparison-chart.tsx
│   │
│   ├── shared/
│   │   ├── header.tsx
│   │   ├── sidebar.tsx
│   │   ├── mobile-nav.tsx
│   │   ├── user-menu.tsx
│   │   ├── search.tsx
│   │   ├── empty-state.tsx
│   │   ├── error-boundary.tsx
│   │   └── loading.tsx
│   │
│   └── layouts/
│       ├── dashboard-layout.tsx
│       ├── auth-layout.tsx
│       └── public-layout.tsx
│
├── hooks/
│   ├── use-auth.ts
│   ├── use-forms.ts
│   ├── use-responses.ts
│   ├── use-ai-analysis.ts
│   ├── use-debounce.ts
│   ├── use-local-storage.ts
│   ├── use-media-query.ts
│   └── use-toast.ts
│
├── lib/
│   ├── api/
│   │   ├── client.ts             # Axios instance
│   │   ├── auth.ts
│   │   ├── forms.ts
│   │   ├── responses.ts
│   │   ├── ai.ts
│   │   └── analytics.ts
│   ├── utils.ts
│   └── validations.ts
│
├── stores/
│   ├── auth-store.ts
│   ├── form-builder-store.ts
│   ├── ui-store.ts
│   └── index.ts
│
├── types/
│   ├── auth.ts
│   ├── form.ts
│   ├── response.ts
│   ├── ai.ts
│   └── index.ts
│
└── utils/
    ├── cn.ts                     # Class name utility
    ├── format-date.ts
    ├── format-score.ts
    └── markdown-parser.ts
```

---

## 2. Database Schema (Prisma)

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ==================== USERS & AUTH ====================

model User {
  id            String    @id @default(cuid())
  email         String    @unique
  passwordHash  String
  name          String
  avatarUrl     String?
  role          UserRole  @default(RECRUITER)
  
  organizationId String?
  organization   Organization? @relation(fields: [organizationId], references: [id])
  
  forms         Form[]
  notes         InternalNote[]
  activities    Activity[]
  
  emailVerified Boolean   @default(false)
  isActive      Boolean   @default(true)
  
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  lastLoginAt   DateTime?
  
  @@index([email])
  @@index([organizationId])
}

enum UserRole {
  ADMIN
  RECRUITER
  HIRING_MANAGER
  VIEWER
}

model Organization {
  id          String   @id @default(cuid())
  name        String
  slug        String   @unique
  logoUrl     String?
  
  users       User[]
  forms       Form[]
  
  settings    Json     @default("{}")
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@index([slug])
}

model RefreshToken {
  id          String   @id @default(cuid())
  token       String   @unique
  userId      String
  expiresAt   DateTime
  
  createdAt   DateTime @default(now())
  
  @@index([userId])
  @@index([token])
}

// ==================== FORMS ====================

model Form {
  id              String      @id @default(cuid())
  title           String
  description     String?
  shareId         String      @unique @default(cuid())
  
  status          FormStatus  @default(DRAFT)
  
  createdById     String
  createdBy       User        @relation(fields: [createdById], references: [id])
  
  organizationId  String?
  organization    Organization? @relation(fields: [organizationId], references: [id])
  
  questions       Question[]
  responses       FormResponse[]
  
  settings        FormSettings?
  
  publishedAt     DateTime?
  closedAt        DateTime?
  
  createdAt       DateTime    @default(now())
  updatedAt       DateTime    @updatedAt
  
  @@index([shareId])
  @@index([createdById])
  @@index([organizationId])
  @@index([status])
}

enum FormStatus {
  DRAFT
  PUBLISHED
  CLOSED
  ARCHIVED
}

model FormSettings {
  id                      String    @id @default(cuid())
  formId                  String    @unique
  form                    Form      @relation(fields: [formId], references: [id], onDelete: Cascade)
  
  collectEmail            Boolean   @default(true)
  requireEmail            Boolean   @default(true)
  allowMultipleSubmissions Boolean  @default(false)
  showProgressBar         Boolean   @default(true)
  shuffleQuestions        Boolean   @default(false)
  
  confirmationTitle       String    @default("Thank you!")
  confirmationMessage     String    @default("Your response has been recorded.")
  redirectUrl             String?
  
  scheduledOpenAt         DateTime?
  scheduledCloseAt        DateTime?
  maxResponses            Int?
  
  aiAnalysisEnabled       Boolean   @default(true)
  scoringCriteria         Json?     // ScoringCriteria type
  
  theme                   Json?     // Custom theme settings
  
  createdAt               DateTime  @default(now())
  updatedAt               DateTime  @updatedAt
}

model Question {
  id              String          @id @default(cuid())
  formId          String
  form            Form            @relation(fields: [formId], references: [id], onDelete: Cascade)
  
  type            QuestionType
  title           String
  description     String?
  placeholder     String?
  
  required        Boolean         @default(false)
  order           Int
  
  options         QuestionOption[]
  validation      Json?           // ValidationRules type
  
  // AI-specific settings
  aiWeight        Int             @default(5)  // 0-10
  aiInstructions  String?         // Custom instructions for AI
  
  isActive        Boolean         @default(true)
  
  answers         Answer[]
  
  createdAt       DateTime        @default(now())
  updatedAt       DateTime        @updatedAt
  
  @@index([formId])
  @@index([order])
}

enum QuestionType {
  SHORT_TEXT
  LONG_TEXT
  SINGLE_CHOICE
  MULTIPLE_CHOICE
  DROPDOWN
  LINEAR_SCALE
  DATE
  FILE_UPLOAD
  SECTION_BREAK
}

model QuestionOption {
  id          String    @id @default(cuid())
  questionId  String
  question    Question  @relation(fields: [questionId], references: [id], onDelete: Cascade)
  
  value       String
  label       String
  order       Int
  
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  
  @@index([questionId])
}

// ==================== RESPONSES ====================

model FormResponse {
  id              String          @id @default(cuid())
  formId          String
  form            Form            @relation(fields: [formId], references: [id], onDelete: Cascade)
  
  respondentEmail String?
  
  status          ResponseStatus  @default(NEW)
  
  answers         Answer[]
  aiAnalysis      AIAnalysis?
  notes           InternalNote[]
  
  metadata        ResponseMetadata?
  
  createdAt       DateTime        @default(now())
  updatedAt       DateTime        @updatedAt
  
  @@index([formId])
  @@index([respondentEmail])
  @@index([status])
  @@index([createdAt])
}

enum ResponseStatus {
  NEW
  REVIEWING
  SHORTLISTED
  REJECTED
  HIRED
}

model Answer {
  id          String        @id @default(cuid())
  responseId  String
  response    FormResponse  @relation(fields: [responseId], references: [id], onDelete: Cascade)
  
  questionId  String
  question    Question      @relation(fields: [questionId], references: [id])
  
  // Store different value types
  textValue   String?
  numberValue Float?
  arrayValue  String[]      @default([])
  dateValue   DateTime?
  fileUrl     String?
  
  createdAt   DateTime      @default(now())
  updatedAt   DateTime      @updatedAt
  
  @@index([responseId])
  @@index([questionId])
}

model ResponseMetadata {
  id              String        @id @default(cuid())
  responseId      String        @unique
  response        FormResponse  @relation(fields: [responseId], references: [id], onDelete: Cascade)
  
  ipAddress       String?
  userAgent       String?
  deviceType      DeviceType?
  referrer        String?
  
  startedAt       DateTime
  submittedAt     DateTime
  completionTime  Int           // seconds
  
  createdAt       DateTime      @default(now())
}

enum DeviceType {
  DESKTOP
  MOBILE
  TABLET
}

// ==================== AI ANALYSIS ====================

model AIAnalysis {
  id              String        @id @default(cuid())
  responseId      String        @unique
  response        FormResponse  @relation(fields: [responseId], references: [id], onDelete: Cascade)
  
  overallScore    Float         // 0-100
  confidence      Float         // 0-1
  
  summary         String
  
  strengths       Json          // AnalysisPoint[]
  concerns        Json          // AnalysisPoint[]
  keywords        Json          // Keyword[]
  categoryScores  Json          // CategoryScore[]
  sentiment       Json          // SentimentAnalysis
  recommendations String[]
  
  // For debugging/audit
  promptUsed      String        @db.Text
  rawResponse     String        @db.Text
  modelVersion    String
  
  processingTime  Int           // milliseconds
  
  createdAt       DateTime      @default(now())
  updatedAt       DateTime      @updatedAt
  
  @@index([overallScore])
}

model AIBatchJob {
  id              String            @id @default(cuid())
  
  status          BatchJobStatus    @default(PENDING)
  totalItems      Int
  processedItems  Int               @default(0)
  failedItems     Int               @default(0)
  
  results         Json              // Array of results
  error           String?
  
  startedAt       DateTime?
  completedAt     DateTime?
  
  createdAt       DateTime          @default(now())
  updatedAt       DateTime          @updatedAt
}

enum BatchJobStatus {
  PENDING
  PROCESSING
  COMPLETED
  FAILED
}

// ==================== COLLABORATION ====================

model InternalNote {
  id          String        @id @default(cuid())
  responseId  String
  response    FormResponse  @relation(fields: [responseId], references: [id], onDelete: Cascade)
  
  userId      String
  user        User          @relation(fields: [userId], references: [id])
  
  content     String
  
  createdAt   DateTime      @default(now())
  updatedAt   DateTime      @updatedAt
  
  @@index([responseId])
  @@index([userId])
}

model Activity {
  id          String        @id @default(cuid())
  
  userId      String
  user        User          @relation(fields: [userId], references: [id])
  
  type        ActivityType
  entityType  String        // 'form', 'response', etc.
  entityId    String
  
  metadata    Json?
  
  createdAt   DateTime      @default(now())
  
  @@index([userId])
  @@index([entityType, entityId])
  @@index([createdAt])
}

enum ActivityType {
  FORM_CREATED
  FORM_PUBLISHED
  FORM_CLOSED
  FORM_DELETED
  RESPONSE_RECEIVED
  RESPONSE_STATUS_CHANGED
  NOTE_ADDED
  AI_ANALYSIS_COMPLETED
}

// ==================== DRAFTS ====================

model ResponseDraft {
  id          String    @id @default(cuid())
  formId      String
  
  email       String?
  answers     Json      // Partial answers
  
  expiresAt   DateTime
  
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  
  @@index([formId])
  @@index([email])
  @@index([expiresAt])
}
```

---

## 3. API Implementation (NestJS)

### 3.1 Main Module Setup

```typescript
// apps/api/src/main.ts
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Security
  app.use(helmet());
  app.enableCors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  });
  
  // Validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  
  // API prefix
  app.setGlobalPrefix('api');
  
  // Swagger documentation
  const config = new DocumentBuilder()
    .setTitle('FormGenius API')
    .setDescription('AI-Powered Pre-Interview Assessment Platform')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
```

### 3.2 App Module

```typescript
// apps/api/src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthModule } from './modules/auth/auth.module';
import { FormsModule } from './modules/forms/forms.module';
import { ResponsesModule } from './modules/responses/responses.module';
import { AIModule } from './modules/ai/ai.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { UsersModule } from './modules/users/users.module';
import { PrismaModule } from './database/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 100,
    }),
    PrismaModule,
    AuthModule,
    FormsModule,
    ResponsesModule,
    AIModule,
    AnalyticsModule,
    UsersModule,
  ],
})
export class AppModule {}
```

### 3.3 Forms Module

```typescript
// apps/api/src/modules/forms/forms.controller.ts
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { FormsService } from './forms.service';
import { CreateFormDto, UpdateFormDto, ImportMarkdownDto } from './dto';
import { User } from '@prisma/client';

@ApiTags('Forms')
@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new form' })
  async create(
    @CurrentUser() user: User,
    @Body() createFormDto: CreateFormDto,
  ) {
    return this.formsService.create(user.id, createFormDto);
  }

  @Post('import-markdown')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: 'Import form from markdown file' })
  async importFromMarkdown(
    @CurrentUser() user: User,
    @UploadedFile() file: Express.Multer.File,
    @Body() importDto: ImportMarkdownDto,
  ) {
    return this.formsService.importFromMarkdown(user.id, file, importDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all forms for current user' })
  async findAll(
    @CurrentUser() user: User,
    @Query('status') status?: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.formsService.findAll(user.id, { status, page, limit });
  }

  @Get('public/:shareId')
  @ApiOperation({ summary: 'Get public form by share ID' })
  async findPublic(@Param('shareId') shareId: string) {
    return this.formsService.findPublic(shareId);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get form by ID' })
  async findOne(
    @CurrentUser() user: User,
    @Param('id') id: string,
  ) {
    return this.formsService.findOne(user.id, id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update form' })
  async update(
    @CurrentUser() user: User,
    @Param('id') id: string,
    @Body() updateFormDto: UpdateFormDto,
  ) {
    return this.formsService.update(user.id, id, updateFormDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete form' })
  async remove(
    @CurrentUser() user: User,
    @Param('id') id: string,
  ) {
    return this.formsService.remove(user.id, id);
  }

  @Post(':id/publish')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Publish form' })
  async publish(
    @CurrentUser() user: User,
    @Param('id') id: string,
  ) {
    return this.formsService.publish(user.id, id);
  }

  @Post(':id/close')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Close form' })
  async close(
    @CurrentUser() user: User,
    @Param('id') id: string,
  ) {
    return this.formsService.close(user.id, id);
  }

  @Post(':id/duplicate')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Duplicate form' })
  async duplicate(
    @CurrentUser() user: User,
    @Param('id') id: string,
  ) {
    return this.formsService.duplicate(user.id, id);
  }
}
```

### 3.4 Forms Service

```typescript
// apps/api/src/modules/forms/forms.service.ts
import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateFormDto, UpdateFormDto, ImportMarkdownDto } from './dto';
import { MarkdownParser } from './utils/markdown-parser';

@Injectable()
export class FormsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, dto: CreateFormDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    const form = await this.prisma.form.create({
      data: {
        title: dto.title,
        description: dto.description,
        createdById: userId,
        organizationId: user.organizationId,
        questions: {
          create: dto.questions?.map((q, index) => ({
            type: q.type,
            title: q.title,
            description: q.description,
            required: q.required ?? false,
            order: index,
            aiWeight: q.aiWeight ?? 5,
            aiInstructions: q.aiInstructions,
            options: q.options ? {
              create: q.options.map((opt, optIndex) => ({
                value: opt.value,
                label: opt.label || opt.value,
                order: optIndex,
              })),
            } : undefined,
            validation: q.validation,
          })),
        },
        settings: {
          create: {
            ...dto.settings,
          },
        },
      },
      include: {
        questions: {
          include: { options: true },
          orderBy: { order: 'asc' },
        },
        settings: true,
      },
    });

    return {
      success: true,
      data: {
        ...form,
        shareUrl: `${process.env.FRONTEND_URL}/f/${form.shareId}`,
      },
    };
  }

  async importFromMarkdown(
    userId: string,
    file: Express.Multer.File,
    dto: ImportMarkdownDto,
  ) {
    const content = file.buffer.toString('utf-8');
    const parsed = MarkdownParser.parse(content);

    return this.create(userId, {
      title: dto.title || parsed.title,
      description: parsed.description,
      questions: parsed.questions,
      settings: dto.settings,
    });
  }

  async findAll(userId: string, options: { status?: string; page?: number; limit?: number }) {
    const { status, page = 1, limit = 10 } = options;
    
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    const where = {
      organizationId: user.organizationId,
      ...(status && { status: status as any }),
    };

    const [forms, total] = await Promise.all([
      this.prisma.form.findMany({
        where,
        include: {
          _count: {
            select: { responses: true },
          },
          settings: true,
        },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.form.count({ where }),
    ]);

    return {
      success: true,
      data: {
        forms,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit),
        },
      },
    };
  }

  async findPublic(shareId: string) {
    const form = await this.prisma.form.findUnique({
      where: { shareId },
      include: {
        questions: {
          where: { isActive: true },
          include: { options: { orderBy: { order: 'asc' } } },
          orderBy: { order: 'asc' },
        },
        settings: {
          select: {
            showProgressBar: true,
            confirmationTitle: true,
            confirmationMessage: true,
            redirectUrl: true,
            collectEmail: true,
            requireEmail: true,
          },
        },
      },
    });

    if (!form || form.status !== 'PUBLISHED') {
      throw new NotFoundException('Form not found or not available');
    }

    // Check scheduled dates
    const now = new Date();
    if (form.settings.scheduledOpenAt && form.settings.scheduledOpenAt > now) {
      throw new ForbiddenException('Form is not yet open');
    }
    if (form.settings.scheduledCloseAt && form.settings.scheduledCloseAt < now) {
      throw new ForbiddenException('Form is closed');
    }

    return {
      success: true,
      data: {
        id: form.id,
        title: form.title,
        description: form.description,
        questions: form.questions,
        settings: form.settings,
      },
    };
  }

  async findOne(userId: string, id: string) {
    const form = await this.prisma.form.findUnique({
      where: { id },
      include: {
        questions: {
          include: { options: { orderBy: { order: 'asc' } } },
          orderBy: { order: 'asc' },
        },
        settings: true,
        responses: {
          include: {
            aiAnalysis: {
              select: { overallScore: true },
            },
          },
          orderBy: { createdAt: 'desc' },
          take: 10,
        },
        _count: {
          select: { responses: true },
        },
      },
    });

    if (!form) {
      throw new NotFoundException('Form not found');
    }

    // Verify access
    await this.verifyAccess(userId, form);

    return {
      success: true,
      data: {
        ...form,
        shareUrl: `${process.env.FRONTEND_URL}/f/${form.shareId}`,
      },
    };
  }

  async update(userId: string, id: string, dto: UpdateFormDto) {
    const form = await this.prisma.form.findUnique({
      where: { id },
    });

    if (!form) {
      throw new NotFoundException('Form not found');
    }

    await this.verifyAccess(userId, form);

    // Handle questions update (complex logic for add/update/delete)
    const updatedForm = await this.prisma.$transaction(async (tx) => {
      // Update form basic info
      const updated = await tx.form.update({
        where: { id },
        data: {
          title: dto.title,
          description: dto.description,
        },
      });

      // Update settings if provided
      if (dto.settings) {
        await tx.formSettings.update({
          where: { formId: id },
          data: dto.settings,
        });
      }

      // Handle questions if provided
      if (dto.questions) {
        // Get existing questions
        const existingQuestions = await tx.question.findMany({
          where: { formId: id },
        });

        const existingIds = existingQuestions.map(q => q.id);
        const incomingIds = dto.questions.filter(q => q.id).map(q => q.id);

        // Delete removed questions
        const toDelete = existingIds.filter(id => !incomingIds.includes(id));
        if (toDelete.length > 0) {
          await tx.question.updateMany({
            where: { id: { in: toDelete } },
            data: { isActive: false },
          });
        }

        // Update/create questions
        for (let i = 0; i < dto.questions.length; i++) {
          const q = dto.questions[i];
          
          if (q.id && existingIds.includes(q.id)) {
            // Update existing
            await tx.question.update({
              where: { id: q.id },
              data: {
                type: q.type,
                title: q.title,
                description: q.description,
                required: q.required,
                order: i,
                aiWeight: q.aiWeight,
                aiInstructions: q.aiInstructions,
                validation: q.validation,
              },
            });

            // Handle options
            if (q.options) {
              await tx.questionOption.deleteMany({
                where: { questionId: q.id },
              });
              await tx.questionOption.createMany({
                data: q.options.map((opt, optIndex) => ({
                  questionId: q.id,
                  value: opt.value,
                  label: opt.label || opt.value,
                  order: optIndex,
                })),
              });
            }
          } else {
            // Create new
            await tx.question.create({
              data: {
                formId: id,
                type: q.type,
                title: q.title,
                description: q.description,
                required: q.required ?? false,
                order: i,
                aiWeight: q.aiWeight ?? 5,
                aiInstructions: q.aiInstructions,
                validation: q.validation,
                options: q.options ? {
                  create: q.options.map((opt, optIndex) => ({
                    value: opt.value,
                    label: opt.label || opt.value,
                    order: optIndex,
                  })),
                } : undefined,
              },
            });
          }
        }
      }

      return updated;
    });

    return this.findOne(userId, id);
  }

  async remove(userId: string, id: string) {
    const form = await this.prisma.form.findUnique({
      where: { id },
    });

    if (!form) {
      throw new NotFoundException('Form not found');
    }

    await this.verifyAccess(userId, form, true);

    await this.prisma.form.update({
      where: { id },
      data: { status: 'ARCHIVED' },
    });

    return {
      success: true,
      message: 'Form deleted successfully',
    };
  }

  async publish(userId: string, id: string) {
    const form = await this.prisma.form.findUnique({
      where: { id },
      include: { questions: true },
    });

    if (!form) {
      throw new NotFoundException('Form not found');
    }

    await this.verifyAccess(userId, form);

    if (form.questions.length === 0) {
      throw new ForbiddenException('Cannot publish form without questions');
    }

    const updated = await this.prisma.form.update({
      where: { id },
      data: {
        status: 'PUBLISHED',
        publishedAt: new Date(),
      },
    });

    return {
      success: true,
      data: {
        ...updated,
        shareUrl: `${process.env.FRONTEND_URL}/f/${updated.shareId}`,
      },
    };
  }

  async close(userId: string, id: string) {
    const form = await this.prisma.form.findUnique({
      where: { id },
    });

    if (!form) {
      throw new NotFoundException('Form not found');
    }

    await this.verifyAccess(userId, form);

    const updated = await this.prisma.form.update({
      where: { id },
      data: {
        status: 'CLOSED',
        closedAt: new Date(),
      },
    });

    return {
      success: true,
      data: updated,
    };
  }

  async duplicate(userId: string, id: string) {
    const form = await this.prisma.form.findUnique({
      where: { id },
      include: {
        questions: {
          include: { options: true },
        },
        settings: true,
      },
    });

    if (!form) {
      throw new NotFoundException('Form not found');
    }

    await this.verifyAccess(userId, form);

    return this.create(userId, {
      title: `${form.title} (Copy)`,
      description: form.description,
      questions: form.questions.map(q => ({
        type: q.type,
        title: q.title,
        description: q.description,
        required: q.required,
        aiWeight: q.aiWeight,
        aiInstructions: q.aiInstructions,
        validation: q.validation as any,
        options: q.options.map(opt => ({
          value: opt.value,
          label: opt.label,
        })),
      })),
      settings: {
        collectEmail: form.settings.collectEmail,
        showProgressBar: form.settings.showProgressBar,
        aiAnalysisEnabled: form.settings.aiAnalysisEnabled,
      },
    });
  }

  private async verifyAccess(userId: string, form: any, requireOwner = false) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (requireOwner && form.createdById !== userId) {
      throw new ForbiddenException('Only the form owner can perform this action');
    }

    if (form.organizationId !== user.organizationId) {
      throw new ForbiddenException('Access denied');
    }
  }
}
```

### 3.5 AI Module

```typescript
// apps/api/src/modules/ai/ai.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../database/prisma.service';
import { GeminiService } from './gemini.service';
import { buildAnalysisPrompt, parseAnalysisResponse } from './prompts';

@Injectable()
export class AIService {
  private readonly logger = new Logger(AIService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly gemini: GeminiService,
    private readonly config: ConfigService,
  ) {}

  async analyzeResponse(responseId: string) {
    const startTime = Date.now();

    // Get response with form and questions
    const response = await this.prisma.formResponse.findUnique({
      where: { id: responseId },
      include: {
        answers: {
          include: { question: true },
        },
        form: {
          include: {
            questions: {
              include: { options: true },
            },
            settings: true,
          },
        },
      },
    });

    if (!response) {
      throw new Error('Response not found');
    }

    // Build prompt
    const prompt = buildAnalysisPrompt(response, response.form);

    // Call Gemini API
    const rawResponse = await this.gemini.generateContent(prompt);

    // Parse response
    const analysis = parseAnalysisResponse(rawResponse);

    // Save analysis
    const savedAnalysis = await this.prisma.aIAnalysis.upsert({
      where: { responseId },
      create: {
        responseId,
        overallScore: analysis.overallScore,
        confidence: analysis.confidence,
        summary: analysis.summary,
        strengths: analysis.strengths,
        concerns: analysis.concerns,
        keywords: analysis.keywords,
        categoryScores: analysis.categoryScores,
        sentiment: analysis.sentiment,
        recommendations: analysis.recommendations,
        promptUsed: prompt,
        rawResponse: rawResponse,
        modelVersion: this.config.get('GEMINI_MODEL') || 'gemini-pro',
        processingTime: Date.now() - startTime,
      },
      update: {
        overallScore: analysis.overallScore,
        confidence: analysis.confidence,
        summary: analysis.summary,
        strengths: analysis.strengths,
        concerns: analysis.concerns,
        keywords: analysis.keywords,
        categoryScores: analysis.categoryScores,
        sentiment: analysis.sentiment,
        recommendations: analysis.recommendations,
        promptUsed: prompt,
        rawResponse: rawResponse,
        modelVersion: this.config.get('GEMINI_MODEL') || 'gemini-pro',
        processingTime: Date.now() - startTime,
        updatedAt: new Date(),
      },
    });

    // Log activity
    await this.prisma.activity.create({
      data: {
        userId: response.form.createdById,
        type: 'AI_ANALYSIS_COMPLETED',
        entityType: 'response',
        entityId: responseId,
        metadata: {
          score: analysis.overallScore,
          confidence: analysis.confidence,
        },
      },
    });

    return {
      success: true,
      data: savedAnalysis,
    };
  }

  async analyzeBatch(responseIds: string[]) {
    // Create batch job
    const job = await this.prisma.aIBatchJob.create({
      data: {
        totalItems: responseIds.length,
        status: 'PROCESSING',
        startedAt: new Date(),
      },
    });

    // Process in background (simplified - use queue in production)
    this.processBatch(job.id, responseIds);

    return {
      success: true,
      data: {
        batchId: job.id,
        status: 'PROCESSING',
        total: responseIds.length,
      },
    };
  }

  private async processBatch(jobId: string, responseIds: string[]) {
    const results = [];

    for (const responseId of responseIds) {
      try {
        const result = await this.analyzeResponse(responseId);
        results.push({
          responseId,
          status: 'SUCCESS',
          score: result.data.overallScore,
        });
      } catch (error) {
        results.push({
          responseId,
          status: 'FAILED',
          error: error.message,
        });
      }

      // Update progress
      await this.prisma.aIBatchJob.update({
        where: { id: jobId },
        data: {
          processedItems: results.filter(r => r.status !== 'FAILED').length,
          failedItems: results.filter(r => r.status === 'FAILED').length,
          results: results,
        },
      });
    }

    // Mark complete
    await this.prisma.aIBatchJob.update({
      where: { id: jobId },
      data: {
        status: 'COMPLETED',
        completedAt: new Date(),
        results: results,
      },
    });
  }

  async compareResponses(responseIds: string[]) {
    // Get all analyses
    const analyses = await this.prisma.aIAnalysis.findMany({
      where: { responseId: { in: responseIds } },
      include: {
        response: {
          select: {
            id: true,
            respondentEmail: true,
          },
        },
      },
      orderBy: { overallScore: 'desc' },
    });

    // Build comparison prompt
    const comparisonPrompt = this.buildComparisonPrompt(analyses);
    const comparisonResponse = await this.gemini.generateContent(comparisonPrompt);
    const comparison = JSON.parse(comparisonResponse);

    return {
      success: true,
      data: {
        ranking: analyses.map((a, index) => ({
          responseId: a.responseId,
          email: a.response.respondentEmail,
          rank: index + 1,
          score: a.overallScore,
        })),
        analysis: comparison.analysis,
        categoryComparison: comparison.categoryComparison,
      },
    };
  }

  private buildComparisonPrompt(analyses: any[]) {
    return `
Compare the following ${analyses.length} candidates based on their AI analysis:

${analyses.map((a, i) => `
Candidate ${i + 1}:
- Overall Score: ${a.overallScore}
- Strengths: ${JSON.stringify(a.strengths)}
- Concerns: ${JSON.stringify(a.concerns)}
- Category Scores: ${JSON.stringify(a.categoryScores)}
`).join('\n')}

Provide a JSON response with:
{
  "analysis": "<comparative analysis paragraph>",
  "categoryComparison": [
    {
      "category": "<category name>",
      "scores": { "responseId1": 85, "responseId2": 72 }
    }
  ]
}
`;
  }
}
```

### 3.6 Gemini Service

```typescript
// apps/api/src/modules/ai/gemini.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable()
export class GeminiService {
  private readonly logger = new Logger(GeminiService.name);
  private readonly genAI: GoogleGenerativeAI;
  private readonly model: string;

  constructor(private readonly config: ConfigService) {
    this.genAI = new GoogleGenerativeAI(config.get('GEMINI_API_KEY'));
    this.model = config.get('GEMINI_MODEL') || 'gemini-pro';
  }

  async generateContent(prompt: string): Promise<string> {
    try {
      const model = this.genAI.getGenerativeModel({ model: this.model });
      
      const result = await model.generateContent({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 8192,
        },
      });

      const response = result.response;
      const text = response.text();

      // Extract JSON if wrapped in markdown code blocks
      const jsonMatch = text.match(/```json\n?([\s\S]*?)\n?```/);
      if (jsonMatch) {
        return jsonMatch[1].trim();
      }

      return text;
    } catch (error) {
      this.logger.error('Gemini API error:', error);
      throw new Error(`AI analysis failed: ${error.message}`);
    }
  }
}
```

### 3.7 Analysis Prompts

```typescript
// apps/api/src/modules/ai/prompts/analysis.prompt.ts

export function buildAnalysisPrompt(response: any, form: any): string {
  const scoringCriteria = form.settings?.scoringCriteria;
  
  return `
You are an expert HR analyst evaluating pre-interview assessment responses. 
Analyze the following candidate submission and provide a comprehensive, objective assessment.

## Assessment Context
**Form Title:** ${form.title}
**Form Description:** ${form.description || 'N/A'}

${scoringCriteria ? `
## Scoring Criteria
${JSON.stringify(scoringCriteria, null, 2)}
` : ''}

## Candidate Responses

${response.answers.map((answer: any) => {
  const question = answer.question;
  const value = answer.textValue || answer.numberValue || answer.arrayValue?.join(', ') || answer.dateValue || 'No response';
  
  return `
### Question: ${question.title}
**Type:** ${question.type}
**Required:** ${question.required ? 'Yes' : 'No'}
**AI Weight:** ${question.aiWeight}/10
${question.aiInstructions ? `**Analysis Focus:** ${question.aiInstructions}` : ''}
**Response:** ${value}
`;
}).join('\n')}

## Analysis Instructions
1. Evaluate each response considering the question type and AI weight
2. Identify concrete strengths with supporting evidence from responses
3. Note any concerns or areas requiring follow-up
4. Extract relevant keywords (skills, experience, traits)
5. Assess overall sentiment and communication quality
6. Provide specific interview follow-up recommendations

## Required Output Format (JSON)
{
  "overallScore": <number 0-100>,
  "confidence": <number 0-1 indicating analysis confidence>,
  "summary": "<2-3 sentence executive summary of the candidate>",
  "strengths": [
    {
      "title": "<strength category>",
      "description": "<specific evidence from responses>",
      "relevantQuestions": ["<question titles that support this>"],
      "confidence": <0-1>
    }
  ],
  "concerns": [
    {
      "title": "<concern category>",
      "description": "<specific evidence or lack thereof>",
      "relevantQuestions": ["<relevant question titles>"],
      "confidence": <0-1>
    }
  ],
  "keywords": [
    {
      "term": "<keyword>",
      "category": "SKILL" | "EXPERIENCE" | "TRAIT" | "OTHER",
      "frequency": <occurrence count>,
      "sentiment": "POSITIVE" | "NEUTRAL" | "NEGATIVE"
    }
  ],
  "categoryScores": [
    {
      "category": "<evaluation category>",
      "score": <0-100>,
      "maxScore": 100,
      "feedback": "<specific feedback for this category>"
    }
  ],
  "sentiment": {
    "overall": "POSITIVE" | "NEUTRAL" | "NEGATIVE",
    "score": <-1 to 1>
  },
  "recommendations": [
    "<specific follow-up question or interview topic>"
  ]
}

Provide an honest, balanced assessment. Be specific and cite evidence from responses.
Focus on job-relevant qualifications and potential red flags.
`;
}

export function parseAnalysisResponse(rawResponse: string): any {
  try {
    const parsed = JSON.parse(rawResponse);
    
    // Validate required fields
    if (typeof parsed.overallScore !== 'number' || 
        parsed.overallScore < 0 || 
        parsed.overallScore > 100) {
      throw new Error('Invalid overall score');
    }
    
    // Ensure arrays exist
    parsed.strengths = parsed.strengths || [];
    parsed.concerns = parsed.concerns || [];
    parsed.keywords = parsed.keywords || [];
    parsed.categoryScores = parsed.categoryScores || [];
    parsed.recommendations = parsed.recommendations || [];
    
    // Ensure sentiment exists
    parsed.sentiment = parsed.sentiment || {
      overall: 'NEUTRAL',
      score: 0,
    };
    
    // Clamp confidence
    parsed.confidence = Math.min(1, Math.max(0, parsed.confidence || 0.5));
    
    return parsed;
  } catch (error) {
    throw new Error(`Failed to parse AI response: ${error.message}`);
  }
}
```

---

## 4. Frontend Implementation

### 4.1 API Client

```typescript
// apps/web/lib/api/client.ts
import axios, { AxiosInstance, AxiosError } from 'axios';
import { useAuthStore } from '@/stores/auth-store';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

class ApiClient {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: API_URL,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor
    this.instance.interceptors.request.use(
      (config) => {
        const token = useAuthStore.getState().accessToken;
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor
    this.instance.interceptors.response.use(
      (response) => response.data,
      async (error: AxiosError) => {
        const originalRequest = error.config as any;

        // Handle 401 - Token expired
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const refreshToken = useAuthStore.getState().refreshToken;
            const { data } = await axios.post(`${API_URL}/auth/refresh`, {
              refreshToken,
            });

            useAuthStore.getState().setTokens(
              data.data.accessToken,
              data.data.refreshToken
            );

            originalRequest.headers.Authorization = `Bearer ${data.data.accessToken}`;
            return this.instance(originalRequest);
          } catch (refreshError) {
            useAuthStore.getState().logout();
            window.location.href = '/login';
            return Promise.reject(refreshError);
          }
        }

        // Format error response
        const errorResponse = {
          success: false,
          error: {
            code: error.response?.data?.error?.code || 'UNKNOWN',
            message: error.response?.data?.error?.message || error.message,
            status: error.response?.status,
          },
        };

        return Promise.reject(errorResponse);
      }
    );
  }

  get<T>(url: string, config?: any): Promise<T> {
    return this.instance.get(url, config);
  }

  post<T>(url: string, data?: any, config?: any): Promise<T> {
    return this.instance.post(url, data, config);
  }

  patch<T>(url: string, data?: any, config?: any): Promise<T> {
    return this.instance.patch(url, data, config);
  }

  delete<T>(url: string, config?: any): Promise<T> {
    return this.instance.delete(url, config);
  }
}

export const api = new ApiClient();
```

### 4.2 Form Builder Store

```typescript
// apps/web/stores/form-builder-store.ts
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { nanoid } from 'nanoid';
import type { Question, QuestionType, FormSettings } from '@/types';

interface FormBuilderState {
  title: string;
  description: string;
  questions: Question[];
  settings: FormSettings;
  selectedQuestionId: string | null;
  isDirty: boolean;
  
  // Actions
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  addQuestion: (type: QuestionType) => void;
  updateQuestion: (id: string, updates: Partial<Question>) => void;
  removeQuestion: (id: string) => void;
  duplicateQuestion: (id: string) => void;
  reorderQuestions: (fromIndex: number, toIndex: number) => void;
  selectQuestion: (id: string | null) => void;
  updateSettings: (updates: Partial<FormSettings>) => void;
  reset: () => void;
  loadForm: (form: any) => void;
}

const defaultSettings: FormSettings = {
  collectEmail: true,
  requireEmail: true,
  showProgressBar: true,
  shuffleQuestions: false,
  allowMultipleSubmissions: false,
  confirmationTitle: 'Thank you!',
  confirmationMessage: 'Your response has been recorded.',
  aiAnalysisEnabled: true,
};

const defaultQuestion = (type: QuestionType): Question => ({
  id: nanoid(),
  type,
  title: '',
  description: '',
  required: false,
  order: 0,
  aiWeight: 5,
  options: type === 'SINGLE_CHOICE' || type === 'MULTIPLE_CHOICE' || type === 'DROPDOWN'
    ? [{ id: nanoid(), value: 'Option 1', order: 0 }]
    : undefined,
});

export const useFormBuilderStore = create<FormBuilderState>()(
  immer((set, get) => ({
    title: '',
    description: '',
    questions: [],
    settings: defaultSettings,
    selectedQuestionId: null,
    isDirty: false,

    setTitle: (title) => set((state) => {
      state.title = title;
      state.isDirty = true;
    }),

    setDescription: (description) => set((state) => {
      state.description = description;
      state.isDirty = true;
    }),

    addQuestion: (type) => set((state) => {
      const newQuestion = defaultQuestion(type);
      newQuestion.order = state.questions.length;
      state.questions.push(newQuestion);
      state.selectedQuestionId = newQuestion.id;
      state.isDirty = true;
    }),

    updateQuestion: (id, updates) => set((state) => {
      const index = state.questions.findIndex(q => q.id === id);
      if (index !== -1) {
        state.questions[index] = { ...state.questions[index], ...updates };
        state.isDirty = true;
      }
    }),

    removeQuestion: (id) => set((state) => {
      state.questions = state.questions.filter(q => q.id !== id);
      state.questions.forEach((q, i) => { q.order = i; });
      if (state.selectedQuestionId === id) {
        state.selectedQuestionId = null;
      }
      state.isDirty = true;
    }),

    duplicateQuestion: (id) => set((state) => {
      const index = state.questions.findIndex(q => q.id === id);
      if (index !== -1) {
        const original = state.questions[index];
        const duplicate = {
          ...JSON.parse(JSON.stringify(original)),
          id: nanoid(),
          title: `${original.title} (Copy)`,
        };
        state.questions.splice(index + 1, 0, duplicate);
        state.questions.forEach((q, i) => { q.order = i; });
        state.selectedQuestionId = duplicate.id;
        state.isDirty = true;
      }
    }),

    reorderQuestions: (fromIndex, toIndex) => set((state) => {
      const [removed] = state.questions.splice(fromIndex, 1);
      state.questions.splice(toIndex, 0, removed);
      state.questions.forEach((q, i) => { q.order = i; });
      state.isDirty = true;
    }),

    selectQuestion: (id) => set((state) => {
      state.selectedQuestionId = id;
    }),

    updateSettings: (updates) => set((state) => {
      state.settings = { ...state.settings, ...updates };
      state.isDirty = true;
    }),

    reset: () => set({
      title: '',
      description: '',
      questions: [],
      settings: defaultSettings,
      selectedQuestionId: null,
      isDirty: false,
    }),

    loadForm: (form) => set({
      title: form.title,
      description: form.description || '',
      questions: form.questions || [],
      settings: form.settings || defaultSettings,
      selectedQuestionId: null,
      isDirty: false,
    }),
  }))
);
```

### 4.3 Form Builder Component

```tsx
// apps/web/components/forms/form-builder/form-builder.tsx
'use client';

import { useCallback } from 'react';
import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { motion, AnimatePresence } from 'framer-motion';
import { useFormBuilderStore } from '@/stores/form-builder-store';
import { QuestionEditor } from './question-editor';
import { QuestionTypeSelector } from './question-type-selector';
import { FormSettings } from './form-settings';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/utils/cn';

export function FormBuilder() {
  const {
    title,
    description,
    questions,
    selectedQuestionId,
    setTitle,
    setDescription,
    addQuestion,
    reorderQuestions,
    selectQuestion,
  } = useFormBuilderStore();

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = questions.findIndex(q => q.id === active.id);
      const newIndex = questions.findIndex(q => q.id === over.id);
      reorderQuestions(oldIndex, newIndex);
    }
  }, [questions, reorderQuestions]);

  return (
    <div className="grid grid-cols-12 gap-6 h-full">
      {/* Sidebar */}
      <div className="col-span-3 space-y-6">
        <div className="bg-white rounded-2xl border border-neutral-100 p-6">
          <h3 className="font-semibold text-neutral-900 mb-4">Form Details</h3>
          
          <div className="space-y-4">
            <Input
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter form title"
            />
            
            <Textarea
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief description of this form"
              rows={3}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-neutral-100 p-6">
          <h3 className="font-semibold text-neutral-900 mb-4">Add Question</h3>
          <QuestionTypeSelector onSelect={addQuestion} />
        </div>

        <div className="bg-white rounded-2xl border border-neutral-100 p-6">
          <FormSettings />
        </div>
      </div>

      {/* Main Editor */}
      <div className="col-span-6">
        <div className="bg-white rounded-2xl border border-neutral-100 p-8 min-h-[600px]">
          {/* Form Header Preview */}
          <div className="mb-8 pb-8 border-b border-neutral-100">
            <motion.h1 
              className="text-2xl font-semibold text-neutral-900"
              layout
            >
              {title || 'Untitled Form'}
            </motion.h1>
            {description && (
              <motion.p 
                className="text-neutral-500 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {description}
              </motion.p>
            )}
          </div>

          {/* Questions */}
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={questions.map(q => q.id)}
              strategy={verticalListSortingStrategy}
            >
              <AnimatePresence mode="popLayout">
                {questions.map((question, index) => (
                  <QuestionEditor
                    key={question.id}
                    question={question}
                    index={index}
                    isSelected={selectedQuestionId === question.id}
                    onSelect={() => selectQuestion(question.id)}
                  />
                ))}
              </AnimatePresence>
            </SortableContext>
          </DndContext>

          {/* Empty State */}
          {questions.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 bg-neutral-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">
                No questions yet
              </h3>
              <p className="text-neutral-500 mb-6">
                Add your first question from the sidebar
              </p>
              <Button
                variant="secondary"
                onClick={() => addQuestion('SHORT_TEXT')}
              >
                Add a text question
              </Button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Properties Panel */}
      <div className="col-span-3">
        <AnimatePresence mode="wait">
          {selectedQuestionId && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-white rounded-2xl border border-neutral-100 p-6 sticky top-6"
            >
              <QuestionProperties questionId={selectedQuestionId} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
```

### 4.4 Score Circle Component

```tsx
// apps/web/components/ai/score-circle.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/utils/cn';

interface ScoreCircleProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  animated?: boolean;
  className?: string;
}

const sizes = {
  sm: { width: 60, stroke: 4, fontSize: 'text-lg' },
  md: { width: 100, stroke: 6, fontSize: 'text-2xl' },
  lg: { width: 140, stroke: 8, fontSize: 'text-4xl' },
};

const getScoreColor = (score: number) => {
  if (score >= 80) return { stroke: '#22c55e', bg: '#f0fdf4', label: 'Excellent' };
  if (score >= 60) return { stroke: '#84cc16', bg: '#f7fee7', label: 'Good' };
  if (score >= 40) return { stroke: '#f59e0b', bg: '#fffbeb', label: 'Average' };
  if (score >= 20) return { stroke: '#f97316', bg: '#fff7ed', label: 'Below Average' };
  return { stroke: '#ef4444', bg: '#fef2f2', label: 'Poor' };
};

export function ScoreCircle({
  score,
  size = 'md',
  showLabel = false,
  animated = true,
  className,
}: ScoreCircleProps) {
  const [mounted, setMounted] = useState(false);
  const { width, stroke, fontSize } = sizes[size];
  const { stroke: strokeColor, bg, label } = getScoreColor(score);
  
  const radius = (width - stroke) / 2;
  const circumference = radius * 2 * Math.PI;
  
  const spring = useSpring(0, {
    stiffness: 60,
    damping: 15,
  });
  
  const strokeDashoffset = useTransform(
    spring,
    [0, 100],
    [circumference, 0]
  );

  useEffect(() => {
    setMounted(true);
    if (animated) {
      spring.set(score);
    }
  }, [score, animated, spring]);

  const displayScore = animated ? Math.round(spring.get()) : score;

  return (
    <div className={cn('flex flex-col items-center', className)}>
      <div 
        className="relative"
        style={{ width, height: width }}
      >
        {/* Background circle */}
        <svg
          className="absolute inset-0 -rotate-90"
          width={width}
          height={width}
        >
          <circle
            cx={width / 2}
            cy={width / 2}
            r={radius}
            fill="none"
            stroke="#f5f5f4"
            strokeWidth={stroke}
          />
          
          {/* Progress circle */}
          <motion.circle
            cx={width / 2}
            cy={width / 2}
            r={radius}
            fill="none"
            stroke={strokeColor}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            style={{ strokeDashoffset: animated ? strokeDashoffset : circumference - (score / 100) * circumference }}
            initial={false}
          />
        </svg>
        
        {/* Score value */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className={cn('font-bold text-neutral-900', fontSize)}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
          >
            {mounted ? (animated ? displayScore : score) : 0}
          </motion.span>
        </div>
      </div>
      
      {showLabel && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-2 text-center"
        >
          <span
            className="