import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()
export class VerificationRoutersAcess {

    Validation = async (req: any, rep: any) => {

        const token = req.headers["authorization"].split(" ")[1]

        if (!token) throw new Error("Token inválido ou inexistente")

        console.log(token)


        if (!process.env.SECRET_KEY) throw new Error("chave secreta não disponivel")

        const decoded = await jwt.verify(token, process.env.SECRET_KEY)

        console.log(decoded)
        req.use = decoded

    }
}