import { useState, useEffect } from 'react';

import './AddBookCard.scss';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import { IconContext } from 'react-icons';
import { FaRegCheckCircle, FaCheckCircle } from 'react-icons/fa';

export const AddBookCard = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');
  const [isRead, setIsRead] = useState(false);
  const [checkIcon, setCheckIcon] = useState(isRead ? <FaCheckCircle /> : <FaRegCheckCircle />);

  useEffect(() => {
    setCheckIcon(isRead ? <FaCheckCircle /> : <FaRegCheckCircle />);
  }, [isRead]);

  return (

    <div className="add-book-card">
      <Container className="py-1 px-3">
        <Row>
          <Col>
            <FormControl placeholder="Title" className="card-input" value={title} onChange={e => setTitle(e.target.value)} />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormControl placeholder="Author" className="card-input" value={author} onChange={e => setAuthor(e.target.value)} />
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <FormControl inputMode="numeric" placeholder="Pages" className="card-input" value={pages} onChange={e => setPages(e.target.value)} />
          </Col>
          <Col className="pt-1">
            <IconContext.Provider value={{ className: `check ${isRead && 'selected'}` }}>
              <div onClick={() => {
                setIsRead(isRead => !isRead);
              }}>
                {checkIcon}
              </div>
            </IconContext.Provider>
          </Col>
          <Col className="text-end pt-2">
            <Button className="md-btn-1">Submit</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
