import { useState, useEffect } from 'react';

import { getReadByBookId, createRead, setReadPagesById } from 'services/read.service';

import './BookCard.scss';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';

export const BookCard = ({book}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [read, setRead] = useState();
  const [currentPageChanged, setCurrentPageChanged] = useState(false);

  const getRead = async () => {
    const readData = await getReadByBookId(book._id);
    console.log(readData);
    if (readData.success) {
      setRead(readData.data);
      setCurrentPage(readData.data.currentPage);
    }
  }

  const setReadPages = async (currentPage) => {
    if (!read) {
      const res = await createRead(book._id, currentPage);
      console.log(res);
    } else {
      const res = await setReadPagesById(book._id, currentPage);
      console.log(res);
    }
  }

  const getPercentage = (currentPage) => {
    const percent = (currentPage / book.pages) * 100;
    return currentPage ? percent : 0;
  }

  useEffect(() => {
    getRead();
  }, []);

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
            <ProgressBar now={getPercentage(currentPage)} className="progress" />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <div className="pages text-center">
              <input className="pages-input" 
                value={currentPage} 
                onChange={e => {
                  setCurrentPage(e.target.value);
                  setCurrentPageChanged(true);
                }}
                onBlur={() => {
                  console.log('blur');
                  if (currentPageChanged) {
                    setReadPages(currentPage);
                    setCurrentPageChanged(false);
                  }
                }}
              /> /{book.pages} pages
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
