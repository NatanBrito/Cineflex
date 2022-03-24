import "./style.css";
import Footer from "../footer/Footer";
export default function Tela3(){
    const testes=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
        ,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]
    return(
        <>
        <div className="tituloSelecao">Selecione o horário</div>
        <div className="assentos">
           { testes.map(teste =>{
                return(
                    <div className="assento">{teste}</div>
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
        <div className="inputs">
        <span className="titulo">Nome do comprador:</span>
        <input type="text" className="input" placeholder="   Digite seu nome..."></input>
        </div>
        <div className="inputs cpf">
        <span className="titulo">CPF do comprador:</span>
        <input type="text" className="input" placeholder="   Digite seu CPF..."></input>
        </div>
        <Footer />
        </>
    )

}