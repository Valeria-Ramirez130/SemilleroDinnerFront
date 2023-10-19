import React, { useEffect, useState } from 'react';
import './ListadoPedidos.css';

const ListadoDePedidos = ({ setMostrarBotones }) => {
  const [pedidos, setPedidos] = useState([]); 

  useEffect(() => {
    setMostrarBotones(false);
    cargarPedidos();
    return () => {
      setMostrarBotones(true);
    };
  }, [setMostrarBotones]);


  const cargarPedidos = async () => {
    try {
      const response = await fetch('http://localhost:3000/toma-de-pedidos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setPedidos(data);
      } else {
        console.error('Error al cargar los pedidos');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="listado-pedidos">
      <h1>Listado de Pedidos</h1>
      <table>
        <thead>
          <tr>
            <th>Mesero</th>
            <th>#Mesa</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Categoria</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido) => (
            <tr key={pedido.id}>
              <td>{pedido.mesero}</td>
              <td>{pedido.mesa}</td>
              <td>{pedido.producto}</td>
              <td>{pedido.cantidad}</td>
              <td>{pedido.categoria}</td>
              <td>{pedido.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoDePedidos;
