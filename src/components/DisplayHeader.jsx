import React from "react";
import { Menu, Segment, Icon } from "semantic-ui-react";

const DisplayHeader = () => {
  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        <Menu.Item
          name="article-category"
          id="article-category"
          position="right"
        // active={}
        // onClick={}
        >
          <Icon name="sidebar" size="large"></Icon>
        </Menu.Item>
      </Menu>
    </Segment>
    
  );
};

export default DisplayHeader;