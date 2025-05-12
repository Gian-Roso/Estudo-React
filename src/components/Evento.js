import Button from "./eventos/Button"

function Evento({ numero }) {

    function meuEvento() {
        console.log(`Ativando primeiro evento`)
    }

    function segundoEvento() {
        console.log("Ativando segundo evento")
    }

    return(
        <div>
            <p>
                Clique para disparar um Evento
                <Button event={meuEvento} text="Primeiro evento"/>
                <Button event={segundoEvento} text="Segundo evento"/>
                <button onClick={meuEvento}>Ativar!</button>
            </p>
        </div>
    )
}

export default Evento