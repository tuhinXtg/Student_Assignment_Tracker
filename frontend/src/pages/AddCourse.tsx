import CourseForm from "../components/courses/CourseForm";


export default function AddCourse(){
    return(
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w2xl mx-auto">
                <h1 className="text-3xl text-center text-bold font-bold text-gray-600 mb-6">
                    Add New Course

                </h1>

                <CourseForm />
            </div>
        </div>
    )
}