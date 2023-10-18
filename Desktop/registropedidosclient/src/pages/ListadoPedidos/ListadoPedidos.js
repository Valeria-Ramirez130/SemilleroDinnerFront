import React, { useEffect } from 'react';
import './ListadoPedidos.css'

const ListadoDePedidos = ({ setMostrarBotones }) => {
  useEffect(() => {
    setMostrarBotones(false);

    return () => {
      setMostrarBotones(true);
    };
  }, [setMostrarBotones]);

  return (
    <div className="listado-pedidos">
      <h1>Listado de Pedidos</h1>
      <table>
        <thead>
          <tr>
            <th>#Mesa</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Categoria</th>
            <th>Precio</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default ListadoDePedidos;
