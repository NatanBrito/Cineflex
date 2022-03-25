import "./style.css";
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Tela2(){
    const {idFilme}= useParams();
    const [horarios,setHorarios]=useState();
    useEffect(()=>{
        const promise= axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/1/showtimes`)
        promise.then(response=>{
            console.log("entrei tela2")
            const {data}=response;
            console.log(data)
            setHorarios(data)
        })
    },[])
    console.log(horarios)
 return(
     <>
     <div className="tituloSelecao">Selecione o horário</div>

     <div className="secao">
         <span>Quinta-feira - 24/06/2021</span>
         <div className="botoes">
         <button className="botaoHorario"></button>
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
     {/* <Footer url={horarios.posterURL} /> */}
     </>
 )
}