import { Conta } from "./Conta.js"

export class ContaCorrente extends Conta{
    static numerodeContas = 0
    constructor(cliente, agencia) {
        super(0, cliente, agencia)
        ContaCorrente.numerodeContas += 1
    }

}