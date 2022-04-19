import { useState } from 'react';

import './BookCard.scss';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';

export const BookCard = ({book}) => {

  return (
    <div className="book-card">
      <Container className="py-1 px-3">
        <Row>
          <Col>
            <div className="title">{book.title}</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="author">{book.author}</div>
          </Col>
        </Row>
        <Row className="pb-0 pt-2">
          <Col>
            <ProgressBar now={60} className="progress" label={`${60}%`} />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="pages text-center">???/{book.pages} pages</div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
