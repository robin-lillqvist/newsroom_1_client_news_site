import { Menu, Segment, Image } from "semantic-ui-react";
import { LOGIN_USER, CHANGE_LANGUAGE} from "../state/actions/actionTypes";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import Logo from "../images/Logo.png";
import { useTranslation } from "react-i18next";
import React, { useEffect } from "react";
import i18n from "../i18n"

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
    debugger
    Array.from(languageButtons).forEach(
      button => (document.getElementById(button.id).style.fontWeight = "300")
    );
    i18n.changeLanguage(event.target.id);
    props.changeLanguage(event.target.id);
    //document.getElementById(event.target.id).style.fontWeight = "900";
  };

  useEffect(() => {
    const browserLanguages = navigator.languages;
    for (let i = 0; i < browserLanguages.length; i++) {
      if (browserLanguages[i].substring(0, 2) === "sv") {
        i18n.changeLanguage("sv");
        props.changeLanguage("sv");
        // document.getElementById("sv").style.fontWeight = "900";
        break;
      } else if (browserLanguages[i].substring(0, 2) === "en") {
        i18n.changeLanguage("en");
        props.changeLanguage("en");
        // document.getElementById("en").style.fontWeight = "900";
        break;
      }
    }
  }, []);


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

const mapDispatchToProps = dispatch => {
  return {
    changeLanguage: language => {
      dispatch({ type: CHANGE_LANGUAGE, payload: language });
    }
  };
};

export default connect(null, mapDispatchToProps)(DisplayHeader);
