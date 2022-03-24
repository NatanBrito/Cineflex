import "./style.css";
import Footer from "../footer/Footer";
export default function Tela3(){
    return(
        <>
        <div className="tituloSelecao">Selecione o horário</div>
        <div className="assentos">
            <div className="assento">1</div>
            <div className="assento">2</div>
            <div className="assento">3</div>
            <div className="assento">4</div>
            <div className="assento">5</div>
            <div className="assento">6</div>
            <div className="assento">7</div>
            <div className="assento">8</div>
            <div className="assento">9</div>
            <div className="assento">10</div>
            <div className="assento">11</div>
            <div className="assento">12</div>
            <div className="assento">13</div>
            <div className="assento">14</div>
            <div className="assento">15</div>
            <div className="assento">16</div>
            <div className="assento">17</div>
            <div className="assento">18</div>
            <div className="assento">19</div>
            <div className="assento">20</div>

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
        <Footer />
        </>
    )

}