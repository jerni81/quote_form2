import React, { useState } from "react";
import {
  Header,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Button,
} from "semantic-ui-react";

const PageHeader = () => {
  const [view, setView] = useState(false);

  const clickHandle = (e) => {
    setView(!view);
  };

  return (
    <div>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation={"slide out"}
          icon
          inverted
          vertical
          visible={view}
          width="thin"
        >
          <Menu.Item as="a">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="gamepad" />
            Games
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="camera" />
            Channels
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher className="header">
          <Segment className="bars">
            <Button onClick={clickHandle}>
              <Icon name="bars" />
            </Button>
          </Segment>
          <Segment basic className="title">
            <Header as="h3"> Application Content</Header>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
};

export default PageHeader;
