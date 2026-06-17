# Student Assignment Tracker - Technical Design Document (TDD)

## Technical Stack

| Layer           | Technology                |
| --------------- | ------------------------- |
| Frontend        | React + TypeScript + Vite |
| Backend         | Python FastAPI            |
| Database        | MongoDB (NoSQL)           |
| Authentication  | JWT                       |
| Version Control | GitHub                    |

---

## Backend Design by Layer

### 1. Controller Layer

* FastAPI routers organized by module:

  * `/auth`
  * `/students`
  * `/assignments`
  * `/submissions`
  * `/dashboard`
* Responsibilities:

  * Request handling
  * Input validation
  * Response formatting
  * HTTP status management

### 2. Service Layer

* Handles business logic:

  * Assignment creation and updates
  * Submission management
  * Deadline tracking
  * Progress calculation
  * Dashboard statistics

### 3. Repository Layer

* MongoDB data access layer.
* Responsibilities:

  * CRUD operations
  * Query optimization
  * Data retrieval and filtering
  * Collection management

### 4. Authentication Layer

* JWT-based authentication.
* Password hashing using secure algorithms.
* Protected API routes for authorized users only.

### 5. Validation Layer

* Input validation using FastAPI and Pydantic models.
* Prevents invalid or incomplete data from entering the system.

### 6. Error Handling

* Standardized error responses.

```json
{
  "error_code": "ASSIGNMENT_NOT_FOUND",
  "message": "Assignment not found"
}
```

* Global exception handling for:

  * Validation errors
  * Authentication errors
  * Database errors

### 7. Logging

* Logs important system events:

  * User login attempts
  * Assignment creation
  * Assignment updates
  * Submission activities
  * System errors

### 8. Performance Optimization

* Efficient MongoDB queries.
* Indexed collections for faster searches.
* Lightweight API responses.

### 9. Security Measures

* Password hashing
* JWT authentication
* Input validation
* Protected routes
* Secure API communication

### 10. Scalability Strategy

1. Modular backend architecture.
2. Stateless API design.
3. Independent frontend and backend deployment.
4. Database indexing for large datasets.

---

## Frontend Design Highlights

* Responsive user interface.
* Type-safe development using TypeScript.
* Component-based architecture with React.
* Fast development and build process using Vite.
* Dashboard for assignment tracking and progress monitoring.

---

## Project Structure

```text
student-assignment-tracker/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── app/
│   ├── routes/
│   ├── services/
│   └── requirements.txt
│
├── docs/
│
└── README.md
```

---

## Design Goals

| Goal            | Description                              |
| --------------- | ---------------------------------------- |
| Simplicity      | Easy-to-use interface for students       |
| Performance     | Fast API responses and data loading      |
| Maintainability | Modular and organized code structure     |
| Scalability     | Support increasing users and assignments |
| Responsiveness  | Works on desktop and mobile devices      |

---

## Design-to-Requirement Mapping

| Design Area           | Related Features                                |
| --------------------- | ----------------------------------------------- |
| Authentication Module | User registration, login, access control        |
| Assignment Module     | Create, edit, delete, and view assignments      |
| Submission Module     | Submit and manage assignment work               |
| Dashboard Module      | Track progress and deadlines                    |
| Database Module       | Store users, assignments, and submissions       |
| Security Module       | Authentication, validation, and data protection |
