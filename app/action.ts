// app/actions.ts
"use server";

export async function createTodo(prevState: any, formData: FormData) {
    try {
        // Create the todo.
        return {
            errors: {
                todo: "Invalid todo.",
            },
        };
    } catch (err) {
        return {
            errors: {
                todo: "Invalid todo.",
            },
        };
    }
}