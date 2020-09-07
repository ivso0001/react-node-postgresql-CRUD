export interface User {
    id: number,
    name: string,
    email: string,
    createdAt: Date,
    updatedAt: Date,
}

export interface UserInputDTO {
    name: string,
    email: string,
}