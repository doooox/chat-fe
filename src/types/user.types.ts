export interface IUser {
    id: string,
    email: string,
    username: string,
    password: string
    isAdmin?: boolean
    token: string
}