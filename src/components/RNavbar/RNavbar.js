import React from 'react';

import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { IconContext } from 'react-icons';
import { FaBook, FaUserAlt, FaBookmark } from 'react-icons/fa';

import './RNavbar.scss';

const RNavbar = () => {
  const rowClass = '';

  return (
    <Container className="rnavbar py-5 px-0 text-center my-auto">
      <Row className={rowClass}>
        <NavLink to="/books" className={navData => 'r-nav-link ' + (navData.isActive ? 'selected' : '')}>
          <IconContext.Provider value={{ className: 'navbar-icon' }}>
            <FaBook />
          </IconContext.Provider>
        </NavLink>
      </Row>

      <Row className={rowClass}>
        <NavLink to="/read"  className={navData => 'r-nav-link ' + (navData.isActive ? 'selected' : '')}>
          <IconContext.Provider value={{ className: 'navbar-icon' }}>
            <FaBookmark />
          </IconContext.Provider>
        </NavLink>
      </Row>

      <Row className={rowClass}>
        <NavLink  to="/user" className={navData => 'r-nav-link ' + (navData.isActive ? 'selected' : '')}>
          <IconContext.Provider value={{ className: 'navbar-icon' }}>
            <FaUserAlt />
          </IconContext.Provider>
        </NavLink>
      </Row>
    </Container>
  )
}

export default RNavbar;
