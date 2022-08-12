import img from './../../assets/css/bread.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import price from './../../../assets/images/price.png'
import demo from './../../../assets/images/demo-1.png'

import Button from 'react-bootstrap/Button';
// demo-1.png

export default function MainFeature() {
    return (

        <Container className='our-main-feature'>
            <Row>
                <Col className='our-main-feature-title'>
                    <Row>
                        <h2>Our main feature</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.</p>
                    </Row>
                </Col>
            </Row>
        
        </Container>

    )
}