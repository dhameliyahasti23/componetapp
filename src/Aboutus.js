
import { Container,Col,Row,FaPlayCircle,ProgressBar,CardGroup,Card} from "react-bootstrap";
function Aboutus() {
    return (
      <>
        <Container>
  <Row>
<CardGroup>
  <Col className="col-lg-4 col-md-6">
      <Card className="main_back border-0">
        <Card.Body className="main_1">
        <div className="sit_i1"> <img src={require('./img/i16.jpg')} style={{width:"100%"}}></img> 
    </div>     

        <h1 className="back_title">Creative Marketing Agency</h1>
        <p className="back_p">Our Awesome</p>
          <Card.Text className="back_text">
          Lorem ipsum dolor sit amet, ca adipisicing elit, sed do eiusmod tempor incididunt utn labore .
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>

      
      <Col className="col-lg-4 col-md-6">
      <Card className="main_back border-0">
        <Card.Body className="main_1">
        <div className="sit_i1"><img src={require('./img/i17.jpg')} style={{width:"100%"}}></img>    </div> 
        <h1 className="back_title">Professional Business Plan</h1>
        <p className="back_p">We are best</p>
              <Card.Text className="back_text">
              Lorem ipsum dolor sit amet, ca adipisicing elit, sed do eiusmod tempor incididunt utn labore.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>

      <Col className="col-lg-4 col-md-6">
      <Card className="main_back border-0 ">
        <Card.Body className="main_1">
        <div className="sit_i1"><img src={require('./img/i18.jpg')} style={{width:"100%"}}></img>     </div> 
        <h1 className="back_title">Online Consultancy</h1>
        <p className="back_p">Same of</p>
              <Card.Text className="back_text">
              Lorem ipsum dolor sit amet, ca adipisicing elit, sed do eiusmod tempor incididunt utn labore.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
    </CardGroup>
    </Row>
    </Container>

        
      </>
      );
  }
  
  export default Aboutus;
  