import img from './../../assets/css/bread.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import price from './../../../assets/images/price.png'
import im3 from './../../../assets/images/3.jpg'

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


const YourSuccess: React.FC = () => {


    return (
        <Container className='your-success-container'>
            <Col>
                <CircleColor colors={colors} sectionTitle={`Your success, our inspiration`} sectionSubTitle={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.`} />
            </Col>

            <Row>

                <Col md={4} className='success-client-details'>
                    <img src={im3} />

                    <p className=''>You will be billed per month, and get unlimited access to all resume Templates and new added ones</p>
                    {/* <Button variant="outline-primary">Request a Demo</Button> */}
                    <h3>Jon doe</h3>
                    <p>One of our client</p>


                </Col>
                <Col md={4} className='success-client-details'>

                    <img src={im3} />
                    <p className=''>You will be billed per month, and get unlimited access to all resume Templates and new added ones</p>
                    {/* <Button variant="outline-primary">Request a Demo</Button> */}
                    <h3>Jon doe</h3>
                    <p>One of our client</p>


                </Col>
                <Col md={4} className='success-client-details'>

                    <img src={im3} />
                    <p className=''>You will be billed per month, and get unlimited access to all resume Templates and new added ones</p>
                    {/* <Button variant="outline-primary">Request a Demo</Button> */}
                    <h3>Jon doe</h3>
                    <p>One of our client</p>


                </Col>
            </Row>
        </Container>
    )

}

export default YourSuccess;