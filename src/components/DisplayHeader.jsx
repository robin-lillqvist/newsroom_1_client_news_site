import React from "react";
import { Menu, Segment, Image } from "semantic-ui-react";
import { LOGIN_USER } from "../state/actions/actionTypes";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import Logo from "../images/Logo.png";
import { useTranslation } from "react-i18next";

const DisplayHeader = props => {
  const authenticated = useSelector(state => state.authenticated);
  let name;
  if (authenticated) {
    name = "Logout";
  } else {
    name = "Login";
  }

  const { t, i18n } = useTranslation("common");

  const changeLanguage = event => {
    let languageButtons = document.getElementsByClassName("lng-button");
    Array.from(languageButtons).forEach(
      button => (document.getElementById(button.id).style.fontWeight = "300")
    );
    i18n.changeLanguage(event.target.id);
    props.changeLanguage(event.target.id);
    document.getElementById(event.target.id).style.fontWeight = "900";
  };

  return (
    <Segment inverted >

      <Menu inverted pointing secondary id="main-header">
        <Menu.Item
          name="login"
          id="login"
          onClick={() => props.dispatch({ type: LOGIN_USER })}
        >
          {name}
        </Menu.Item>
        <Image src={Logo} size="medium" centered rounded />
        <Menu.Item
          name={t("nav.english")}
          id="en"
          className="lng-button"
          onClick={changeLanguage}
          position="right"
        >
          En
        </Menu.Item>
        <Menu.Item
          name={t("nav.swedish")}
          id="sv"
          className="lng-button"
          onClick={changeLanguage}
        >
          Sv
        </Menu.Item>
      </Menu>
    </Segment>
  );
};

export default connect()(DisplayHeader);
