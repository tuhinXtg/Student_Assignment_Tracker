# Student Assignment Tracker

A full-stack web application that helps students organize and manage their academic assignments efficiently. The application provides secure authentication, course management, assignment tracking, and an interactive dashboard to help students stay on top of their coursework.

---

# Features

* User Registration & Login (JWT Authentication)
* Protected Routes
* Course Management (Create, Read, Update)
* Assignment Management (Create, Read, Update, Delete)
* Dashboard Statistics
* Dynamic Assignment Progress Bar
* Assignment Status Filter
* User-specific Data Isolation
* Responsive User Interface

---

# Tech Stack

## Frontend

* React
* TypeScript
* Vite
* React Router
* Tailwind CSS

## Backend

* FastAPI
* Python
* MongoDB Atlas
* Beanie ODM
* Motor
* JWT Authentication
* Passlib

---

# Project Architecture

```text
React + TypeScript
        │
        ▼
REST API
        │
        ▼
FastAPI
        │
        ▼
Beanie ODM
        │
        ▼
MongoDB Atlas
```

---

# Project Structure

```text
Student_Assignment_Tracker/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── types/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.ts
│   └── .env.example
│
├── backend/
│   ├── app/
│   ├── requirements.txt
│   └── .env.example
│
├── docs/
└── README.md
```

---

# Frontend Setup

## Prerequisites

Make sure you have the following installed:

* Node.js (v18 or later recommended)
* npm

## Installation

Navigate to the frontend directory:

```bash
cd frontend
```

Install the required dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:5173
```

Build the application for production:

```bash
npm run build
```

---

# Backend Setup

## Prerequisites

* Python 3.12 or later
* pip

## Installation

Navigate to the backend directory:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate the virtual environment (Windows Git Bash):

```bash
source venv/Scripts/activate
```

Install the required packages:

```bash
pip install -r requirements.txt
```

Run the FastAPI development server:

```bash
uvicorn app.main:app --reload
```

The backend server will be available at:

```text
http://localhost:8000
```

---

# Environment Variables

## Frontend

Create a `.env` file inside the `frontend` directory using the `.env.example` template.

Example:

```env
VITE_API_BASE_URL=http://localhost:8000
```

## Backend

Create a `.env` file inside the `backend` directory using the `.env.example` template.

Example:

```env
DATABASE_URL=your_mongodb_connection_string
DATABASE_NAME=student_assignment_tracker

SECRET_KEY=your_secret_key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=60
```

---

# API Endpoints

## Authentication

| Method | Endpoint         |
| ------ | ---------------- |
| POST   | `/auth/register` |
| POST   | `/auth/login`    |

## Courses

| Method | Endpoint        |
| ------ | --------------- |
| GET    | `/courses/`     |
| POST   | `/courses/`     |
| PUT    | `/courses/{id}` |

## Assignments

| Method | Endpoint            |
| ------ | ------------------- |
| GET    | `/assignments/`     |
| POST   | `/assignments/`     |
| PUT    | `/assignments/{id}` |
| DELETE | `/assignments/{id}` |

---

# Authentication

The application uses **JWT (JSON Web Token)** authentication.

After a successful login, an access token is stored on the client and included as a Bearer token in authenticated API requests.

---

# Screenshots

Screenshots of the application can be added here.

* Login Page
* Dashboard
* Courses
* Assignments

---

# Future Enhancements

* Search Assignments
* Assignment Sorting
* Additional Dashboard Widgets
* Deadline Notifications
* Assignment Analytics

---

# Author

**Nazmul Alam**

GitHub: https://github.com/tuhinXtg

---

# License

This project was developed for educational purposes as part of a Computer Science & Engineering course at Independent University, Bangladesh.
