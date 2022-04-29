import { Component } from 'react';
import RNavbar from 'components/RNavbar/RNavbar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Books } from 'pages/books/Books';
import { InfoView } from 'components/InfoView/InfoView';

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

            <Col sm={8} className="py-3 px-0">
              <div className="page-container">
                <Routes>
                  <Route path="/books" exact element={<Books />} />
                </Routes>
              </div>
            </Col>

            <Col className="py-3 px-4">
              <div className="page-container me-2">
                <InfoView type="book" data={{author: "David Graeber",
                                              finished: false,
                                              pages: 736,
                                              title: "The Dawn of Everything",
                                              __v: 0,
                                              _id: "62561bfb472e617a4f7cfda4"}} 
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}
