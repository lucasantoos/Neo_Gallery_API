import type { CreateImageDTO } from "../dtos/create.image.dto.js"
import type { ReturnImageDTO } from "../dtos/return.image.dto.js"


export interface ICreateImagemInterface {
    create(user: CreateImageDTO): Promise<void>
    find(id: number): Promise<ReturnImageDTO>
    findAll(user:{ id:number}): Promise<ReturnImageDTO[]>
    delete(id: number): Promise<void>
}