import React, { Component } from "react";
import { Menu, Segment, Icon } from "semantic-ui-react";
import { Link } from 'react-router-dom'

class HeaderCategories extends Component {
  state = {
    activeItem: '',
  }

  handleItemClick = (e, { name }) => { this.setState({ activeItem: name }) }

  render() {
    const { activeItem } = this.state
    let categories = [{ 'name': 'Latest News' }, { 'name': 'Culture' }, { 'name': 'Tech' }, { 'name': 'Food' }, { 'name': 'Sports' }]
    return (
      < Menu pointing centered secondary style={{ backgroundColor: "white" }
      }>
        {categories.map(category => (
          <Menu.Item
            id={category.name}
            name={category.name}
            key={category.name}
            as={Link}
            to={{ pathname: `/${category.name.toLowerCase()}`, state: { categoryName: `${category.name}` } }}
            active={activeItem === category.name}
            onCLick={this.handleItemClick}
          />
        ))}

        {/* <Menu.Item name="Latest News" id="category-latest-news" as={Link} active={props.activeItem === "category-latest-news"} onClick={props.handleItemClick} />
  <Menu.Item name="Culture" id="category-culture" as={Link} active={props.activeItem === "category-culture"} onClick={props.handleItemClick} />
  <Menu.Item name="Tech" id="category-tech" as={Link} active={props.activeItem === "category-tech"} onClick={props.handleItemClick} />
  <Menu.Item name="Food" id="category-food" as={Link} active={props.activeItem === "category-food"} onClick={props.handleItemClick} />
  <Menu.Item name="Sports" id="category-sports" as={Link} active={props.activeItem === "category-sports"} onClick={props.handleItemClick} /> */}
      </Menu >
    );
  }

};

export default HeaderCategories;
