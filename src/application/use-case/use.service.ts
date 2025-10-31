import type { CreateUserDTO } from "../../domain/dtos/create.user.dto.js";
import type { UserLoginDTO } from "../../domain/dtos/login.user.dto.js";
import type { ICreateUserInterface } from "../../domain/repository/user.interface.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export class UserService {
    constructor(
        private UserRepository: ICreateUserInterface
    ) { }

    async Create(data: CreateUserDTO) {

        if (!data.email || !data.nome || !data.role || !data.senha) throw new Error("Os dados precisam estar preenchidos")


        if (!data.email.includes("@")) throw new Error("formato do email inválido")

        const exist = await this.UserRepository.find(data.email)

        if (exist != null) throw new Error("O email informado ja se encontra em uso! Por favor insira um novo email")

        const HashPassword = await bcrypt.hash(data.senha, 12)
        data.senha = HashPassword
        const newUser = await this.UserRepository.create(data)
        console.log("iniciando validação do user case")
        return newUser
    }

    async Login(data: UserLoginDTO) {

        if (!data.email || !data.senha) throw new Error("Preencha todos os campos com dados fávidos")

        const userExist = await this.UserRepository.find(data.email)

        if (!userExist || userExist == null) throw new Error("Usuário não registrado, por favor crie seu login")

        if (!process.env.SECRET_KEY) {
            throw new Error("JWT_SECRET não está definida!");
        }
        const token = jwt.sign({ id: userExist.id, role: userExist.role }, process.env.SECRET_KEY)

        return token
    }
}