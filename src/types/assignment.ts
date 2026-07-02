export interface Assignment {

    id: string;
    title: string;
    course: string;
    dueDate: string;
    status: "Pending" | "Completed";

}