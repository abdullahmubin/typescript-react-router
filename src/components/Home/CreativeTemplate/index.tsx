import img from './../../assets/css/bread.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import price from './../../../assets/images/price.png'
import demo from './../../../assets/images/demo-1.png'

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

const CreativeTemplate: React.FC = () => {
    return (
        <Container className='creative-template-section'>

            <Col>
                <CircleColor colors={colors} sectionTitle={`Our Creative Templates`} sectionSubTitle={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.`} />
            </Col>

            <Row className='demo-template'>
                <Col>
                    <Row>

                        <img src={demo} />
                        <div className='demo-template-btn'>
                            <Button variant="outline-primary">Request a Demo</Button>
                        </div>
                    </Row>
                </Col>
                <Col>
                    <Row>

                        <img src={demo} />
                        <div className='demo-template-btn'>
                            <Button variant="outline-primary">Request a Demo</Button>
                        </div>
                    </Row>
                </Col>
                <Col>
                    <Row>

                        <img src={demo} />
                        <div className='demo-template-btn'>
                            <Button variant="outline-primary">Request a Demo</Button>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>



    )
}

export default CreativeTemplate;