import React from 'react'
import { onLogin, onLogout } from '../modules/authentication'
import { useDispatch, useSelector } from 'react-redux'
import { Header, Modal, Button } from 'semantic-ui-react'

const Login = props => {
  const dispatch = useDispatch()
  const authenticated = useSelector(state => state.authenticated)
  const message = useSelector(state => state.message)
  const showLogin = useSelector(state => state.showLogin)

  let login
  if (authenticated) {
    login =
      <button onClick={() => onLogout(dispatch)}>
        Logout
      </button>

  } else {
    login =
      <form id="login-form" onSubmit={event => onLogin(event, dispatch)}>
        <input id="email" name="email" placeholder="Email" />
        <input id="password" name="password" type="password" placeholder="Password" />
        <input id="login-button" type="submit" value="Login" />
      </form>
  }
  return (
    <Modal open={true}>
      <Header icon='sign-in' content='Login'/>
      <Modal.Content>
      {message && <p id="message">{message}</p>}
      {login}
      </Modal.Content>
      <Modal.Actions>
        <Button 
          onClick={() => dispatch({ type: "CLOSE_LOGIN" })}
        >
          Close
        </Button>
      </Modal.Actions>
      </Modal> 
  )
}

export default Login;
