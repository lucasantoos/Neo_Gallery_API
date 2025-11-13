import type { RoleUser } from "@prisma/client"


export interface CreateUserDTO {
    nome: string,
    email: string,
    senha: string,
    role: RoleUser
}