export class Imagem {
    constructor(
        private readonly id: number,
        private readonly userId: number,
        private url: string,
        private data: Date,
        private publico: boolean
    ) { }


}