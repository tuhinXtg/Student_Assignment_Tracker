const API_BASE_URL = "http://127.0.0.1:8000";

export interface AssignmentData {
    title: string;
    description: string;
    due_date: string;
    status: string;
    priority: string;
    course_id: string;
}

export interface Assignment extends AssignmentData {
    _id: string;
}

function getToken() {
    return localStorage.getItem("access_token");
}

export async function getAssignments(): Promise<Assignment[]> {
    const response = await fetch(`${API_BASE_URL}/assignments/`, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch assignments");
    }

    return (await response.json()) as Assignment[];
}

export async function getAssignmentById(id: string) {
    const response = await fetch(`${API_BASE_URL}/assignments/${id}`, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch assignment");
    }

    return response.json();
}

export async function createAssignment(data: AssignmentData) {
    const response = await fetch(`${API_BASE_URL}/assignments/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Failed to create assignment");
    }

    return response.json();
}

export async function updateAssignment(id: string, data: AssignmentData) {
    const response = await fetch(`${API_BASE_URL}/assignments/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Failed to update assignment");
    }

    return response.json();
}

export async function deleteAssignment(id: string) {
    const response = await fetch(`${API_BASE_URL}/assignments/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to delete assignment");
    }

    return response.json();
}