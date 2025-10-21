import { PrismaClient} from "@prisma/client";
import type { ICreateUserInterface } from "../../domain/repository/user.interface.js";
import type { CreateUserDTO } from "../../domain/dtos/create.user.dto.js";
import type { IReturnUserDTO } from "../../domain/dtos/return.user.dto.js";

export class UserRepository implements ICreateUserInterface {
    constructor(private prisma: PrismaClient){}
    
    async create(user: CreateUserDTO): Promise<IReturnUserDTO> {
      const newUser = await this.prisma.user.create({data:{
            nome: user.nome,
            email:user.email,
            senha:user.senha,
            avatarUrl: user.avataUrl,
            role: "ADMIN",
        }})
        return {
            id:newUser.id,
            email: user.email,
            nome: user.nome
        }
    }

    async findAll(email: string): Promise<any> {
       const allUsers = await this.prisma.user.findMany({where:{
            email
        }})
        return allUsers
    }

   

    
}