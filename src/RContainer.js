import { Component } from 'react';
import { RNavbar } from 'components/RNavbar/RNavbar';
import Container from 'react-bootstrap/Container';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

export class RContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Container fluid className=" px-4">
          <RNavbar />
        </Container>
    );
  }
}
