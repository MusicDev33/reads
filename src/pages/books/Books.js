import { useState, useEffect } from 'react';

import { getLatestBooks } from 'services/book.service';

import { BookCard } from 'components/BookCard/BookCard';
import { AddBookCard } from 'components/AddBookCard/AddBookCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLatestBooks(30);
      console.log(data);
      setBooks(data.data);
    }

    fetchData();
  }, []);


  return (
    <div>
      <Container>
        <Row className="pt-3">
          {books.map(book => (
            <Col sm={4} className="py-2" key={book.title}>
              <BookCard book={book} />
            </Col>
          ))}

          <Col sm={4} className="py-2">
            <AddBookCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
