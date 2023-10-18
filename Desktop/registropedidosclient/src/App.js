import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route,Link  } from 'react-router-dom';
import './App.css';
import TomaDePedidos from './pages/TomaPedidos/TomaPedidos';
import ListadoDePedidos from './pages/ListadoPedidos/ListadoPedidos';

const Botones = ({ mostrar }) => {
  if (!mostrar) {
    return null;
  }

  return (
    <div className="button-container">
      <Link to="/toma-de-pedidos">
        <button className="button">Toma de pedidos</button>
      </Link>
      <Link to="/listado-de-pedidos">
        <button className="button">Listado de pedidos</button>
      </Link>
    </div>
  );
};

function App() {
  const [mostrarBotones, setMostrarBotones] = useState(true);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/toma-de-pedidos"
            element={<TomaDePedidos setMostrarBotones={setMostrarBotones} />}
          />
          <Route
            path="/listado-de-pedidos"
            element={<ListadoDePedidos setMostrarBotones={setMostrarBotones} />}
          />
        </Routes>
        <Botones mostrar={mostrarBotones} />
      </div>
    </Router>
  );
}

export default App;