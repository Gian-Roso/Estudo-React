import './App.css';
import HelloWord from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
import { useState } from 'react';
import SeuNome from './components/SeuNome';
import Saldacao from './components/Saldacao';

function App() {

  const nome = "João"

  const meuItens = ['React', 'Vue', 'Angular']

  const [name, setName] = useState()

  return (
    
    <div className="App"> 

      <h1>State lift</h1>
      <SeuNome setName={setName}/>
      <Saldacao name={name}/>


      <h1>Renderização de listas</h1>
      <OutraLista Itens={meuItens}/>
      <OutraLista Itens={[]}/>
      <Condicional/>

      <Form/>

      <Evento numero="1"/>
      


      <List/>
      <Frase/>
      <HelloWord/>
      <SayMyName nome="Gian"/>
      {/* Aqui eu adiciono a função criada, junto a propriedade que eu quero chamar, e então defino o valor dela, isso torna a função dinamica*/}
      <SayMyName nome="Matheus"/>
      <SayMyName nome={nome}/>
      {/* também posso usar uma variavel para passar um dado dinamico pela props */}

      <h1>Hello Word</h1>

      <Pessoa 
        nome="Gian"  
        idade="20" 
        profissao="Nenhuma" 
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
