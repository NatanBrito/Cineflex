import "./style.css";
import { Link , useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from "axios";
import Footer from "../footer/Footer";
export default function Tela3(){
    const {idSessao}=useParams();
    const [assentos,setAssentos]= useState([])
    const [infoFooter,setInfoFooter]=useState([])
    const link=`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    useEffect(()=>{
        console.log(idSessao)
      const promise= axios.get(link)
      promise.then(response =>{
          const {data}= response
          setAssentos(data.seats)
          setInfoFooter(data)
      })
    },[])
    console.log(infoFooter)
    return(
        <>
        <div className="tituloSelecao ">Selecione o horário</div>
        <div className="assentos">
           { assentos.map((assento, index) =>{
                return(
                    <div key={assento+index} className={`assento assentoEscolhido ${assento.isAvailable ? "disponivel" : "indisponivel"}`}>{assento.name}</div>
                )
            })}

        </div>
        <div className="disposicao">
        <div className="assento selecionado"></div>
        <div className="assento disponivel"></div>
        <div className="assento indisponivel"></div>
        </div>
        <div className="estadosAssento">
        <span className="estadoAssento">Selecionado</span>
        <span className="estadoAssento">Disponivel</span>
        <span className="estadoAssento">Indisponivel</span>
        </div>
        <form>
        <div className="inputs">
        <span className="titulo">Nome do comprador:</span>
        <input type="text" className="input" placeholder="   Digite seu nome..." required></input>
        </div>
        <div className="inputs cpf">
        <span className="titulo">CPF do comprador:</span>
        <input type="number" className="input" placeholder="   Digite seu CPF..." required></input>
        </div>
        <Link to="/sucesso">
        <button type="submit" className="botaoReservar">Reservar assento(s)</button>
        </Link>
        </form>
        <Footer secaoEscolhida="1555"  />
        </>
    )

}