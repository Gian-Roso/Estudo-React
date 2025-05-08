function Form() {

    //e é de event que servira para parar a função do formulario e imprimir o console, pois em react ao ser enviado o formulario o console desaparece
    //Utilizado para nao processar a pagina e eprder os dados dela
    function cadastrarUser(e) {
        e.preventDefault()
        console.log("Usuario cadastrado com sucesso")
    }
    return(
        <div>
            <form onSubmit={cadastrarUser}>
                <div>
                    <input type="text" placeholder="Digite o seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form;