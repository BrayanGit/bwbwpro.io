import { Accordion, Container } from 'react-bootstrap';
import Rucel from '../views/Rucel';
import { socialMedia } from "../constants";
//import whatsappIcon from "../assets/whatsappIcon.svg";
import './sass/nosotros.scss';

function Nosotros() {
  return (
    <Container fluid className="nosotros-container p-0">
      {/* Carousel Component */}
      <div className="carousel-wrapper">
        <br />
        <Rucel />
      </div>
      <h4 className="title">Bienvenido conoce <span>BW&BW BodyProtection</span></h4>

      {/* Accordion Component */}
      <div className="accordion-wrapper mt-4">
        <Accordion style={{ backgroundColor: "" }} defaultActiveKey="0">
          {[
            {
              key: "0",
              title: "Nosotros",
              content: (
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis repellat voluptates non eaque ad rerum facere
                  voluptatum nemo molestias rem cumque similique magnam nisi
                  ipsa earum a distinctio, eligendi quod?
                </p>
              ),
            },
            {
              key: "1",
              title: "Mision Vision",
              content: (
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minus atque nostrum possimus maxime illo libero! Placeat
                  ipsa asperiores temporibus error commodi sit vel nihil!
                  Adipisci odit veniam laboriosam quod voluptates.
                </p>
              ),
            },
            {
              key: "2",
              title: "Nuestro Objetivo",
              content: (
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nisi aperiam quibusdam assumenda! Nobis cum et consectetur
                  quod consequatur, sequi eum, doloremque perspiciatis,
                  adipisci numquam deserunt laudantium iure soluta similique
                  neque?
                </p>
              ),
            },
          ].map((item) => (
            <Accordion.Item eventKey={item.key} key={item.key} className="accordion-item-custom">
              <Accordion.Header>{item.title}</Accordion.Header>
              <Accordion.Body>{item.content}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
      <div className="text-light text-center mt-5">
        <br />
        <h4 className="social-title">Nuestras Redes Sociales</h4>
        <div className="social-icons-container mt-3">
          {socialMedia.map((social) => (
            <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer" className="social-link">
              <img src={social.icon} alt={social.id} className="social-icon" />
            </a>
          ))}
        </div>
        <br />
      </div>
      {/* Nueva ruta 
        <a href="https://wa.me/56940900712" className='whatsapp-float' target='_blank' rel='noopener noreferrer'>
          <img src={whatsappIcon} className='whatsappIcon' alt="whatsappIcon" />
        </a>
      */}
    </Container>
  );
}
export default Nosotros;