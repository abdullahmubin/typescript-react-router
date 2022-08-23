import img from './../../assets/css/bread.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import custom from './../../../assets/images/custom.png'
import cv from './../../../assets/images/cv.png'

import Button from 'react-bootstrap/Button';


const CustomCVCard: React.FC = () => {
    return (

        <Container className='custom-cv-container'>
            <Row className="justify-content-md-center custom-cv-container-body">
                <Col>
                    <Row className="deliver-best-left">
                        <Card className="custom-cv-card">
                            <Card.Body>
                                <Row>
                                    <Col md={3}>

                                        <img src={custom} />
                                        {/* Do you Need a Complete Custom CV Template? */}


                                    </Col>
                                    <Col md={6}>
                                        <h3>
                                            Do you Need a Complete Custom CV Template?
                                        </h3>
                                    </Col>
                                    <Col md={3}>

                                        <div className='request-a-demo-btn'>
                                            <Button variant="outline-primary">Request a Demo</Button>
                                        </div>

                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>
            </Row >
        </Container >


    )
}

export default CustomCVCard;