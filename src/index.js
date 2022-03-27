import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./assets/reset.css";
import Header from "./components/header/Header";
import TelaInicial from "./components/telaInicial/TelaInicial";
import Tela2 from "./components/tela2/Tela2";
import Tela3 from "./components/tela3/Tela3";
import Tela4 from "./components/tela4/Tela4";
function App(){
return(
  <BrowserRouter>
    <Header />
    <Routes>
       <Route path="/" element={<TelaInicial />} />
       <Route path="/filme/:idFilme" element={<Tela2 />} />
       <Route path="/sessao/:idSessao" element={<Tela3 />} />
       <Route path="/sucesso" element={<Tela4 />} />
    </Routes>
  </BrowserRouter>

)

}


  ReactDOM.render(<App />, document.querySelector(".root"));