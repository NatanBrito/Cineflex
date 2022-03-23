import ReactDOM from "react-dom";
import "./assets/reset.css";
import Header from "./components/header/Header";
import TelaInicial from "./components/telaInicial/TelaInicial";
function App(){
return(
  <>
      <Header />
      <TelaInicial />
  </>

)

}


  ReactDOM.render(<App />, document.querySelector(".root"));