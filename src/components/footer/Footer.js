import "./style.css";
export default function Footer({url}){
 return(
     <footer>
         <div className="footerImg">
              <img  className="imgFooter" src={url} alt="enola"/>
          </div>
          <div className="escritas">
          <p>Enola Holmes</p>
          <p>Enola Holmes</p>
          </div>
     </footer>
 )
}