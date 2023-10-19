const fs = require('fs/promises');
const path = require('path');
const __dirname = path.resolve();

const getPedidos = async (req, res) => {
  try {
    const pedidos = await fs.readFile(path.join(__dirname, './data/pedidos.json'));
    const pedidosJSON = JSON.parse(pedidos);
    res.json(pedidosJSON);
  } catch (error) {
    console.error('❌ Error al obtener pedidos:', error);
    res.status(500).json({
      message: '❌ Error al obtener pedidos',
    });
  }
};

const regisPedido = async (req, res) => {
    try {
      const { body } = req;
      const { mesero, producto, cantidad, categoria, precio } = body;
  
      const nuevoPedido = {
        mesero,
        producto,
        cantidad,
        categoria,
        precio,
      };
  
      const pedidosList = await fs.readFile(path.join(__dirname, './data/pedidos.json'), 'utf-8');
      const pedidosData = JSON.parse(pedidosList);
  
      pedidosData.push(nuevoPedido);
  
      await fs.writeFile(path.join(__dirname, './data/pedidos.json'), JSON.stringify(pedidosData, null, 2), 'utf-8');
  
      res.json({
        message: '✅ Pedido registrado exitosamente',
      });
    } catch (error) {
      console.error('❌ Error al registrar el pedido:', error);
      res.status(500).json({
        message: '❌ Error al registrar el pedido',
      });
    }
  };
  