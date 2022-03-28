import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export default function Tela4(){
  const navigate=useNavigate;
    return (
      <>
        <TituloSucesso>Pedido feito
        com sucesso!</TituloSucesso>
        <Container>
          <h1>Filme e sessão</h1>
          <p>Enola Holmes</p>
          <p>24/06/2021 15:00</p>
        </Container>
        <Container>
          <h1>Ingressos</h1>
          <p>Assento 15</p>
          <p>Assento 16</p>
        </Container>
        <Container>
          <h1>Comprador</h1>
          <p>Nome: João da Silva Sauro</p>
          <p>CPF: 123.456.789-10</p>
        </Container>
        <Botao > voltar pra home</Botao>
      </>
    )
}
const Botao= styled.button`
    margin-right: 8px;
    display: flex;
    margin: 90px auto 0px;
    background-color: #E8833A;
    color: #FFFFFF;
    width: 225px;
    height: 42px;  
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    border: 0px;

`


const Container= styled.div`
margin-left:24px;
margin-bottom:40px;
font-family: 'Roboto', sans-serif;
h1{
    font-size:24px;
    font-weight:700;
    margin-bottom:10px
}
p{
    margin-top:8px;
    font-size:22px;
    font-weight:400; 
}
`
const TituloSucesso= styled.span`
width: 150px;
height: 80px;
margin: 67px auto 30px;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Roboto', sans-serif;
font-size: 24px;
color: #247A6B;
font-style:normal;
font-weight: 700;
text-align: center;
`