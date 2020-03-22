import React from "react";
import { Menu, Segment, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { CATEGORY_SELECTION } from "../state/actions/actionTypes";

const HeaderCategories = props => {
  
const handleItemClick = event => { 
  debugger
  props.dispatch(
      {type: CATEGORY_SELECTION, payload: event.target.id }
    )
  }


  debugger;
  return (
    <Menu id='article-category' pointing centered secondary style={{ backgroundColor: "white" }}>
      <Menu.Item
        name="Latest News"
        id="latest_news"
        as={Link}
        to={{ pathname: "/latest_news" }}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="Culture"
        id="culture"
        as={Link}
        to={{ pathname: "/culture" }}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="Tech"
        id="tech"
        as={Link}
        to={{ pathname: "/tech" }}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="Food"
        id="food"
        as={Link}
        to={{ pathname: "/food" }}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="Sports"
        id="sports"
        as={Link}
        to={{ pathname: "/sports" }}
        onClick={handleItemClick}
      />
    </Menu>
  );
  }
export default connect()(HeaderCategories);
