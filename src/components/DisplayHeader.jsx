import { Menu, Segment, Image } from "semantic-ui-react";
import { LOGIN_USER, CHANGE_LANGUAGE } from "../state/actions/actionTypes";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import Logo from "../images/Logo.png";
import { useTranslation } from "react-i18next";
import React, { useEffect } from "react";
import i18n from "../i18n"
import Weather from "./Weather";

const DisplayHeader = props => {
  const { t, i18n } = useTranslation("common");

  useEffect(() => {
    const browserLanguages = navigator.languages;
    for (let i = 0; i < browserLanguages.length; i++) {
      if (browserLanguages[i].substring(0, 2) === "sv") {
        i18n.changeLanguage("sv");
        props.dispatch({ type: CHANGE_LANGUAGE, payload: { language: "sv" } });
        break;
      } else if (browserLanguages[i].substring(0, 2) === "en") {
        i18n.changeLanguage("en");
        props.dispatch({ type: CHANGE_LANGUAGE, payload: { language: "en" } });
        break;
      }
    }
  }, []);

  const authenticated = useSelector(state => state.authenticated);
  let name;
  if (authenticated) {
    name = `${t("auth.logout")}`;
  } else {
    name = `${t("auth.login")}`;
  }

  const changeLanguage = event => {
    i18n.changeLanguage(event.target.id);
    props.dispatch({ type: CHANGE_LANGUAGE, payload: { language: event.target.id } });
  };


  return (
    <Segment inverted >

      <Menu inverted pointing secondary id="main-header">
        <Menu.Item
          name={t("head.login")}
          id="login"
          onClick={() => props.dispatch({ type: LOGIN_USER })}
        >
          {name}
        </Menu.Item>
        <Image src={Logo} size="medium" centered rounded />
         <Weather/>
        <Menu.Item
          name={t("head.english")}
          id="en"
          className="lng-button"
          onClick={changeLanguage}
          position="right"
        >
        </Menu.Item>
        <Menu.Item
          name={t("head.swedish")}
          id="sv"
          className="lng-button"
          onClick={changeLanguage}
        >
        </Menu.Item>
      </Menu>
    </Segment>
  );
};

export default connect()(DisplayHeader);
