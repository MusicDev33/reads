import { useState } from 'react';
import { BookCard } from 'components/BookCard/BookCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Books = (props) => {
  const [books, setBooks] = useState([
    {
      _id: "62561bfb472e617a4f7cfda4",
      pages: 736,
      title: "The Dawn of Everything",
      author: "David Graeber",
      finished: false,
      __v: 0
    },
    {
      _id: "62561bfb472e617a4f7cfda5",
      pages: 408,
      title: "Envisioning Real Utopias",
      author: "Erik Olin Wright",
      finished: false,
      __v: 0
    },
    {
      _id: "62561bfb472e617a4f7cfda6",
      pages: 250,
      title: "Guns, Germs, and Steel",
      author: "Jared Diamond",
      finished: true,
      __v: 0
    },
    {
      _id: "62561bfb472e617a4f7cfda7",
      pages: 500,
      title: "Sapiens",
      author: "Yuval Noah Harrari",
      finished: true,
      __v: 0
    }
  ]);



  return (
    <div>
      <Container>
        <Row className="pt-3">
          {books.map(book => (
            <Col sm={4} className="py-2">
              <BookCard book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
