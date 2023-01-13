/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/Contactos.css'

// eslint-disable-next-line
const Contactos = () => {

  const navegate = useNavigate()
  const {
    addToMessageUser,
    isCorrect, 
    SetIsCorrect,
  } = useContext(AppContext)
  const form = useRef(null);

  const handleSutmit = () => {
    const formData = new FormData(form.current);
    const messageUser = Object.fromEntries(formData)
    const emailRef = form.current.email
    const servicesOptionRef = form.current.servicesOption.values
    const passwordRef = form.current.password
    const textareaRef = form.current.textarea
    switch (true) {
      case messageUser.servicesOption === '':
        servicesOptionRef.focus()
        break;
      case messageUser.email === '':
        emailRef.focus()
        break;
      case messageUser.password === '':
        passwordRef.focus()
        break;
      case messageUser.textarea === '':
        textareaRef.focus()
        break;
      default:
        addToMessageUser(messageUser);
        SetIsCorrect(true)
        setTimeout(()=> {
          navegate('/')
          SetIsCorrect(false)
        }, 3000)
        break;
    }
  }

  return (
    <section className='Contacto'>
      <h3>SERVICIO AL CLIENTE - CONTACTENOS</h3>
      <form className='Contacto-container' ref={form}>
        <div className='contacto_asusto'>
          <label>Asunto</label>
          <select name='servicesOption' >
            <option >--Elija--</option>
            <option >Servicio de atencion al cliente</option>
          </select>
          <label>Direccion de correo electronico</label>
          <input type='email' name='email'/>
          <label>Referencia del pedido</label>
          <input type='text' name='password'/>
        </div>
        <div className='contacto_messages'>
          <label>Mensajes</label>
          <textarea name='textarea'/>
          {isCorrect && <p style={{color: 'green'}} >Mensaje enviado exitosamente pronto nos comunicaremos contigo</p>}
        </div>
      </form>
      <button type='button' onClick={handleSutmit}>
        ENVIAR MENSAJE
      </button>
    </section>
  );
};

export default Contactos
