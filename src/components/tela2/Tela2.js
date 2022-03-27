import "./style.css";
import Footer from "../footer/Footer";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Tela2(){
   
    const {idFilme}= useParams();
    const [horarios,setHorarios]=useState([]);
    const [infoFooter,setInfoFooter]=useState([])
    const link=`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
    useEffect(()=>{
        console.log(idFilme)
        const promise= axios.get(link)
        promise.then(response=>{
            console.log("entrei tela2")
            const {data}=response;
            setHorarios(data.days)
            setInfoFooter(data)
        })
    },[])    
 return(
     <>
     <div className="tituloSelecao">Selecione o horário</div>
     <div className="secoes">
      {horarios.map((day,indice)=>{
          return(
            <div key={indice+day} className="secao">
            <span>{day.weekday} - {day.date}</span>
            <div className="botoes">
            { day.showtimes.map((horario,index)=>{
                return(
                    <Link to={"/sessao/"+horario.id}>
                    <button key={horario+index} className="botaoHorario">{horario.name}</button>
                    </Link>
                )

             })}   
        </div>
        </div>
          )
      })}
      </div>
     <Footer url={infoFooter.posterURL} nomeFilme={infoFooter.title} secaoEscolhida="" />
     </>
 )
}