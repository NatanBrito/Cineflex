import ReactDOM from "react-dom";
import "./assets/reset.css";
import Header from "./components/header/Header";
function App(){
return(
    <Header />
)

}


  ReactDOM.render(<App />, document.querySelector(".root"));