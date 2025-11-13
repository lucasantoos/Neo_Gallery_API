import type { ICreateImagemInterface } from "../../domain/repository/imagem.interface.js";

export class ImageService {
    constructor(private RepositoryImage: ICreateImagemInterface) { }

    async createImagem(data: { titulo: string, url: string, publico: boolean, data: Date, userID: number }) {
        if (!data) throw new Error("Dados inválidos")

        await this.RepositoryImage.create(data)

        return
    }
}