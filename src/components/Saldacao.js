function Saldacao({name}) {

    function gerarSaudacao(algumName) {
        return `Saudação ${algumName}, Tudo bem?`
    }
    return(
        <>{name &&
            <p>
                {gerarSaudacao(name)}
            </p>
            }
        </>
    )
}
export default Saldacao