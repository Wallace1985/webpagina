import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <div className = "main">
      <div className = "logo">
      <div className = "menu">
        <div className = "logo">
          <h3>Rede.Sensores</h3>
        </div>
        <div className ="item menu">
          <a href = "#">Login</a>
        </div>
       </div>
      </div>
     <div className= "form">
      <form>
           <h2>Busca de Dados</h2>
        <div className="items-forms">
          <input placeholde="Seu Código"type="text"/>
          <input  placeholde = "Seu Código"type="text"/>
          <input type="text"/>
          <input type="text"/>
          <input type="submit"/>
        </div>
      </form>
     </div>
     </div>
    <div className= "Elemento">
      <div className="center">
        <div className="conteudo single">
          <h3>Titulo da Chamada</h3>
          <p>
            Esta pagina é o meu primeiro projeto react js! 
          </p>
        </div>
        <div className="conteudo single">
           <h3>Titulo da Chamada</h3>
             <p>
               Esta pagina é o meu primeiro projeto react js! 
            </p>
         </div>  
      </div>   
    </div>
  </div>
  
  );
}

export default App;
