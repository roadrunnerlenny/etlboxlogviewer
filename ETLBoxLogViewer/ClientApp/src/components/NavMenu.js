import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
    return (
      <Navbar  fixedTop fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>ETLBox Log Viewer</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={'/overview'} exact>
              <NavItem>
                <Glyphicon glyph='sunglasses' /> Overview
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/log'}>
              <NavItem>
                <Glyphicon glyph='link' /> Log
              </NavItem>
            </LinkContainer>            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
