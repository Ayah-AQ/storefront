
import { useState } from "react";
import Categories from "./Components/Categories";
import Headers from "./Components/Header"
import Routers from "./Routres";


function App() {
  const [showCart, setShowCart] = useState(false); 
  return(
    <>
    <Headers setShowCart={setShowCart} showCart={showCart}/>
    <Routers/>
    </>
    )
  
}
export default App;