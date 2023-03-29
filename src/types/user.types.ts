export interface UserI {
    userId?:number
    userName: string,
    userLastname: string,
    address: string,
    phoneNumber: number,
    email: string,
    password?: string,
}

export interface CreateUser {
    userName: string,
    userLastname: string,
    address: string
    phoneNumber: number
    email: string
    password: string
}