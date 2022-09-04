import React, { Component, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownItem,
  // DropdownToggle,
  // DropdownMenu,
  //NavbarText,
  // Container,
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import RegisterModal from "./RegisterModal";
import Logout from "./Logout";

class AppNavbar extends Component {
  state = {
    isOpen: false,
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <Fragment>
        <NavItem>
          <Logout />
        </NavItem>
      </Fragment>
    );
    const guestLinks = (
      <Fragment>
        <NavItem>
          <NavLink href="/login">Login</NavLink>
        </NavItem>
        <NavItem>
          <RegisterModal />
        </NavItem>
      </Fragment>
    );

    return (
      <div className="row">
        <Navbar className="navbar" expand="sm" fixed="top" light>
          <NavbarBrand href="/">Bottlr</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() { }} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink className="feed" href="/feed">Feed</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/TheIvanHu/bottlr">
                  GitHub
                </NavLink>
              </NavItem>
              {isAuthenticated ? authLinks : guestLinks}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(AppNavbar);
