import React from 'react'
import AuthenticationUser from '../components/accounts/AuthenticationUser'
import NewUserAccount from '../components/accounts/NewUserAccount';
import '../styles/Login.css'

function Login () {
  return (
    <div className='Login-container'>
      <NewUserAccount />
      <AuthenticationUser />
    </div>
  )
}

export default Login
 