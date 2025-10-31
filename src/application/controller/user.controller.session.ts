import type { UserService } from "../use-case/use.service.js";

export class UserSessionController {
    constructor(private UserService: UserService) { }

    Login = async(req: any, rep:any)=>{
        try {
            const {email, senha} = req.body
            const data = {
                email, 
                senha
            }
               const login = await this.UserService.Login(data)
             return rep.status(200).send(login)
        } catch (error:any) {
            return rep.status(400).send({mensagem: error.message})
        }

    }
}