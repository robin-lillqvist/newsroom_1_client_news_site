import React from 'react'
import { onLogin } from '../modules/authentication'
import { useDispatch } from 'react-redux'

const Login = () => {
  const dispatch = useDispatch()

  let login
  login =
    <form id="login-form" onSubmit={event => onLogin(event, dispatch)}>
      <input id="email" name="email" placeholder="Email" />
      <input id="password" name="password" type="password" placeholder="Password" />
      <input id="login-button" type="submit" value="Login" />
    </form>
    

  return (
    login
  )
}

export default Login;
