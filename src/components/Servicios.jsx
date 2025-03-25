import { Container } from 'react-bootstrap';
import "./css/servicios.css";

function Servicios() {
  return (
    <Container fluid className="container serv-estilo">
      <br />
      <br />
      <section id="servicios" className="p-5">
        <div className="servicio-item">
          <h2 className="servicio-title">Servicios</h2>
          <p className='servicio-text'>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
           Dignissimos, voluptates tempore praesentium aspernatur neque est. Sequi ducimus incidunt, voluptas, dignissimos veniam odio animi quae excepturi recusandae neque totam vitae? Tempore!
          </p>
          <hr />
        </div>

        <div className="servicio-item">
          <h2 className="servicio-title">Clientes</h2>
          <p className='servicio-text'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Nostrum cumque magnam sunt possimus quae enim iusto natus deserunt vero tempora dolore odit, reiciendis sed quia culpa ea atque ut veniam.
          </p>
          <hr />
        </div>
      </section>
    </Container>
  );
}
export default Servicios;