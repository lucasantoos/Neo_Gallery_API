export class Imagem {
    constructor(
        private readonly id: number,
        private readonly userId: number,
        public ttitulo : string,
        public url: string,
        public data: Date,
        public publico: boolean
    ) { }


}