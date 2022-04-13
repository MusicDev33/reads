import { Component } from 'react';
import { RNavbar } from 'components/RNavbar/RNavbar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  BrowserRouter as Router,
  Routes,
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
      <Router>
        <Container fluid className="app-container px-0">
          <Row className="px-0 h-100">
            <Col sm={1} className="ps-4 pe-3 py-5 text-center">
              <RNavbar />
            </Col>

            <Col sm={8} className="py-2 px-0">
              <div className="page-container">
                <Routes>

                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}
