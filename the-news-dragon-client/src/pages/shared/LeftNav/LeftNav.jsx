// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import first from '../../../assets/1.png';
import second from '../../../assets/2.png';
import third from '../../../assets/3.png';

const LeftNav = () => {
    const [catagories,setCatagories] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/catagories')
        .then(res=>res.json())
        .then(data => setCatagories(data))
        .catch(error => console.log(error));
        }
    )
    return (
        <div>
            <h4>All Category</h4>
            <div className='ps-4'>
            {
                catagories.map(catagory =><p
                key={catagory.id}
                >
             <Link to={`/catagory/${catagory.id}`} className='text-decoration-none text-black'>{catagory.name} </Link>
                </p>)
            }
            </div>
            <div>
            <Row xs={1} md={2} lg={1} className="g-4 mt-4">
          <Col>
            <Card>
              <Card.Img variant="top" src={first} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={second} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={third} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
      </Row>
            </div>
           
        </div>
    );
};

export default LeftNav;