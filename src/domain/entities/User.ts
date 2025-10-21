export class User{
    constructor(
        private readonly id: number,
        public nome: string,
        public  email: string,
        public  senha: string,
        public avataUrl: string,
        public role: string,
        public  data: Date
    ){}

    GetId(){
        return this.id
    }

    addName(nome: string):void{
        if(nome.length <= 1) throw new Error("O nome deve ser válido")
            this.nome = nome
    }

    addEmail(email:string): void{
        if(email.length <= 5 || !email.includes("@,.")) throw new Error("O formato de email deve ser valido")

    }

    addSenha(senha:string):void{
        if(senha.length <= 5)throw new Error("A senha precisa ter mais que 5 caracteres")

    }
}