import PropTypes from 'prop-types'

function Item({marca, lancamento}) {
    return (
        <>
            <li>{marca} - {lancamento}</li>
            <p>Teste</p>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number
}

// essa parte serve para passar um valor default
Item.defaultProps = {
    marca: 'Faltou a marca',
    lancamento: 0,
}

export default Item