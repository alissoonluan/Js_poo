import { Cliente } from './Cliente.js'
import { Gerente } from './Funcionario/Gerente.js'
import { Diretor } from './Funcionario/Diretor.js'
import { SistemaAutenticacao } from './SistemaAutenticacao.js'

const diretor = new Diretor("Alexandre", 10000, 14324435343)
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Bruno", 5000, 2432432435)
gerente.cadastrarSenha("123")

const estaLogado = SistemaAutenticacao.login(diretor, "123")


console.log(estaLogado)

