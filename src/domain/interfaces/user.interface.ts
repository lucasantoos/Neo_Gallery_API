import { User } from "../entities/User.js"

export interface ICreateUserInterface{
    create(user: User): Promise<void>
    find(id: number): Promise<User>
    findAll(email:string): Promise<any>
    delete(id: number):Promise<void>
}