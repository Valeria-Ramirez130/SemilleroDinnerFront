import React, { useState, useEffect } from 'react';
import './TomaPedidos.css';

const TomaDePedidos = ({ setMostrarBotones }) => {
  const [pedido, setPedido] = useState({
    mesero: '',
    mesa: '',
    producto: '',
    cantidad: 0,
    categoria: '',
    precio: ''
  });

  useEffect(() => {
    setMostrarBotones(false);

    return () => {
      setMostrarBotones(true);
    };
  }, [setMostrarBotones]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/toma-de-pedidos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mesero: pedido.mesero,
          mesa: pedido.mesa,
          producto: pedido.producto,
          cantidad: pedido.cantidad,
          categoria: pedido.categoria,
          precio: pedido.precio
        }),
      });

      if (response.ok) {
        console.log('Pedido enviado con éxito');
        setPedido({
          mesero: '',
          mesa: '',
          producto: '',
          cantidad: 0,
          categoria: '',
          precio: ''
        });
      } else {
        console.error('Error al enviar el pedido');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPedido({ ...pedido, [name]: value });
  };

  return (
    <div>
      <h1>Toma de pedidos</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Mesero:
          <input type="text" name="mesero" value={pedido.mesero} onChange={handleChange} />
        </label>
        <br />
        <label>
          Mesa:
          <input type="text" name="mesa" value={pedido.mesa} onChange={handleChange} />
        </label>
        <br />
        <label>
          Producto:
          <input type="text" name="producto" value={pedido.producto} onChange={handleChange} />
        </label>
        <br />
        <label>
          Cantidad:
          <input type="number" name="cantidad" value={pedido.cantidad} onChange={handleChange} />
        </label>
        <br />
        <label>
          Categoría:
          <select name="categoria" value={pedido.categoria} onChange={handleChange}>
            <option value="">Selecciona una categoría</option>
            <option value="beb">Bebidas</option>
            <option value="As">Asados</option>
            <option value="En">Ensaladas</option>
            <option value="PosEn">Postres/Helados</option>
            <option value="Ac">Acompañamientos</option>
          </select>
        </label>
        <br />
        <label>
          Precio:
          <input type="text" name="precio" value={pedido.precio} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default TomaDePedidos;
