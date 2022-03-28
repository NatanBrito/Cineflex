import "./style.css";
export default function Footer2(props){
    const {obj} = props
    console.log(obj)

    if(obj.length === 0) {
    return(
        <footer>
            <div className="footerImg">
                 <img className="imgFooter" src='' alt="Capa do filme"/>
             </div>
             <div className="escritas">
             <p></p>
             <p></p>
             </div>
        </footer>
    )} else{
        return(
            <footer>
                <div className="footerImg">
                     <img className="imgFooter" src={obj.movie.posterURL} alt="Capa do filme"/>
                 </div>
                 <div className="escritas">
                 <p>{obj.movie.title}</p>
                 <p>{obj.name}</p>
                 </div>
            </footer>
        )
    }
    
    
    
}