import type { CreateImageDTO } from "../../domain/dtos/create.image.dto.js";
import type { ImageService } from "../use-case/imagem.service.js";

export class ImageController {
    constructor(private ImageService: ImageService) { }

    public Image = async (req: any, rep: any) => {
        try {
            console.log(req.file)
            const { titulo, url, publico, data, userID } = req.body

            const dados: CreateImageDTO = {
                titulo,
                publico: true,
                url: req.file.path,
                data: new Date(),
                userID: req.use.id
            }
            const imagem = await this.ImageService.createImagem(dados)
            console.log(req.file)
            return rep.status(201).send(imagem)
        } catch (e: any) {
            return rep.send({ message: e.message })
        }

    }
}