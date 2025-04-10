import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Form, Button, Card } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalContext";
import "./sass/formulariovista.scss";

function FormularioVista() {
  const { carrito, vaciarCarrito, formData, actualizarFormulario } = useContext(GlobalContext);
  const location = useLocation();
  const navigate = useNavigate();
  const productos = location.state?.productos || carrito;
  const totalPagar = productos.reduce((total, prod) => total + prod.precio * prod.cantidad, 0);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    actualizarFormulario({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, rutci, correo, direccion, telefono, metodoPago, metodoAcred, toTerms } = formData;
    if (!nombre || !rutci || !correo || !direccion || !telefono || !metodoPago || !metodoAcred || !toTerms) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    let mensaje = `*Solicitud de Compra*\n\n👤 *Nombre:* ${nombre}\n📄 *RUT/CI:* ${rutci}\n📧 *Correo:* ${correo}\n🏠 *Dirección:* ${direccion}\n📞 *Teléfono:* ${telefono}\n💳 *Método de Pago:* ${metodoPago}\n🎖️ *Método de Acreditación:* ${metodoAcred}\n\n📦 *Productos Seleccionados:*\n`;
    
    productos.forEach((producto) => {
      mensaje += `🔹 ${producto.titulo} - ${producto.cantidad} x $${producto.precio}\n`;
    });
    
    mensaje += `\n💰 *Total a Pagar:* $${totalPagar.toFixed(2)}\n\n✅ *Acepto los términos y condiciones.*`;
    
    const numeroWhatsApp = "56940900712";
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensaje)}`;
    
    window.open(urlWhatsApp, "_blank");
    vaciarCarrito();
    navigate("/nosotros");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100 formulariovista">
      <Card className="p-4 shadow-lg" style={{ maxWidth: "450px", width: "100%" }}>
        <Card.Body>
          <Card.Title className="text-center mb-3">Formulario de Compra</Card.Title>
          <div className="d-flex flex-column align-items-center">
            {productos.length > 0 ? (
              productos.map((producto) => (
                <div key={producto.id} className="text-center mb-3 w-100">
                  <img src={producto.imagen} alt={producto.titulo} className="img-fluid mb-2" style={{ maxWidth: "120px" }} />
                  <h5>{producto.titulo}</h5>
                  <p><strong>Precio:</strong> ${producto.precio} x {producto.cantidad}</p>
                </div>
              ))
            ) : (
              <p className="text-center">No hay productos seleccionados.</p>
            )}
          </div>
          <Card.Footer className="text-center bg-dark text-white py-3 rounded">
            <h5><strong>Total a Pagar:</strong> ${totalPagar.toFixed(2)}</h5>
          </Card.Footer>
          <h6 className="text-center mt-2">Tarifa de envíos sujeta a destino</h6>
          <hr />
          <Form onSubmit={handleSubmit}>
            {[
              { label: "Nombre Completo", name: "nombre", type: "text" },
              { label: "RUT/CI", name: "rutci", type: "text" },
              { label: "Correo Electrónico", name: "correo", type: "email" },
              { label: "Dirección", name: "direccion", type: "text" },
              { label: "Teléfono", name: "telefono", type: "tel" }
            ].map(({ label, name, type }) => (
              <Form.Group className="mb-3" key={name}>
                <Form.Label>{label}</Form.Label>
                <Form.Control type={type} name={name} value={formData[name]} onChange={handleChange} required />
              </Form.Group>
            ))}
            <Form.Group className="mb-3">
              <Form.Label>Método de Pago</Form.Label>
              <Form.Select name="metodoPago" value={formData.metodoPago} onChange={handleChange} required>
                <option value="">Selecciona un método de pago</option>
                <option value="efectivo">Efectivo</option>
                <option value="tarjeta">Tarjeta de Débito</option>
                <option value="transferencia">Transferencia Bancaria</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Método de Acreditación</Form.Label>
              <Form.Select name="metodoAcred" value={formData.metodoAcred} onChange={handleChange} required>
                <option value="">Selecciona una opción</option>
                <option value="guardia">Guardia de Seguridad</option>
                <option value="militar">Personal Militar</option>
                <option value="club">Miembro del Club</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 form-check">
              <Form.Check type="checkbox" name="toTerms" checked={formData.toTerms} onChange={handleChange} label="Acepto los términos y condiciones" required />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">Enviar Solicitud Compra</Button>
            <Button variant="secondary" className="w-100 mt-2" onClick={() => navigate("/carro")}>
              Volver al Carro
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default FormularioVista;



