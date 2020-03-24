import React from 'react'
// import { authentication } from '../modules/authentication'
import { useDispatch } from 'react-redux'

const Login = () => {
  const dispatch = useDispatch()

  let login
  login =
    <form onSubmit={event => onLogin(event, dispatch)}>
      <input name="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <input type="submit" value="Login using hooks" />
    </form>

  return (
    login
  )
}

export default Login;
