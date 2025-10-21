export class User{
    constructor(
        private readonly id: number,
        public name: string,
        public email: string,
        private senha: string,
        public readonly data: Date
    ){}

    GetId(){
        return this.id
    }

    addName(name: string):void{
        if(name.length <= 1) throw new Error("O nome deve ser válido")
    }

    addEmail(email:string): void{
        if(email.length <= 5 || !email.includes("@,.")) throw new Error("O formato de email deve ser valido")
    }

    addSenha(senha:string):void{
        if(senha.length <= 5)throw new Error("A senha precisa ter mais que 5 caracteres")
    }
}