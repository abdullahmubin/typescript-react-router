import img from './../../assets/css/bread.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import price from './../../../assets/images/price.png'
import im3 from './../../../assets/images/3.jpg'

import Button from 'react-bootstrap/Button';
// demo-1.png

export default function Footer() {


    return (
        <Container fluid className='footer-container'>
         
                <Row>
                    <Col className='company-details-footer'>
                        <h4>CV Builder</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ducimus voluptatibus neque illo id repellat quisquam? Autem expedita earum quae laborum ipsum ad.
                        </p>
                    </Col>
                    <Col className='tips-footer'>
                        <h4>Contact us</h4>
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                        </ul>
                    </Col>

                    <Col className='contact-us-footer'>
                        <h4>Contact us</h4>
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                        </ul>
                    </Col>
                </Row>
        
        </Container>
    )

}