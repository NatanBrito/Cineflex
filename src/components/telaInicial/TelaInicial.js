import "./style.css";
import imageEnola from "../../assets/imgs/imageEnola.jpg"
export default function TelaInicial(){
    return(
        <div className="telaInicial">
        <article>
            <span>Selecione o filme</span>
        </article>
        <nav>
          <div className="img">
              <img src={imageEnola}/>
          </div>
          <div className="img">
              <img src={imageEnola}/>
          </div>
          <div className="img">
              <img src={imageEnola}/>
          </div>

        </nav>
        </div> 
    )
}