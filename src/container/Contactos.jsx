/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../styles/Contactos.css'

// eslint-disable-next-line
const Contactos = () => {
  return (
    <section className='Contacto'>
      <h3>SERVICIO AL CLIENTE - CONTACTENOS</h3>
      <form className='Contacto-container'>
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
      <button type='button'>
        ENVIAR MENSAJE
      </button>
    </section>
  );
};

export default Contactos
