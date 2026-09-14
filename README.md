# Premier School LMS — Tashkent

High-performance Learning Management System for **Premier School English Language Center** in Tashkent, Uzbekistan. Built with React 19, Vite, Tailwind CSS, an Express TypeScript backend with real-time SSE updates, local state persistence, and native Google Gemini AI tools.

---

## 🌟 Key Features

1. **Role-Based Access Control (RBAC)**:
   - **Student**: Personalized dashboard, 7-step onboarding wizard, adaptive CEFR placement test, Leitner 5-box daily vocabulary, interactive AI grammar trainer, homework submission (auto-graded & essays), monthly championship.
   - **Teacher**: Group schedule & room management, 4-state student attendance tracking (Present, Absent, Late, Excused) with notes, homework assignment & essay grading with custom feedback, and pedagogical AI Content Studio.
   - **Admin**: Institute analytics, branch management (Oybek & Chorsu campuses), student capacity & group management, central vocabulary dictionary builder, and monthly championship season reset.

2. **Native Google Gemini AI Integration**:
   - **Grammar Practice Generator**: Generates CEFR-tailored questions with immediate rule explanations and XP rewards powered by `gemini-3.8-flash`.
   - **AI Content Studio**: Generates 90-minute ESL lesson plans with stage-by-stage timings and teacher CCQs, reading passages with comprehension questions & Uzbek vocabulary highlights, and auto-scoring quizzes.
   - **AI Study Assistant**: Real-time bilingual conversational assistant for grammar clarifications and IELTS guidance.
   - **Zero Client Leakage**: All AI endpoints run through secure backend server routes (`/api/ai/*`).

3. **Uzbekistan Context & Resilience**:
   - Bilingual support (Uzbek `uz` and English `en`).
   - Safari Private Browsing resilience: `src/lib/storage.ts` in-memory fallback prevents quota crashes on iPhone Safari.
   - Local-first persistence: Works instantly out-of-the-box with pre-seeded Tashkent academic demo accounts and real-time cross-tab synchronization.

---

## 🚀 Getting Started

### 1. Environment Variables

Create `.env` based on `.env.example`:

```bash
cp .env.example .env
```

Set the Gemini API key:
```ini
GEMINI_API_KEY="your_gemini_api_key"
```

### 2. Run the Application

```bash
npm run dev
```

App runs on `http://localhost:3000`.
