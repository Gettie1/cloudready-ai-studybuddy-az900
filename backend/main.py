
import os

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from google import genai

# Load environment variables for local development.
# On Render, configure GEMINI_API_KEY in Environment Variables.
load_dotenv()

# Initialize the FastAPI application.
app = FastAPI(title="CloudReady AI Study Buddy API")

# Allow the local frontend and deployed Vercel frontend.
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://cloudready-ai-studybuddy-az900.vercel.app",
    ],
    allow_credentials=False,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type"],
)

# Initialize Gemini only when an API key is configured.
api_key = os.getenv("GEMINI_API_KEY")
client = genai.Client(api_key=api_key) if api_key else None


class StudyQuestion(BaseModel):
    question: str = Field(min_length=1, max_length=2000)
    language: str = "en"


@app.get("/")
def home():
    return {"message": "CloudReady API is running!"}


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/api/study")
def study(request: StudyQuestion):
    if client is None:
        raise HTTPException(
            status_code=500,
            detail="The AI API key is not configured.",
        )

    language = "Swahili" if request.language == "sw" else "English"

    prompt = f"""
You are CloudReady AI Study Buddy, a friendly tutor
helping beginners prepare for the Microsoft AZ-900 exam.

Answer in {language}.

The learner asks:
{request.question}

Give a clear, beginner-friendly answer with:
1. A simple definition.
2. A relatable Kenyan or African example.
3. The connection to Microsoft Azure.
4. An AZ-900 exam tip.
5. One short question to check understanding.

Be accurate. If a concept is uncertain, say so.
Do not claim that your answer is an official exam question.
"""

    try:
        response = client.models.generate_content(
            model="gemini-3.5-flash",
            contents=prompt,
        )

        answer = response.text

        if not answer:
            raise HTTPException(
                status_code=502,
                detail="The AI returned an empty answer.",
            )

        return {"answer": answer}

    except HTTPException:
        raise
    except Exception:
        # Keep API keys and internal errors out of public responses.
        raise HTTPException(
            status_code=502,
            detail=(
                "The AI service could not generate an answer. "
                "Please try again."
            ),
        )
