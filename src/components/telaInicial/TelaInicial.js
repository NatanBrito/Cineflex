import "./style.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link} from "react-router-dom";
export default function TelaInicial(){
    const [filmes,setFilmes]= useState([])
    useEffect(()=>{
        const promise= axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then(response=>{
            const {data}=response
         setFilmes(data)
        })
    },[])
    return(
        <div className="telaInicial">
        <article>
            <span className="tituloSelecao">Selecione o filme</span>
        </article>
        <nav>
         {filmes.map((filme,index)=>{
             return(
              <div key={index} className="img">
              <Link to="/filme/37">
              <img src={filme.posterURL} alt="enola"/>
              </Link>
          </div>
             )
         })}
        </nav>
        </div> 
    )
}