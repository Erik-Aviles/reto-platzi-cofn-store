/* eslint-disable */
import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const inicialForm = {
  title: ''
}

function SearchForm ({handleSearch, setMessages, search, }) {
  const [form, setForm] = useState(inicialForm);
  const inputRef = useRef();
  const navegate = useNavigate()
  
  const handleChange = (event) => {

    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    navegate('./search')
    const input = inputRef.current;
    input.focus()
    if (!form.title) {
      return;
    }
    handleSearch(form);
    setForm(inicialForm);
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className='nav-buscar'
    >
      <input 
        ref={inputRef}
        type='text'
        name='title'
        value={form.title}
        onChange={handleChange}
        autoComplete='off'
      />
      <button 
        type='submit' 
      >
        <i className="fa-solid fa-magnifying-glass" title='Icono de Lupa'/>
      </button>
      
    </form>
  )
}

export default SearchForm;




