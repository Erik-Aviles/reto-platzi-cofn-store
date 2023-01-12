/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Contactos.css'

// eslint-disable-next-line
const Contactos = () => {

  const navegate = useNavigate()
  const form = useRef(null);

  const handleSutmit = () => {
    /* const formData = new FormData(form.current);
    const user = Object.fromEntries(formData)
    addToUser(user); */
    navegate('/');
  }

  return (
    <section className='Contacto'>
      <h3>SERVICIO AL CLIENTE - CONTACTENOS</h3>
      <form className='Contacto-container' ref={form}>
        <div className='contacto_asusto'>
          <label>Asunto</label>
          <select id="asusto">
            <option value="1">--Elija--</option>
            <option value="2">Servicio de atencion al cliente</option>
          </select>
          <label>Direccion de correo electronico</label>
          <input type='email'/>
          <label>Referencia del pedido</label>
          <input type='text' />
        </div>
        <div className='contacto_messages'>
          <label>Mensajes</label>
          <textarea />
        </div>
      </form>
      <button type='button' onClick={handleSutmit}>
        ENVIAR MENSAJE
      </button>
    </section>
  );
};

export default Contactos
