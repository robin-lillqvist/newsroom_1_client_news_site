import React from "react";
import { Menu, Segment, Icon } from "semantic-ui-react";
import { Link } from 'react-router-DOM'

const HeaderCategories = () => {
  const { activeItem } = props

  return (
    <Menu pointing secondary style={{ backgroundColor: "white" }}>
      <Menu.Item name="Latest News" id="category-latest-news" as={Link} active={props.activeItem === "category-latest-news"} onClick={props.handleItemClick} />
      <Menu.Item name="Culture" id="category-culture" as={Link} active={props.activeItem === "category-culture"} onClick={props.handleItemClick} />
      <Menu.Item name="Tech" id="category-tech" as={Link} active={props.activeItem === "category-tech"} onClick={props.handleItemClick} />
      <Menu.Item name="Food" id="category-food" as={Link} active={props.activeItem === "category-food"} onClick={props.handleItemClick} />
      <Menu.Item name="Sports" id="category-sports" as={Link} active={props.activeItem === "category-sports"} onClick={props.handleItemClick} />
    </Menu>
  );
};

export default HeaderCategories;
