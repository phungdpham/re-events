import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenu from "../Menu/SignedOutMenu";
import SignedInMenu from "../Menu/SignedInMenu";

class NavBar extends Component {
  state = {
    authenticated: false
  };

  handleSignIn = () => {
    this.setState({ authenticated: true });
  };

  handleSignOut = () => {
    this.setState({ authenticated: false });
    this.props.history.push('/')
  };

  render() {
    const { authenticated } = this.state;
    return (
      <Menu inverted>
        <Container>
          <Menu.Item as={NavLink} exact to="/" header>
            <img src="/assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          <Menu.Item as={NavLink} to="/people" name="People" />
          <Menu.Item>
            <Button
              as={Link}
              to="/createEvent"
              floated="right"
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item>
          {authenticated ? (
            <SignedOutMenu signOut={this.handleSignOut} />
          ) : (
            <SignedInMenu signIn={this.handleSignIn} />
          )}
          >
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
