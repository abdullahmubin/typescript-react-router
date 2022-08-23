import img from './../../assets/css/bread.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Slider: React.FC = () => {
    return (

        <Container>
            <Row className="justify-content-md-center slider-im">
                <h2 className='slider-box-title'>Build your CV</h2>
            </Row>
        </Container>


    )
}

export default Slider;