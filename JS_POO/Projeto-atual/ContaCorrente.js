import { Cliente } from "./Cliente.js"

export class ContaCorrente {
    agencia
    static numerodeContas = 0

    _cliente
    _saldo = 0

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor
        }
    }

    get cliente() {
        return this._cliente
    }

    get saldo() {
        this._saldo
    }

    constructor(agencia, cliente) {
        this.agencia = agencia
        this.cliente = cliente
        ContaCorrente.numerodeContas += 1
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor
            return valor
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor
        }
    }
    transferir(valor, conta) {
        conta.cidade = "SP"
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
        valor = 20
    }
}