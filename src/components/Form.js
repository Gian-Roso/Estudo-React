import { useState } from "react";

function Form() {

    //e é de event que servira para parar a função do formulario e imprimir o console, pois em react ao ser enviado o formulario o console desaparece
    //Utilizado para nao processar a pagina e eprder os dados dela
    function cadastrarUser(e) {
        e.preventDefault()
        console.log(`usuario: ${name} foi cadastrado com sucesso com a senha: ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <form onSubmit={cadastrarUser}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text"
                        id="name" 
                        name="name" 
                        placeholder="Digite o seu nome"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                        type="password"
                        id="password" 
                        name="password" 
                        placeholder="Digite o sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form;