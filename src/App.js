import './App.css';
import HelloWord from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

  const nome = "João"

  return (
    <div className="App"> 

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
