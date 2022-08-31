import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { useSelector } from "react-redux";
const App=()=>{
    const bollColor=useSelector(state=>state.blackMode)
    return <div style={{background:bollColor?'#222':'white',color:bollColor&&'white'}}>
        <Toggle/>
        <Intro/>
        <About/>
        <ProductList/>
        <Contact/>
    </div>
}
export default App;