const API_BASE_URL = "http://127.0.0.1:8000";

export interface CourseData {
    course_name: string;
    course_code: string;
    instructor?: string;
    semester?: string;
}

export async function createCourse(course: CourseData) {
    const token = localStorage.getItem("access_token");

    const response = await fetch(`${API_BASE_URL}/courses/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(course),
    });

    if (!response.ok) {
        throw new Error("Failed to create course");
    }

    return await response.json();
}

export async function getCourses() {
    const token = localStorage.getItem("access_token");

    const response = await fetch(`${API_BASE_URL}/courses/`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch courses");
    }

    return await response.json();
}

export async function updateCourse(
    courseId: string,
    course: CourseData
) {
    const token = localStorage.getItem("access_token");

    const response = await fetch(
        `${API_BASE_URL}/courses/${courseId}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(course),
        }
    );

    if (!response.ok) {
        throw new Error("Failed to update course");
    }

    return await response.json();
}

export async function deleteCourse(courseId: string) {
    const token = localStorage.getItem("access_token");

    const response = await fetch(
        `${API_BASE_URL}/courses/${courseId}`,
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    if (!response.ok) {
        throw new Error("Failed to delete course");
    }

    return await response.json();
}