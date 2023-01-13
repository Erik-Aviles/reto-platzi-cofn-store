/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import AppContext from '../../context/AppContext';

// eslint-disable-next-line 
const AuthenticationUser = () => {
  const navegate = useNavigate()
  const {
    isCorrect, 
    SetIsCorrect
  } = useContext(AppContext)
  const form = useRef(null);

  const handleSutmit = () => {
    const formData = new FormData(form.current);
    const user = Object.fromEntries(formData)
    const emailRef = form.current.email
    const passwordRef = form.current.password
    if (user.email === '') {
      emailRef.focus()
      
    }else if(user.password === '') {
      passwordRef.focus()

    }else{
      console.log(user)
      SetIsCorrect(true)
      setTimeout(() => {
        SetIsCorrect(false)
      }, 3000);
      setTimeout(() => {
        navegate('/');
      }, 3000);
    }
  }

  return (

<section>
      <h3>AUTENFICACION</h3>
      <p>¿Ya tienes cuenta? Haz clic en este botón e introduce tus datos de usuario y continua con tu compra. </p>
      <form ref={form}>
          <label>Direccion de email</label>
          <input type='email' id='email' data-validate='isEmail' name='email' aria-required='true'/> 

          <label >Contraseña</label>
          <input type='password' id='password' data-validate='isPassword' name='password' aria-required='true'/> 
      </form> 
      <div>
        <button type='button' onClick={handleSutmit} >INICIA SESION</button>
      </div>
      <div>Olvido su contraseña?</div> 
      {isCorrect && <p style={{color: 'green'}}>Usuario exitosamente validado</p>}
    </section>
  )
}

export default AuthenticationUser;
