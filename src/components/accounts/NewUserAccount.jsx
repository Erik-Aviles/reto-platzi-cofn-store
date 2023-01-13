/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line 
const NewUserAccount = ({addToBuyer}) => {
  const [text, setText] = useState('')
  const navegate = useNavigate()
  const inputForm = useRef();

  const handleChange = (e) => {
    setText(e.target.value)
  }
  const handleSutmit = () => {
    const input = inputForm.current
    if (!text) {
      input.focus()
    }else{
      console.log(text)
      navegate('/login/register');
    }
  }
  return (
    <section>
      <form >
        <h3>CREAR UNA CUENTA</h3>
        <section>
          <p>No tienes cuenta? Haz clic en este boton para crearte una nueva cuenta y guardar todas tur preferencias y poder ver el listado de tus pedidos. </p>
          <label htmlFor='email_create'>
            Direccion de email
          </label>
          <input 
            ref={inputForm} 
            type='email' 
            value={text}
            aria-required='true'
            onChange={handleChange}/> 
        </section>
        <div>
          <button type='button' onClick={handleSutmit} >CREAR UNA CUENTA</button>
        </div>
      </form>
    </section>
  )
}

export default NewUserAccount;