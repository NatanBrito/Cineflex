import "./style.css";
import imageEnola from "../../assets/imgs/imageEnola.jpg"
export default function Footer(){
 return(
     <footer>
         <div className="img">
              <img src={imageEnola} alt="enola"/>
          </div>
          <div className="escritas">
          <p>Enola Holmes</p>
          <p>Enola Holmes</p>
          </div>
     </footer>
 )
}