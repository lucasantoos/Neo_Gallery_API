export class Email {
    constructor(public email: string) { }

    addEmail(email: string): void {
        if (email.length <= 5 || !email.includes("@,.")) throw new Error("O formato de email deve ser valido")
        this.email = email
    }
}