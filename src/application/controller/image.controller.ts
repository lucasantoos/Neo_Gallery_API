import type { ImageService } from "../use-case/imagem.service.js";

export class ImageController{
    constructor(private ImageService : ImageService){}
    
    public Image = async (req:any, rep:any)=>{
        try {
            const {originalname} = req.file
           const {titulo, url, publico, data, userID} = req.body
           const imagem = await this.ImageService.createImagem({titulo: originalname, data, publico, url, userID})
           console.log(req.file)
           return rep.status(201).send(imagem)
        } catch (e:any) {
            return rep.send({message: e.message})
        }

    }
}