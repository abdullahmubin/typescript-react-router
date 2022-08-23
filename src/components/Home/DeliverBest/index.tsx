import img from './../../assets/css/bread.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import check from './../../../assets/images/check.png'
import cv from './../../../assets/images/cv.png'


const DeliverBest: React.FC = () => {
    return (

        <Container className='deliver-best-container'>
            <Row className="justify-content-md-center deliver-best-container-body">
                <Col>
                    <Row className="deliver-best-left">
                        <h3>We Deliver The Best</h3>
                        <ul>
                            <li>
                                <img src={check} />
                                <p>Proven CV Templates to increase Hiring Chance.</p>
                            </li>
                            <li>
                                <img src={check} />
                                <p>Creative and Clean Templates Design.</p>
                            </li>
                            <li>
                                <img src={check} />
                                <p>Easy and Intuitive Online CV Builder.</p>
                            </li>
                            <li>
                                <img src={check} />
                                <p>Free to use. Developed by hiring professionals.</p>
                            </li>
                            <li>
                                <img src={check} />
                                <p>Fast Easy CV and Resume Formatting.</p>
                            </li>
                            <li>
                                <img src={check} />
                                <p>Recruiter Approved Phrases.</p>
                            </li>
                            <li>
                                <img src={check} />
                                <p>Free to use. Developed by hiring professionals.</p>
                            </li>
                        </ul>
                    </Row>
                </Col>
                <Col>
                    <img src={cv} />
                </Col>
            </Row>
        </Container>


    )
}

export default DeliverBest;