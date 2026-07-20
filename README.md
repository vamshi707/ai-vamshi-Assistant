# AI-First CRM HCP Module

## Overview

This project is an AI-powered Customer Relationship Management (CRM) system for Healthcare Professionals (HCPs). It enables field representatives to log interactions using either a conversational AI interface or a structured form. The application uses LangGraph and Groq LLM to extract structured CRM data from natural language.

---

## 🚀 Live Application

**Web App:**  
https://radiant-alfajores-e3d31a.netlify.app/

**Android APK:**  
## 🌐 Live Demo

https://radiant-alfajores-e3d31a.netlify.app/

## 📱 Android APK

[Download Vamshi AI Assistant APK](./apk/VamshiAIAssistant.apk)
Download from the `apk/` folder in this repository.

note this point:

The first request takes about 30 seconds because Render is "waking up".

That's normal on Render's free-tier services. After a period of inactivity, the service can go to sleep. The first request wakes it up, which can take some time. Once it's awake, later requests are much faster.


---

## Tech Stack

- Frontend: React + Redux
- Backend: FastAPI
- AI Framework: LangGraph
- LLM: Groq (Gemma2-9B-IT)
- Database: MySQL
- Android: Capacitor + Android Studio

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
- Android Mobile Application

---

## LangGraph Tools

1. Log Interaction
2. Edit Interaction
3. Delete Interaction
4. Get History
5. AI Follow-up

---

## Project Structure

```text
AI-CRM
│
├── app                 # FastAPI Backend
├── src                 # React Frontend
├── android             # Android Studio Project
├── apk                 # Android APK
└── README.md
```

---

## Workflow

User → React UI → FastAPI → LangGraph → Groq LLM → MySQL Database

---

## Installation

### Backend

```bash
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend

```bash
npm install
npm run dev
```

---

## Future Improvements

- Authentication
- Analytics Dashboard
- Voice Input
- Export Reports (PDF/Excel)

---

## Author

**Vamshi**  
Python Full Stack Developer | React | FastAPI | LangGraph | AI Integration