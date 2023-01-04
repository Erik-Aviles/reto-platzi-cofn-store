import React from 'react';
import { Helmet } from 'react-helmet';
import AuthenticationUser from '../components/accounts/AuthenticationUser'
import NewUserAccount from '../components/accounts/NewUserAccount';
import '../styles/Login.css'

function Login () {
  return (
    <>    
      <Helmet>
        <title>Login - Erika Store</title>
      </Helmet>
      <div className='Login-container'>
        <NewUserAccount />
        <AuthenticationUser />
      </div>
    </>
  )
}

export default Login
 