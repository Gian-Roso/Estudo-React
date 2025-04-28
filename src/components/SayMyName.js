function SayMyName(props) {
    
    return (
        <div>
            {/* ao adicionar o props a função, o valor da propriedade que eu passar será condensada dentro do props e então podera ser acessado por ela */}
            <p>Fala ai {props.nome}, suave?</p> 
        </div>
    )
}

export default SayMyName