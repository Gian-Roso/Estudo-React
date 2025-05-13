function OutraLista({Itens}) {
    return(
        <>
            <h3>
                Lista de coisas boas:
            </h3>
            {Itens.length > 0 ? (
                Itens.map((item, index) => (
                    <p key={index}>{item}</p>
            ))) : (
                <p>Não há itens na lista!</p>
            )}
        </>
    )
}
export default OutraLista