import { useContext, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate } from "react-router-dom";
import "./css/carrovista.css";

function CarroVista() {
  const { carrito, incrementarCantidad, decrementarCantidad, eliminarProducto } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [isCheckout, setIsCheckout] = useState(false);

  const calcularTotal = () => {
    return carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  };

  const proceedToCheckout = () => {
    if (carrito.length > 0) {
      setIsCheckout(true);
      navigate("/formulario", { state: { productos: carrito } });
    }
  };

  return (
    <Container fluid className="carrovista">
      <br />
      <br />
      <br />
      <h2 className="text-center my-4">Carro de Compras</h2>
      <Table striped bordered hover size="sm" className="tabla-carro">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.titulo}</td>
              <td>${producto.precio}</td>
              <td>{producto.cantidad}</td>
              <td>${producto.precio * producto.cantidad}</td>
              <td>
                <Button style={{ borderRadius: "50px" }} variant="success" onClick={() => incrementarCantidad(producto.id)}>+</Button>{' '}
                <Button style={{ borderRadius: "50px" }} variant="success" onClick={() => decrementarCantidad(producto.id)}>-</Button>{' '}
                <Button style={{ borderRadius: "50px" }} variant="danger" onClick={() => eliminarProducto(producto.id)}>x</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h3 className="text-end">Total: ${calcularTotal()}</h3>
      <hr />
      {carrito.length > 0 && (
        <div className="text-center mt-4">
          <Button variant="success" onClick={proceedToCheckout}>Adquirir Total</Button>
        </div>
      )}
    </Container>
  );
}
export default CarroVista;

