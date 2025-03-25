import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [productos] = useState([
    { id: 1, titulo: "Chaleco 1", texto: "Protección.", precio: 10, imagen: "/imgs/chaleco1.jpg" },
    { id: 2, titulo: "Chaleco 2", texto: "Protección.", precio: 20, imagen: "/imgs/chaleco2.jpg" },
    { id: 3, titulo: "Chaleco 3", texto: "Protección.", precio: 30, imagen: "/imgs/chaleco3.jpg" },
    { id: 4, titulo: "Chaleco 4", texto: "Protección.", precio: 40, imagen: "/imgs/chaleco4.jpg" },
    { id: 5, titulo: "Chaleco 5", texto: "Protección.", precio: 50, imagen: "/imgs/chaleco5.jpg" },
    { id: 6, titulo: "Chaleco 6", texto: "Protección.", precio: 60, imagen: "/imgs/chaleco6.jpg" },
  ]);
  const [formData, setFormData] = useState({
    nombre: "",
    rutci: "",
    correo: "",
    direccion: "",
    telefono: "",
    metodoPago: "",
    metodoAcred: "",
    toTerms: "",
  });
  const actualizarFormulario = (nuevoFormulario) => {
    setFormData(nuevoFormulario);
  };
  const agregarAlCarro = (producto) => {
    const existe = carrito.find((item) => item.id === producto.id);
    if (existe) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };
  const incrementarCantidad = (id) => {
    setCarrito(
      carrito.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };
  const decrementarCantidad = (id) => {
    setCarrito(
      carrito.map((item) =>
        item.id === id && item.cantidad > 1 ? { ...item, cantidad: item.cantidad - 1 } : item
      )
    );
  };
  const eliminarProducto = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <GlobalContext.Provider
      value={{
        productos,
        carrito,
        agregarAlCarro,
        incrementarCantidad,
        decrementarCantidad,
        eliminarProducto,
        vaciarCarrito,
        formData,
        actualizarFormulario,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

