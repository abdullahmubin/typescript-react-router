import img from './../../assets/css/bread.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import d1 from './../../../assets/images/d1.png';
import d2 from './../../../assets/images/d2.png';
import d3 from './../../../assets/images/d3.png';


export default function ChoosePlatform() {
    return (

        <Container className='choose-platform-body' fluid>
            <Container>
                <Row className="justify-content-md-center">
                   
                    <Col md={6}>
                        <Row>
                            <Card className="choose-card">
                                <Card.Body>
                                    <img src={d1} className="card-img" />
                                    <div className='card-img-details'>
                                        <h4 className='card-img-details-heading'>Step By Step Expert Tips</h4>
                                        <p className='card-img-details-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit skaj gjska consectetur adipisicing elit.</p>
                                
                                    </div>
                                    </Card.Body>
                            </Card>
                            <Card className="choose-card">
                                <Card.Body>
                                    <img src={d2} className="card-img" />
                                    <div className='card-img-details'>
                                        <h4 className='card-img-details-heading'>Step By Step Expert Tips</h4>
                                        <p className='card-img-details-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit skaj gjska consectetur adipisicing elit.</p>
                                
                                    </div>
                                    </Card.Body>
                            </Card>
                            <Card className="choose-card">
                                <Card.Body>
                                    <img src={d3} className="card-img" />
                                    <div className='card-img-details'>
                                        <h4 className='card-img-details-heading'>Step By Step Expert Tips</h4>
                                        <p className='card-img-details-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit skaj gjska consectetur adipisicing elit.</p>
                                
                                    </div>
                                    </Card.Body>
                            </Card>
                            
                        </Row>


                    </Col>
                    

                    <Col md={{ span: 6 }}>
                    <Row>
                    <Card className="choose-card-no-sadow">
                                <Card.Body>
                                    <div className='card-no-img-details'>
                                        <h3 className='card-no-img-details-heading'>Why Choose Our Platform?</h3>
                                        <p className='card-no-img-details-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magni, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. Fugit!</p>
                                
                                    </div>
                                    </Card.Body>
                            </Card>
                    </Row>
                    </Col>
                    
                </Row>
            </Container>
        </Container>


    )
}