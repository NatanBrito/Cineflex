import "./style.css";
import Footer from "../footer/Footer";
export default function Tela2(){
 return(
     <>
     <div className="tituloSelecao">Selecione o horário</div>

     <div className="secao">
         <span>Quinta-feira - 24/06/2021</span>
         <div className="botoes">
         <button className="botaoHorario">15:00</button>
         <button className="botaoHorario">15:00</button>
         <button className="botaoHorario">15:00</button>
     </div>
     </div>
     <div className="secao">
         <span>Quinta-feira - 24/06/2021</span>
         <div className="botoes">
         <button className="botaoHorario">15:00</button>
         <button className="botaoHorario">15:00</button>
         <button className="botaoHorario">15:00</button>
     </div>
     </div>
     <Footer />
     </>
 )
}