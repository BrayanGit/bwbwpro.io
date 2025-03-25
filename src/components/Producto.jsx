import { useContext, useState } from "react";
import { Container, Row, Col, Button, Card, Modal } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import "./css/producto.css";

function Producto() {
  const { productos, agregarAlCarro } = useContext(GlobalContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };
  const handleShowModal = (producto) => {
    setSelectedProduct(producto);
    setShowModal(true);
  };
  const handleAdquirir = () => {
    if (selectedProduct) {
      agregarAlCarro(selectedProduct); // Agregar el producto al carrito
      navigate("/carro"); // Redirigir a la vista del carrito
    }
    handleCloseModal();
  };

  return (
    <Container fluid className="producto-contenedor bg-light">
      <h2 className="text-center my-4 text-dark">Productos en Stock</h2>
      <Row className="justify-content-center">
        {productos.map((producto) => (
          <Col sm={6} md={4} lg={4} xl={3} xs={6} key={producto.id} className="mb-4">
            <Card className="producto-card h-100 shadow">
              <Card.Img variant="top" src={producto.imagen} alt={producto.titulo} />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center">{producto.titulo}</Card.Title>
                <Card.Text className="producto-texto">{producto.texto}</Card.Text>
                <Card.Text className="text-center">
                  <strong>${producto.precio}</strong>
                </Card.Text>
                <div className="d-flex justify-content-between gap-2 mt-auto">
                  <Button variant="dark" className="w-100 d-flex align-items-center justify-content-center" onClick={() => agregarAlCarro(producto)}>
                    <BsCartPlus className="me-2" /> Añadir
                  </Button>
                  <Button variant="outline-dark" className="w-100" onClick={() => handleShowModal(producto)}>
                    Ver +
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal de detalle del producto */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct?.titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img src={selectedProduct?.imagen} alt={selectedProduct?.titulo} className="img-fluid mb-3" />
          <p><strong>Precio: ${selectedProduct?.precio}</strong></p>
          <p>Información adicional sobre el producto.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => agregarAlCarro(selectedProduct)}>
            <BsCartPlus className="me-2" /> Añadir
          </Button>
          <Button variant="warning" onClick={handleAdquirir}>Adquirir</Button>
          <Button variant="dark" onClick={handleCloseModal}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
export default Producto;



