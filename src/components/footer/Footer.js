import "./style.css";
export default function Footer({url,nomeFilme,secaoEscolhida,horarioEscolhido}){
 return(
     <footer>
         <div className="footerImg">
              <img  className="imgFooter" src={url} alt="Capa do filme"/>
          </div>
          <div className="escritas">
          <p>{nomeFilme}</p>
          <p>{secaoEscolhida}  {horarioEscolhido}</p>
          </div>
     </footer>
 )
}