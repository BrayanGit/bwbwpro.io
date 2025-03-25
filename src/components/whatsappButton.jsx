import React from "react";
import { whatsappIcon } from "../assets"; // Importamos el ícono correcto
import "./sass/whatsappButton.scss"; // Asegúrate de tener este archivo

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/56940900712"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
    </a>
  );
};
export default WhatsappButton;

