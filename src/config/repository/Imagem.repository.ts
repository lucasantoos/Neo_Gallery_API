import type { PrismaClient } from "@prisma/client";
import type { ICreateImagemInterface } from "../../domain/repository/imagem.interface.js";
import type { CreateImageDTO } from "../../domain/dtos/create.image.dto.js";
import type { Imagem } from "../../domain/entities/Imagem.js";

export class ImagemRepository implements ICreateImagemInterface {
    constructor(
        private prisma: PrismaClient
    ) { }

    async create(user: CreateImageDTO): Promise<void> {
        await this.prisma.imagem.create({
            data: {
                titulo: user.titulo,
                url: user.url,
                publico: user.publico,
                data: user.data,
                user: {
                    connect:
                        { id: user.userID }
                }
            }
        })
    }

    async find(id: number): Promise<Imagem> {
        
    }

    async delete(id: number): Promise<void> {
        
    }

    async findAll(): Promise<Imagem[]> {
        
    }
}