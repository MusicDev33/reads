import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { IconContext } from 'react-icons';
import { FaBook, FaUserAlt, FaBookmark } from 'react-icons/fa';

import './RNavbar.scss';

export class RNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    const rowClass = '';

    return (
      <Container className="rnavbar py-4 px-0 text-center my-auto">
        <Row className={rowClass}>
          <IconContext.Provider value={{ className: 'navbar-icon selected' }}>
            <FaBook />
          </IconContext.Provider>
        </Row>

        <Row className={rowClass}>
          <IconContext.Provider value={{ className: 'navbar-icon' }}>
            <FaBookmark />
          </IconContext.Provider>
        </Row>

        <Row className={rowClass}>
          <IconContext.Provider value={{ className: 'navbar-icon' }}>
            <FaUserAlt />
          </IconContext.Provider>
        </Row>
      </Container>
    );
  }
}
