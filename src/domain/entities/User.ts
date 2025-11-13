export class User {
    constructor(
        private readonly id: number,
        public nome: string,
        public email: string,
        public senha: string,
        public avataUrl: string,
        public role: string,
        public data: Date
    ) { }

    addName(nome: string): void {
        if (nome.length <= 1) throw new Error("O nome deve ser válido")
        this.nome = nome
    }

    addSenha(senha: string): void {
        if (senha.length <= 5) throw new Error("A senha precisa ter mais que 5 caracteres")

    }

    get(email: string): void {
        this.email
    }
}