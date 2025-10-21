import { User } from "../entities/User.js"
import  type {CreateUserDTO } from "../dtos/create.user.dto.js"

export interface ICreateUserInterface{
    create(user: CreateUserDTO): Promise<void>
    find(id: number): Promise<User>
    findAll(email:string): Promise<any>
    delete(id: number):Promise<void>
}