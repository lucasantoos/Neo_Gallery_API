import { PrismaClient, RoleUser } from "@prisma/client";
import type { ICreateUserInterface } from "../../domain/repository/user.interface.js";
import type { CreateUserDTO } from "../../domain/dtos/create.user.dto.js";
import type { IReturnUserDTO } from "../../domain/dtos/return.user.dto.js";

export class UserRepository implements ICreateUserInterface {
    constructor(private prisma: PrismaClient) { }

    async create(user: CreateUserDTO): Promise<IReturnUserDTO> {
        const newUser = await this.prisma.user.create({
            data: {
                nome: user.nome,
                email: user.email,
                senha: user.senha,
                role: user.role,
                data: new Date()
            }
        })
        return newUser
    }

    async findAll(email: string): Promise<any> {
        const allUsers = await this.prisma.user.findMany({
            where: {
                email
            }
        })
        return allUsers
    }

    async delete(id: number): Promise<void> {
        await this.prisma.user.delete({
            where: {
                id: id
            }
        })
    }

    async find(email: string): Promise<IReturnUserDTO | null> {
        const user = await this.prisma.user.findUnique({
            where: {
                email
            }
        })
        if (!user) {return null}

        return {
            id: user!.id,
            nome: user!.nome,
            email: user!.email,
            role: user.role
        }
    }

}