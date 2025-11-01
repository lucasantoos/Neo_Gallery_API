import jwt from "jsonwebtoken"
import type { UserLoginDTO } from "../../domain/dtos/login.user.dto.js";
import type { ICreateUserInterface } from "../../domain/repository/user.interface.js";

export class LoginUser{
    constructor(private UserRepository: ICreateUserInterface){}

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