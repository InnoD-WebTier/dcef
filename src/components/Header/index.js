import React from 'react'
import Link from 'gatsby-link'

import Button from 'react-bootstrap/lib/Button'
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';

const links = [
  {
    name: "About Us",
    link: "",
  },
  {
    name: "About Us",
    link: "",
  },
  {
    name: "Awards",
    link: "",
  },
  {
    name: "News and Events",
    link: "",
  },
  {
    name: "Membership",
    link: "",
  },
  {
    name: "Stay Connected",
    link: "",
  },
  {
    name: "Merchandise",
    link: "",
  },
]

const Header = () => (
  <div>
    <Navbar fixedTop className="dnav">
      <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">DCEF</Link>
          </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          {links.map(item =>
            <NavItem href="#">
              <div className="dnav__item">{item.name}</div>
            </NavItem>
          )}
          <NavItem eventKey={7} href="#">
            <Button className="dnav__button">Donate</Button>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

export default Header
