import img from './../../assets/css/bread.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import price from './../../../assets/images/price.png'
import cv from './../../../assets/images/cv.png'

import Button from 'react-bootstrap/Button';

import CircleColor from './../../Shared/ColorCircle'
const colors = [
    { color: 'rgb(7, 239, 88)' },
    { color: '#555' },
    { color: 'rgb(239, 208, 7)' },
    { color: 'rgb(239, 84, 7)' },
    { color: 'rgb(239, 7, 223)' },
]

const Price: React.FC = () => {
    return (

        <Container className='price-cv-container'>
            <Col>
                <CircleColor colors={colors} sectionTitle={`Easy Price!!!`} sectionSubTitle={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.`} />
            </Col>

            <Row className="justify-content-md-center price-container-body">
                <Col md={{ span: 5 }}>
                    <Row className="our-price-div">
                        <h3>Our Pricing</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.</p>
                        <Button variant="outline-primary">Request a Demo</Button>
                    </Row>
                </Col>
                <Col md={{ span: 6, offset: 1 }} className='p-0'>
                    <Row>
                        <Col >

                            <Card className="monthly price-card custom-cv-card p-0">
                                <Card.Body>
                                    <Row>
                                        <Col md={{ offset: 6 }} className='price-number'>
                                            <h1>$9.9</h1>
                                            <p>per month</p>
                                        </Col>

                                        <div className='monthly-pack-details'>
                                            <h3>Monthly Pack</h3>
                                            <p className='p-0 m-0'>You will be billed per month, and get unlimited access to all resume Templates and new added ones</p>
                                            <Button variant="outline-primary">Request a Demo</Button>
                                        </div>


                                    </Row>


                                </Card.Body>
                            </Card>

                        </Col>
                        <Col>

                            <Card className="yearly price-card custom-cv-card p-0">
                                <Card.Body>
                                    <Row>
                                        <Col md={{ offset: 6 }} className='price-number'>
                                            <h1>$9.9</h1>
                                            <p>per month</p>
                                        </Col>

                                        <div className='monthly-pack-details'>
                                            <h3>Monthly Pack</h3>
                                            <p className='p-0 m-0'>You will be billed per month, and get unlimited access to all resume Templates and new added ones</p>
                                            <Button variant="outline-primary">Request a Demo</Button>
                                        </div>


                                    </Row>


                                </Card.Body>
                            </Card>


                        </Col>
                    </Row>
                </Col>


            </Row >
        </Container >


    )
}

export default Price;