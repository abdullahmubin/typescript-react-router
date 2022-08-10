import img from './../../assets/css/bread.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import price from './../../../assets/images/price.png'
import cv from './../../../assets/images/cv.png'

import Button from 'react-bootstrap/Button';


export default function Price() {
    return (

        <Container className='price-cv-container'>
            <Row className="justify-content-md-center price-container-body">
                <Col>
                    <Row className="our-price-div">
                        <h3>Our Pricing</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.</p>
                        <Button variant="outline-primary">Request a Demo</Button>
                    </Row>
                </Col>
                <Col>
                    <Card className="monthly price-card">
                        <Card.Body>
                            <Row>
                                <Col md={{ span: 4, offset: 8 }} className='price-number'>
                                    <h1>$99.9/monthly</h1>
                                </Col>

                                <div>
                                    <h3>Monthly Pack</h3>
                                    <p className='p-0 m-0'>You will be billed per month, and get unlimited access to all resume Templates and new added ones</p>
                                    <Button variant="outline-primary">Request a Demo</Button>
                                </div>


                            </Row>


                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="yearly price-card">
                        <Card.Body>
                            <Row>
                                Last Test
                            </Row>


                        </Card.Body>
                    </Card>
                </Col>
            </Row >
        </Container >


    )
}