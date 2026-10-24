# ☁️ CloudReady AI Study Buddy

**Your AI-powered companion for learning Microsoft Azure and preparing for the AZ-900 certification.**

CloudReady AI Study Buddy is an educational web application designed to make cloud computing easier to understand for beginners. It uses generative AI to explain Azure concepts in simple language, provide relatable Kenyan and African examples, and support learners as they prepare for the Microsoft Azure Fundamentals (AZ-900) exam.

The project was developed as part of the **Vibe Coding Hackathon: AZ-900 Exam Prep Edition for the #1MillionDevs Movement**.

## 🎯 Problem Statement

Cloud computing introduces beginners to many unfamiliar concepts, services, and technical terms. Traditional study materials may not always provide the personalized explanations or familiar examples learners need to understand these concepts confidently.

CloudReady aims to bridge this gap by making cloud education more accessible, interactive, and relatable.

## 💡 Our Solution

CloudReady AI Study Buddy combines an interactive learning interface with an AI-powered question-and-answer system. Learners can ask questions about Azure and receive beginner-friendly explanations designed to connect technical concepts to real-world experiences.

## ✨ Features

- **AI Study Buddy:** Ask questions about cloud computing and Microsoft Azure.
- **Beginner-Friendly Explanations:** Learn complex concepts through simple, understandable language.
- **Local Context:** Explore concepts using relatable Kenyan and African examples.
- **Bilingual Learning:** Choose English or Kiswahili for AI-generated explanations.
- **AZ-900 Exam Guidance:** Receive exam-focused tips and short questions to reinforce understanding.
- **Azure Learning Topics:** Explore key Azure Fundamentals concepts through the learning interface.
- **Practice and Progress Interface:** Access the study dashboard, practice quiz and progress sections available in the frontend.

*Note: AI responses require a working backend and valid Gemini API key. Persistent learning history and database-backed progress are planned enhancements.*

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React | Building the user interface |
| TypeScript | Type-safe frontend development |
| Vite | Frontend development server and build tooling |
| Tailwind CSS | Responsive interface styling |
| Python | Backend programming language |
| FastAPI | Building the REST API |
| Pydantic | Request validation |
| Google Gemini API | Generating AI-powered explanations |
| Vercel | Frontend hosting |
| Render | Backend hosting |

## 🏗️ System Architecture

```text
Learner
   |
   v
React + TypeScript Frontend
   |
   | HTTPS request
   v
FastAPI Backend
   |
   | AI prompt
   v
Google Gemini API
   |
   | Generated explanation
   v
FastAPI Backend
   |
   v
Learner receives the answer
```

The frontend handles the learner experience, while the backend validates questions and communicates with the Gemini API. Keeping AI credentials on the backend helps protect sensitive configuration values.

## 🚀 Getting Started

Follow these instructions to run CloudReady AI Study Buddy locally.

### Prerequisites

Install the following tools:

- [Node.js](https://nodejs.org/)
- [Python](https://www.python.org/)
- [Git](https://git-scm.com/)
- A Google Gemini API key from [Google AI Studio](https://aistudio.google.com/)

### 1. Clone the repository

```bash
git clone https://github.com/Gettie1/cloudready-ai-studybuddy-az900.git
cd cloudready-ai-studybuddy-az900
```

### 2. Set up the frontend

Install the frontend dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Open the local address displayed in your terminal, usually:

`http://localhost:5173`

### 3. Set up the backend

Open a second terminal at the project root:

```bash
cd backend
```

Create and activate a Python virtual environment.

**Windows PowerShell:**

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

Install the backend dependencies:

```powershell
pip install -r requirements.txt
```

Create a `.env` file inside the `backend` directory:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Replace the placeholder with your own Gemini API key. Never publish the actual key in your repository.

Start the FastAPI server:

```powershell
uvicorn main:app --reload
```

The backend should now be available at:

`http://127.0.0.1:8000`

Explore the interactive API documentation at:

`http://127.0.0.1:8000/docs`

### 4. Connect the frontend to the backend

Ensure the frontend API helper uses the correct backend address.

For local development:

```text
http://127.0.0.1:8000
```

For the deployed application, use your live Render backend URL:

```text
https://cloudready-ai-studybuddy-az900.onrender.com
```

If the frontend is configured with a hardcoded API URL, update it to the appropriate address before testing. If you use a `VITE_API_URL` environment variable, ensure the API helper reads that variable and configure it in the relevant environment.

The backend must also allow requests from your frontend's local and deployed origins through its CORS configuration.

## 🔐 Environment Variables

| Variable | Description |
|---|---|
| `GEMINI_API_KEY` | Secret API key used by the backend to access Google Gemini |

Keep `.env` files and other secrets out of Git. Add them to `.gitignore`, and configure production secrets through your hosting provider's environment-variable settings.

**Important:** Never put your Gemini API key in frontend code or expose it through a `VITE_` variable.

## ☁️ Deployment

The project uses separate hosting services for the frontend and backend.

- **Frontend:** Vercel
- **Backend:** Render
- **Backend API documentation:** [Open API Docs](https://cloudready-ai-studybuddy-az900.onrender.com/docs)

The backend's health endpoint can be checked at:

[https://cloudready-ai-studybuddy-az900.onrender.com/health](https://cloudready-ai-studybuddy-az900.onrender.com/health)

Add your verified live frontend URL here once confirmed.

## 🗺️ Future Improvements

The project can be expanded with:

- PostgreSQL integration for persistent learning history.
- Database-backed user progress and quiz score tracking.
- More interactive AZ-900 practice questions.
- Links and references to official Microsoft Learn resources.
- Personalized revision recommendations.
- Improved accessibility and usability testing with learners.
- More language options and localized examples.

These enhancements will help evolve CloudReady from an AI question-and-answer tool into a more complete cloud learning companion.

## 🌍 Vision

Our vision is to make cloud computing education more accessible by connecting global technology concepts to familiar local experiences.

CloudReady AI Study Buddy aims to help learners build understanding, confidence, and curiosity as they explore Microsoft Azure.

## 👩🏽‍💻 Author

**Getrude Cheptoo**

Software Engineering Student | Aspiring Full-Stack Developer

- GitHub: [@Gettie1](https://github.com/Gettie1)

## 🙌 Acknowledgements

- Microsoft Azure and the AZ-900 learning objectives.
- Google Gemini for generative AI capabilities.
- The #1MillionDevs Movement and the Vibe Coding Hackathon.

---

**CloudReady AI Study Buddy — Cloud learning, closer to home.** ☁️
