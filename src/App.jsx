import './App.css'
import Listaproductos from './components/Listaproductos'
import { BrowserRouter as Router } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Listaproductos />
      </Router>
    </>
  )
}

export default App
