/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line 
const AuthenticationUser = () => {
  const navegate = useNavigate()
  const form = useRef(null);
    const handleSutmit = () => {
      navegate('/checkout/payment');
    }

  return (
    <section>
      <form ref={form}>
          <h3>AUTENFICACION</h3>
          <section>
              <p>¿Ya tienes cuenta? Haz clic en este botón e introduce tus datos de usuario y continua con tu compra. </p>
              <div>
                <label htmlFor='email_create'>
                    Direccion de email
                </label>
                <input type='email' id='email_create' data-validate='isEmail' name='email_create' aria-required='true'/> 
              </div>
              <div>
                <label htmlFor='pass'>
                   Contraseña
                </label>
                <input type='password' id='pass' data-validate='isEmail' name='pass' aria-required='true'/> 
              </div>
          </section>
          <div>
            <button type='button' onClick={handleSutmit} >Inicia sesion</button>
          </div>
          <div>Olvido su contraseña?</div> 
      </form>
</section>
  )
}

export default AuthenticationUser;
