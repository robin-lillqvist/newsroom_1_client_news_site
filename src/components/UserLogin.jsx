import React from 'react'
import { onLogin, onLogout } from '../modules/authentication'
import { useDispatch, useSelector } from 'react-redux'

const Login = props => {
  const dispatch = useDispatch()
  const authenticated = useSelector(state => state.auth.authenticated)

  let login
  if (authenticated) {
    login =
    (<>
      <p id="message">{props.message}</p>
      <button onClick={() => onLogout(dispatch)}>
        Logout
      </button>
      </>
    )

    
  } else {
    login =
      <form id="login-form" onSubmit={event => onLogin(event, dispatch)}>
        <input id="email" name="email" placeholder="Email" />
        <input id="password" name="password" type="password" placeholder="Password" />
        <input id="login-button" type="submit" value="Login" />
      </form>
  }
  return login
}

export default Login;
