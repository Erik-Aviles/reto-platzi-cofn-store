/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line 
const NewUserAccount = ({addToBuyer}) => {
  const navegate = useNavigate()
  const form = useRef(null);

  const handleSutmit = () => {
    navegate('/login/register');
  }
  return (
    <section>
      <form ref={form}>
        <h3>CREAR UNA CUENTA</h3>
        <section>
          <p>No tienes cuenta? Haz clic en este boton para crearte una nueva cuenta y guardar todas tur preferencias y poder ver el listado de tus pedidos. </p>
          <label htmlFor='email_create'>
            Direccion de email
          </label>
          <input type='email' data-validate='isEmail' name='email_create' aria-required='true'/> 
        </section>
        <div>
          <button type='button' onClick={handleSutmit} >CREAR UNA CUENTA</button>
        </div>
      </form>
    </section>
  )
}

export default NewUserAccount;