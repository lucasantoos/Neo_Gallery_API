import type { CreateImageDTO } from "../dtos/create.image.dto.js"
import { Imagem } from "../entities/Imagem.js"

export interface ICreateImagemInterface {
    create(user: CreateImageDTO): Promise<void>
    find(id: number): Promise<Imagem>
    findAll(): Promise<Imagem[]>
    delete(id: number): Promise<void>
}