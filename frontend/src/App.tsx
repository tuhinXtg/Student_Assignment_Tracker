import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddCourse from "./pages/AddCourse";
import Courses from "./pages/Courses.tsx";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import EditCourse from "./pages/EditCourse.tsx";
import Assignments from "./pages/Assignment.tsx";
import AddAssignment from "./pages/AddAssignment";
import EditAssignment from "./pages/EditAssignment";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Navigate to="/login" replace />}
            />

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/register"
                element={<Register />}
            />
            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/add-course"
                element={
                    <ProtectedRoute>
                        <AddCourse />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/edit-course/:courseId"
                element={
                    <ProtectedRoute>
                        <EditCourse />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/courses"
                element={
                    <ProtectedRoute>
                        <Courses />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/assignments"
                element={
                    <ProtectedRoute>
                        <Assignments />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/add-assignment"
                element={
                    <ProtectedRoute>
                        <AddAssignment />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/edit-assignment/:assignmentId"
                element={
                    <ProtectedRoute>
                        <EditAssignment />
                    </ProtectedRoute>
                }
            />

        </Routes>
    );
}

export default App;