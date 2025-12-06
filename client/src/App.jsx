import { useState } from "react"

import ApiController from "./controller/api.controller";

function App() {

  const[suma, setSuma] = useState({
    num1: 0,
    num2:0
  });

  const[calcule, setCalcule] = useState(0);

  const handleChange = (e)=>{
    const{name, value} = e.target;
    setSuma( prev => {
      return{
        ...prev,
        [name]: value
      }
    });
  }

  const handleSubmit = async() =>{
    const response = await ApiController.calculatorSuma(suma);
    setCalcule(response.data);
  }

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Isaac Moctezuma Montoya 10°C </a>
        </div>
      </nav>

      <div className="container mt-4">
        <h2>Calculadora </h2>
        <hr />
        <div className="row">
          <input type="number" name="Número 1"  placeholder="Número 1" onChange={handleChange} />
          <input type="number" name="Número 2" id="num2"  placeholder="Número 2" onChange={handleChange}/>
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>Calcular</button>
        <br />
        <h3>Resultado de Suma: {calcule}</h3>
      </div>
    </>
  )
}

export default App
