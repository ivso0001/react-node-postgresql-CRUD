export interface User {
    id: number,
    name: string,
    email: string,
    createdAt: Date,
    updatedAt: Date,
}

export interface UserInput {
    name: string,
    email: string,
}