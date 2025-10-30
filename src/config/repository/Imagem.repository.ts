import type { PrismaClient } from "@prisma/client";
import type { ICreateImagemInterface } from "../../domain/repository/imagem.interface.js";
import type { CreateImageDTO } from "../../domain/dtos/create.image.dto.js";
import type { ReturnImageDTO } from "../../domain/dtos/return.image.dto.js";

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

    async find(id: number): Promise<any> {
        const image = await this.prisma.imagem.findUnique({
            where:{
                id: id
            },
            include:{
                user: true
            }
        })
        return image
        }

    async delete(id: number): Promise<void> {
        // farei posteriormente sem uso ainda
    }

    async findAll(user:{ id: number}): Promise<ReturnImageDTO[]> {
        const allImages = await this.prisma.imagem.findMany({where:{
            id: user.id
        }})
        return allImages
    }
}