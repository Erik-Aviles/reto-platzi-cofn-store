/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line 
const AuthenticationUser = () => {
  const navegate = useNavigate()
  const form = useRef(null);
    const handleSutmit = () => {
  /* const formData = new FormData(form.current);
      const user = Object.fromEntries(formData)
      addToUser(user); */
      navegate('/');
    }

  return (
    <section>
      <h3>AUTENFICACION</h3>
      <p>¿Ya tienes cuenta? Haz clic en este botón e introduce tus datos de usuario y continua con tu compra. </p>
      <form ref={form}>
          <label>Direccion de email</label>
          <input type='email' id='email_create' data-validate='isEmail' name='email_create' aria-required='true'/> 

          <label >Contraseña</label>
          <input type='password' id='pass' data-validate='isEmail' name='pass' aria-required='true'/> 
      </form> 
      <div>
        <button type='button' onClick={handleSutmit} >INICIA SESION</button>
      </div>
      <div>Olvido su contraseña?</div> 
    </section>
  )
}

export default AuthenticationUser;
