import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './BookView.scss';

export const BookView = ({data}) => {
  return (
    <div className="book-view">
      <Row>
        <Col>
          <div className="title">{data.title}</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="author">{data.author}</div>
        </Col>
      </Row>
    </div>
  );
}
