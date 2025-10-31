import type { ImageService } from "../use-case/imagem.service.js";

export class ImageController{
    constructor(private ImageService : ImageService){}
    
    public Image = (req:any, rep:any)=>{
        try {
           const {titulo, url, publico, data, userID} = req.body
           const imagem = this.ImageService.createImagem({titulo, data, publico, url, userID})
           console.log(req.file)
           return rep.status(201).send(imagem)
        } catch (e:any) {
            return rep.send({message: e.message})
        }

    }
}