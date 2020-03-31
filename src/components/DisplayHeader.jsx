import React from "react";
import { Menu, Segment, Icon, Image } from "semantic-ui-react";
import { LOGIN_USER } from "../state/actions/actionTypes";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import Logo from "../images/Logo.png";

const DisplayHeader = props => {
  const authenticated = useSelector(state => state.authenticated);
  let name;
  if (authenticated) {
    name = "Logout";
  } else {
    name = "Login";
  }

  return (
    <Segment inverted>
      <Menu inverted pointing secondary id="main-header">
        <Menu.Item
          name="login"
          id="login"
          onClick={() => props.dispatch({ type: LOGIN_USER })}
        >
          {name}
        </Menu.Item>
        <Image src={Logo} size='medium' centered rounded/>
        {/* <Menu.Item name="main-header" id="main-header" position="right">
          <Icon name="sidebar" size="large"></Icon>
        </Menu.Item> */}
      </Menu>
    </Segment>
  );
};

export default connect()(DisplayHeader);
