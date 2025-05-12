import { useState } from "react"

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()
    
    function limparEmail() {
        setUserEmail("")
    }

    function EnviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }
    return (
        <div>
            <h2>Cadastre seu E-mail:</h2>
            <form action="">
                <input type="email" placeholder="Digite o seu email..." onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" onClick={EnviarEmail}>Enviar-Email</button>  
                {userEmail && (
                    <div>
                        <p>O e-mail do usuario é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar email</button>
                    </div>
                )} 
            </form>
        </div>
    )
}

export default Condicional