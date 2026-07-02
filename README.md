
Frontend Setup

# Student Assignment Tracker

A web application for managing student assignments efficiently. This project is built using a React + TypeScript frontend and a FastAPI backend.

---

## Frontend Setup

### Prerequisites

Make sure you have the following installed:

- Node.js (v18 or later recommended)
- npm

### Installation

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install project dependencies:

```bash
npm install
```

### Run the Development Server

Start the frontend development server:

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

### Build for Production

Generate a production build:

```bash
npm run build
```

---

## Environment Variables

Create a `.env` file inside the `frontend` directory using the `.env.example` template.

Example:

```env
VITE_API_BASE_URL=http://localhost:8000/api
```

---

## Frontend Folder Structure

```text
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   ├── types/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── vite.config.ts
└── .env.example
```

---

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS



Backend Setup

## Backend Setup

### Navigate to the backend directory

```bash
cd backend
```

### Create a virtual environment

```bash
python -m venv venv
```

### Activate the virtual environment

Windows (Git Bash):

```bash
source venv/Scripts/activate
```

### Install dependencies

```bash
pip install -r requirements.txt
```

### Run the server

```bash
uvicorn app.main:app --reload
```