/* eslint-disable */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const inicialForm = {
  title: ''
}

function SearchForm ({handleSearch}) {
  const [form, setForm] = useState(inicialForm);
  const navegate = useNavigate()

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (event)=>{
    navegate('./search')
    event.preventDefault();
    
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




