import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
export default function Tela4() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { titulo, dia, horario, assentos, nome, cpf } = state;
  return (
    <>
      <TituloSucesso>Pedido feito com sucesso!</TituloSucesso>
      <TesteAlinhamento>
        <Container>
          <h1>Filme e sessão</h1>
          <p>{titulo}</p>
          <p>
            {dia} {horario}
          </p>
        </Container>
        <Container>
          <h1>Ingressos</h1>
          {assentos.map((assento) => {
            return <p key={assento}>Assento {assento}</p>;
          })}
        </Container>
        <Container>
          <h1>Comprador</h1>
          <p>Nome: {nome}</p>
          <p>CPF: {cpf}</p>
        </Container>
      </TesteAlinhamento>
      <Botao onClick={() => navigate("/")}> voltar pra home</Botao>
    </>
  );
}
const Botao = styled.button`
  margin-right: 8px;
  display: flex;
  margin: 90px auto 0px;
  background-color: #e8833a;
  color: #ffffff;
  width: 225px;
  height: 42px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: 0px;
`;
const TesteAlinhamento = styled.div``;

const Container = styled.div`
  margin-left: 24px;
  margin-bottom: 40px;
  font-family: "Roboto", sans-serif;
  h1 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    margin-top: 8px;
    font-size: 22px;
    font-weight: 400;
  }
`;
const TituloSucesso = styled.span`
  width: 150px;
  height: 80px;
  margin: 67px auto 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  color: #247a6b;
  font-style: normal;
  font-weight: 700;
  text-align: center;
`;
