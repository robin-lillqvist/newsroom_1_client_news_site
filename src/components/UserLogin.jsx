import React from "react";
import { onLogin, onLogout } from "../modules/authentication";
import { useDispatch, useSelector } from "react-redux";
import { Header, Modal, Button } from "semantic-ui-react";
import { useTranslation } from "react-i18next";

const Login = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(state => state.authenticated);
  const message = useSelector(state => state.message);

  const { t } = useTranslation();

  let login;
  let header;
  let icon
  if (authenticated) {
    login = <button onClick={() => onLogout(dispatch)}>{t("auth.logout")}</button>;
    header = `${t("auth.logout")}`;
    icon = "sign-out"
  } else {
    header = `${t("auth.login")}`;
    icon = "sign-in"
    login = (
      <form id="login-form" onSubmit={event => onLogin(event, dispatch)}>
        <input 
          id="email" 
          name="email" 
          placeholder={t("auth.email")} />
        <input
          id="password"
          name="password"
          type="password"
          placeholder={t("auth.password")}
        />
        <input id="login-button" name={t("auth.login")} type="submit" value={t("auth.login")}/>
      </form>
    );
  }
  return (
    <Modal open={true}>
      <Header icon={icon} content={header}/>
      <Modal.Content>
        {message && <p id="message">{message}</p>}
        {login}
      </Modal.Content>
      <Modal.Actions>
        <Button id="close-button" onClick={() => dispatch({ type: "CLOSE_LOGIN" })}>{t("auth.close")}</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default Login;
