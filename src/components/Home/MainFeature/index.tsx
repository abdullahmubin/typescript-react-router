import img from './../../assets/css/bread.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import d1 from './../../../assets/images/d1.png'
import d2 from './../../../assets/images/d2.png'

import d3 from './../../../assets/images/d3.png'
import f1 from './../../../assets/images/f1.png'

import f5 from './../../../assets/images/f5.png'
import f6 from './../../../assets/images/f6.png'

import Button from 'react-bootstrap/Button';
// demo-1.png

import CircleColor from './../../Shared/ColorCircle'
const colors = [
    { color: 'rgb(7, 239, 88)' },
    { color: '#555' },
    { color: 'rgb(239, 208, 7)' },
    { color: 'rgb(239, 84, 7)' },
    { color: 'rgb(239, 7, 223)' },
]


const MainFeature: React.FC = () => {
    return (

        <Container className='our-main-feature'>
            <Col>
                <CircleColor colors={colors} sectionTitle={`Our main feature`} sectionSubTitle={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.`} />
            </Col>

            <Row>
                
                {/* custom-cv-card */}
                <Col>
                    <Row>
                        <Col>
                            <Row>
                                <Card className="mainfeature-card main-feature-item">
                                    <Card.Body>
                                        <Row>

                                            <div className='main-feature-item-details'>
                                                <img src={d1} />
                                                <h3>Monthly Pack</h3>
                                                <p className='p-0 m-0'>You will be billed per month, and get unlimited access to all resume Templates and new added ones</p>
                                                {/* <Button variant="outline-primary">Request a Demo</Button> */}
                                            </div>


                                        </Row>


                                    </Card.Body>
                                </Card>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Card className="mainfeature-card main-feature-item">
                                    <Card.Body>
                                        <Row>
                                            <div className='main-feature-item-details'>
                                            <img src={f1} />
                                                <h3>Monthly Pack</h3>
                                                <p className='p-0 m-0'>You will be billed per month, and get unlimited access to all resume Templates and new added ones</p>
                                                {/* <Button variant="outline-primary">Request a Demo</Button> */}
                                            </div>


                                        </Row>


                                    </Card.Body>
                                </Card>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Card className="mainfeature-card main-feature-item">
                                    <Card.Body>
                                        <Row>
                                            <div className='main-feature-item-details'>
                                            <img src={d3} />
                                                <h3>Monthly Pack</h3>
                                                <p className='p-0 m-0'>You will be billed per month, and get unlimited access to all resume Templates and new added ones</p>
                                                {/* <Button variant="outline-primary">Request a Demo</Button> */}
                                            </div>


                                        </Row>


                                    </Card.Body>
                                </Card>
                            </Row>
                        </Col>

                        <Col>
                            <Row>
                                <Card className="mainfeature-card main-feature-item">
                                    <Card.Body>
                                        <Row>

                                            <div className='main-feature-item-details'>
                                                <img src={d1} />
                                                <h3>Monthly Pack</h3>
                                                <p className='p-0 m-0'>You will be billed per month, and get unlimited access to all resume Templates and new added ones</p>
                                                {/* <Button variant="outline-primary">Request a Demo</Button> */}
                                            </div>


                                        </Row>


                                    </Card.Body>
                                </Card>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Card className="mainfeature-card main-feature-item">
                                    <Card.Body>
                                        <Row>
                                            <div className='main-feature-item-details'>
                                            <img src={f1} />
                                                <h3>Monthly Pack</h3>
                                                <p className='p-0 m-0'>You will be billed per month, and get unlimited access to all resume Templates and new added ones</p>
                                                {/* <Button variant="outline-primary">Request a Demo</Button> */}
                                            </div>


                                        </Row>


                                    </Card.Body>
                                </Card>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Card className="mainfeature-card main-feature-item">
                                    <Card.Body>
                                        <Row>
                                            <div className='main-feature-item-details'>
                                            <img src={d3} />
                                                <h3>Monthly Pack</h3>
                                                <p className='p-0 m-0'>You will be billed per month, and get unlimited access to all resume Templates and new added ones</p>
                                                {/* <Button variant="outline-primary">Request a Demo</Button> */}
                                            </div>


                                        </Row>


                                    </Card.Body>
                                </Card>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>

    )
}

export default MainFeature;