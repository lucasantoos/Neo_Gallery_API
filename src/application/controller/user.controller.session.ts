import type { UserLoginDTO } from "../../domain/dtos/login.user.dto.js";
import type { LoginUser } from "../use-case/use.login.service.js";

export class UserSessionController {
    constructor(private UserService: LoginUser) { }

    Login = async (req: any, rep: any) => {
        try {
            const { email, senha } = req.body
            const data: UserLoginDTO = {
                email,
                senha
            }
            const login = await this.UserService.Login(data)
            return rep.status(200).send(login)
        } catch (error: any) {
            return rep.status(400).send({ mensagem: error.message })
        }

    }
}