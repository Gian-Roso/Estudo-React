import styles from './Frase.module.css'
// esse style e semelhante ao props, é um objeto que condensou a estilização e permite que eu acesse  por meio dele as estilizações

function Frase() {

    return (
        <div className={styles.fraseContainer }>
            <p className={styles.fraseContent}>Este é um componente com uma frase</p>
        </div>
    )
}

export default Frase