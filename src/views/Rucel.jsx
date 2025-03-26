import { Carousel } from 'react-bootstrap';
//import './css/rucel.css';

function Rucel() {
  const slides = [
    {
      src: 'img/tactico2.webp',
      alt: 'Primer Slide',
      title: 'Tactico 2',
      caption: 'AirSoft',
    },
    {
      src: 'img/tactico3.webp',
      alt: 'Second Slide',
      title: 'Tactico 3',
      caption: 'AirSoft',
    },
    {
      src: 'img/tactico4.webp',
      alt: 'Tree Slide',
      title: 'Tactico 4',
      caption: 'AirSoft',
    },
  ];
  // quite la barra que antecede img
  return (
    <Carousel
      className="carousel-container w-100 mb-5 p-0"
      style={{  }}
      controls
      indicators
      interval={10000}
    >
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={slide.src}
            alt={slide.alt}
            style={{
              width: '100vw', // Toma todo el ancho del viewport
              height: 'auto',
              objectFit: 'cover',
            }}
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
            <h3>{slide.title}</h3>
            <p>{slide.caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
export default Rucel;
