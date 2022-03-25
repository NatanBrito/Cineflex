import "./style.css";
export default function Footer({url,nomeFilme,secaoEscolhida}){
 return(
     <footer>
         <div className="footerImg">
              <img  className="imgFooter" src={url} alt="enola"/>
          </div>
          <div className="escritas">
          <p>{nomeFilme}</p>
          <p>{secaoEscolhida}</p>
          </div>
     </footer>
 )
}