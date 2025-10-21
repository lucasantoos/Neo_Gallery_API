import { Imagem } from "../entities/Imagem.js"

export interface ICreateImagemInterface{
    create(user: Imagem): Promise<void>
    find(id: number): Promise<Imagem>
    findAll(): Promise<Imagem[]>
    delete(id: number):Promise<void>
}