import type { CreateUserDTO } from "../../domain/dtos/create.user.dto.js";
import type { UserService } from "../use-case/use.service.js";

export class RegisterUserController {
    constructor(private userServiceRegister: UserService) { }

    Register = async (req: any, rep: any) => {
        try {
            const { email, nome, role, senha } = req.body
            const data: CreateUserDTO = {
                email,
                nome,
                role,
                senha
            }
            console.log("iniciando...")
            const newUser = await this.userServiceRegister.Create(data)

            return rep.status(201).send({
                newUser
            })

        } catch (e: any) {
            return rep.status(400).send({ mensagem: e.message })
        }

    }
}