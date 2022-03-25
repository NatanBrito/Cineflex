import "./style.css";
import Footer from "../footer/Footer";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Tela2(){
   
    const {idFilme}= useParams();
    const [horarios,setHorarios]=useState([]);
    const [infoFooter,setInfoFooter]=useState([])
    useEffect(()=>{
        const promise= axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/5/showtimes`)
        promise.then(response=>{
            console.log("entrei tela2")
            const {data}=response;
            console.log(data.days[0].showtimes)
            setHorarios(data.days)
            setInfoFooter(data)
        })
    },[])    
 return(
     <>
     <div className="tituloSelecao">Selecione o horário</div>
     <div className="secoes">
      {horarios.map((day,index)=>{
          return(
            <div key={index+day} className="secao">
            <span>{day.weekday} - {day.date}</span>
            <div className="botoes">
            { day.showtimes.map(horario=>{
                return(
                    <Link to="/sessao/240">
                    <button className="botaoHorario">{horario.name}</button>
                    </Link>
                )

             })}   
        </div>
        </div>
          )
      })}
      </div>
     {/* <div className="secao">
         <span>Quinta-feira - 24/06/2021</span>
         <div className="botoes">
         <button className="botaoHorario">15:00</button>
         <button className="botaoHorario">15:00</button>
         <button className="botaoHorario">15:00</button>
     </div>
     </div> */}
     <Footer url={infoFooter.posterURL} nomeFilme={infoFooter.title} secaoEscolhida="" />
     </>
 )
}