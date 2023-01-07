/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import { Helmet } from 'react-helmet' 
import { useNavigate } from 'react-router-dom';
import '../../styles/RegisterUser.css'

// eslint-disable-next-line 
const RegisterUser = () => {
    const navegate = useNavigate()
    const form = useRef(null);
    const handleSutmit = () => {
      /* const formData = new FormData(form.current);
      const user = Object.fromEntries(formData)
      addToUser(user); */
      navegate(-1);
    }

    const ddDay = [];    
    for(let i=1; i<32; i++){
      const dataFecha=i;
      ddDay.push(dataFecha);
    } 
    console.log(ddDay)

    const ddData = [];    
    for(let i=1990; i<2022; i++){
      const dataFecha=i;
      ddData.push(dataFecha);
    } 
    console.log(ddData)

    const ddMes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre' , 'Diciembre'];
    console.log(ddMes)

    const ddGender = ['Masculino', 'Femenino', 'Otro'];
    console.log(ddGender)

    


  return (
    <>  
      <Helmet>
        <title>Registro de usuario - Erika Store</title>
      </Helmet>  
      <section className='Formulario-registerUser-main'>
        <form className='form-container' ref={form}>
          <section className='form-title'>
            <h3>SUS DATOS PERSONALES</h3>
          </section>
          <section className='container'>
            <p style={{color: 'red'}}>* Campo requerido</p>
            <section className='New-User_select-gerundio'>
              <div className='radio-container'>
                <label className='radio-container-label' htmlFor='id_gender1'>Sr.</label>
                <input className='radio-container-radio ' type='radio' id='id_gender1' name='id_gender' value='1'/>
              </div>
              <div className='radio-container'>
                <label className='radio-container-label' htmlFor='id_gender2'>Sra.</label>
                <input className='radio-container-radio' type='radio' id='id_gender2' name='id_gender' value='2'/>
              </div>
              <div className='radio-container'>
                <label className='radio-container-label' htmlFor='id_gender3'>Srta.</label>
                <input className='radio-container-radio' type='radio' id='id_gender3' name='id_gender' value='3'/>
              </div>
            </section>
            <section className='New-User_form-container'>
              <div className='form-items'>
                  <label htmlFor='customer_firstname'>Nombre <span style={{color: 'red'}}>*</span></label>
                  <input type='name' id='customer_firstname' data-validate='isName' name='customer_firstname' aria-required='true'/> 
              </div>
              <div className='form-items'>
                  <label htmlFor='customer_lastname'>Apellidos <span style={{color: 'red'}}>*</span></label>
                  <input type='text' id='customer_lastname' data-validate='isApellido' name='customer_lastname' aria-required='true'/> 
              </div>
              <div className='form-items'>
                  <label htmlFor='email'>Direccion de email <span style={{color: 'red'}}>*</span></label>
                  <input type='email' id='email' data-validate='isEmail' name='email' aria-required='true'/> 
              </div>
              <div className='form-items'>
                  <label htmlFor='passwd'>Contraseña <sup style={{color: 'red'}}>*</sup></label>
                  <input type='password' id='passwd' data-validate='isPasswd' name='passwd' aria-required='true'/> 
                  <span>(Mínimo 5 caracteres)</span>
              </div>
              <div className='form-items'>
                  <label htmlFor='conf_passwd'>Verificar Contraseña <sup style={{color: 'red'}}>*</sup></label>
                  <input type='password' id='conf_passwd' data-validate='isPasswd' name='conf_passwd' aria-required='true'/> 
                  <span>(Mínimo 5 caracteres)</span>
              </div>
              <div className='form-items'>
                <label>Fecha de nacimiento</label>
                <div  className='New-User_select'>
                  <div id='uniform-days'>
                    <select className='casilla' id='days' name='days'>
                      <option value=''>Day</option>  
                      {
                        ddDay.map(items => (
                          <option key={items} value={items}>{items}&nbsp; </option>      
                        ))
                      }    
                    </select>
                  </div>
                  <div id='uniform-months'>
                    <select className='casilla' id='months' name='months'>
                      <option value=''>Month</option>  
                      {
                        ddMes.map(items => (
                          <option key={items} value={items}>{items}&nbsp; </option>      
                        ))
                      }   
                    </select>
                  </div>
                  <div id='uniform-years'>
                    <select  className='casilla' id='years' name='years'>
                      <option value=''>Year</option> 
                      {
                        ddData.map ( (items )=> (
                          <option key={items} value={items} >{items}</option>      
                        ))
                      }
                    </select>
                  </div>
                </div>
              </div>
              <div className='form-items' id='uniform-gender'>
                <label >Genero</label>
                <div className='New-User_gener'>
                  <select className='casilla' id='gender' name='gender'>
                    <option value=''>Select</option>  
                    {
                      ddGender.map(items => (
                        <option key={items} value={items}>{items}&nbsp; </option>      
                      ))
                    }    
                  </select>
                </div>
              </div>
            </section>
          </section>
          <section className='container-button'>
            <button type='button' onClick={handleSutmit} >CREAR UNA CUENTA</button>
          </section>
        </form>
      </section>
    </>

  )
}

export default RegisterUser;