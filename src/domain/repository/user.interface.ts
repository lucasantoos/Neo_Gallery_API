import type { CreateUserDTO } from "../dtos/create.user.dto.js"
import type { IReturnUserDTO } from "../dtos/return.user.dto.js"

export interface ICreateUserInterface {
    create(user: CreateUserDTO): Promise<IReturnUserDTO>
    find(email: string): Promise<IReturnUserDTO | null>
    findAll(email: string): Promise<any>
    delete(id: number): Promise<void>
}