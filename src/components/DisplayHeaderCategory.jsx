import React from "react";
import { Menu, Segment, Icon } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { CATEGORY_SELECTION } from '../state/actions/actionTypes'

const HeaderCategories = props => {

  // handleItemClick = ( { name }) => {
  //   // this.setState({ activeItem: name })
  //   this.props.dispatch(
  //     {type: CATEGORY_SELECTION, payload: name }
  //   )
  // }

  debugger
  const categories = [{ name: 'latest_news' }, { name: 'culture' }, { name: 'tech' }, { name: 'food' }, { name: 'sports' }];
  let categoryList = categories.map(item => {
    return (
    <Menu.Item
      id={`category-${item.name}`}
      name={item.name}
      key={item.name}
      as={Link}
      to={{ pathname: `/${item.name.toLowerCase()}` }}
      // active={activeItem === category.name}
      // onCLick={() => handleItemClick()}
      onClick={() => props.dispatch({ type: CATEGORY_SELECTION, payload: item.name })} 
    />
    )
  })

  debugger
  return (
    < Menu id='article-category' pointing secondary style={{ backgroundColor: "white" }}>
      {categoryList}
    </Menu>
  );

};
export default connect()(HeaderCategories);