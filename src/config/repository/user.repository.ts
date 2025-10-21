import { PrismaClient, RoleUser } from "@prisma/client";
import type { ICreateUserInterface } from "../../domain/interfaces/user.interface.js";
import type { User } from "../../domain/entities/User.js";

export class UserRepository {
    constructor(private prisma: PrismaClient){}
    
    async create(user: User): Promise<void> {
        await this.prisma.user.create({data:{
            nome: user.nome,
            email:user.email,
            role: "ADMIN",
            senha: user.senha,
            avatarUrl:user.avataUrl,
            data: new Date(),
            imagem:{
                connect:{
                    userid: user.GetId()
                }
            }
        }})
    }

    async findAll(email: string): Promise<any> {
       const allUsers = await this.prisma.user.findMany({where:{
            email
        }})
        return allUsers
    }

   

    
}