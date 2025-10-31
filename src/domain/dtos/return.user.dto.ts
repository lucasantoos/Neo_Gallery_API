import type { RoleUser } from "@prisma/client";

export interface IReturnUserDTO {
    id: number,
    nome: string,
    email: string,
    role: RoleUser
}