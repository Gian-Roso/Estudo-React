function Evento({ numero }) {

    function meuEvento() {
        console.log(`Opa fui ativado ${numero}`)
    }

    return(
        <div>
            <p>
                Clique para disparar um Evento
                <button onClick={meuEvento}>Ativar!</button>
            </p>
        </div>
    )
}

export default Evento