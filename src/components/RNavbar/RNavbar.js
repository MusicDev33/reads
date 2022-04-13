import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { IconContext } from 'react-icons';
import { FaBook } from 'react-icons/fa';

import './RNavbar.scss';

export class RNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <Container className="rnavbar py-3 px-0 text-center my-auto">
        <IconContext.Provider value={{ className: 'navbar-icon' }}>
          <FaBook />
        </IconContext.Provider>
      </Container>
    );
  }
}
