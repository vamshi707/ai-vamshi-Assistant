# AI-First CRM HCP Module

## Overview

This project is an AI-powered Customer Relationship Management (CRM) system for Healthcare Professionals (HCPs). It enables field representatives to log interactions using either a conversational AI interface or a structured form. The application uses LangGraph and Groq LLM to extract structured CRM data from natural language.

---

## Tech Stack

- Frontend: React + Redux
- Backend: FastAPI
- AI Framework: LangGraph
- LLM: Groq (Gemma2-9B-IT)
- Database: MySQL
- Font: Google Inter

---

## Features

- AI Chat Interface
- Structured HCP Interaction Form
- Auto Form Filling using AI
- Log Interaction
- Edit Interaction
- Delete Interaction
- View Interaction History
- AI Follow-up Suggestions

---

## LangGraph Tools

1. Log Interaction
2. Edit Interaction
3. Delete Interaction
4. Get History
5. AI Follow-up

---

## Project Structure

```
AI-CRM
│
├── backend
└── frontend
```

---

## Workflow

User → React UI → FastAPI → LangGraph → Groq LLM → MySQL Database

---

## Installation

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Future Improvements

- Authentication
- Analytics Dashboard
- Voice Input
- Export Reports (PDF/Excel)

