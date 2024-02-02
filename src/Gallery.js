import React from 'react'
import Header from './Header'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container,Row,Col,CardGroup,Card} from "react-bootstrap";
import Button from 'react-bootstrap/Button';


import { GoChevronRight } from "react-icons/go";
import Footer from './Footer';


const Option={
  responsive:{
      0:{
          items:1,
          dots:false,
          autoplay:true,
          autoplayTimeout:1000,
      },
      600:{
          items:2,
          dots:false,
          autoplay:true,
          autoplayTimeout:1000,
      },
      1000:{
          items:5,
          dots:false,
          autoplay:true,
          autoplayTimeout:1000,
      }
  }
}

function Gallary() {
    return (
        <>
        <Header></Header>
        <div className="about">
        <div className="img-item justify-content-center text-center">Gallery
<div className="sub-name">You Here! <GoChevronRight></GoChevronRight> Home <GoChevronRight></GoChevronRight> Gallery</div>
        </div>
       </div>
   {/* ------------------------------- */}
   <section>
        <Container>
        <div class="sec_title text-center m-5">
      <p class="h1 text-center main_title">Our Best Gallery</p>
      <Button variant="outline-info m-4 border-black text-black">All Work</Button>{' '}       
      <Button variant="outline-info m-4 border-black text-black">Branding</Button>{' '}
      <Button variant="outline-info m-4 border-black text-black">PhotoShop</Button>{' '}
      <Button variant="outline-info m-4 border-black text-black">Web Design</Button>{' '}
      <Button variant="outline-info m-4 border-black text-black">Word Press</Button>{' '}
      
    </div>
        </Container>
    </section>
{/* -------------------------------------------------------- */}
<Container>
  <Row>
<CardGroup>
  <Col className="col-lg-4 col-md-6">
      <Card className="img_back border-0">
        <Card.Body className="img_1">
        <div className="zoom_img"> 
        <img src={require('./img/i25.jpg')} style={{width:"100%"}}></img> </div>     
        </Card.Body>
      </Card>
      </Col>

      <Col className="col-lg-4 col-md-6">
      <Card className="img_back border-0">
        <Card.Body className="img_1">
        <div className="zoom_img">
        <img src={require('./img/i26.jpg')} style={{width:"100%"}}></img> </div> 
        </Card.Body>
      </Card>
      </Col>

      <Col className="col-lg-4 col-md-6">
      <Card className="img_back border-0 ">
        <Card.Body className="img_1">
        <div className="zoom_img">
        <img src={require('./img/i27.jpg')} style={{width:"100%"}}></img> </div> 
        </Card.Body>
      </Card>
      </Col>

      <Col className="col-lg-4 col-md-6">
      <Card className="img_back border-0 ">
        <Card.Body className="img_1">
        <div className="zoom_img">
        <img src={require('./img/i28.jpg')} style={{width:"100%"}}></img> </div> 
        </Card.Body>
      </Card>
      </Col>

      <Col className="col-lg-4 col-md-6">
      <Card className="img_back border-0 ">
        <Card.Body className="img_1">
        <div className="zoom_img">
        <img src={require('./img/i29.jpg')} style={{width:"100%"}}></img> </div> 
        </Card.Body>
      </Card>
      </Col>

      <Col className="col-lg-4 col-md-6">
      <Card className="img_back border-0 ">
        <Card.Body className="img_1">
        <div className="zoom_img">
        <img src={require('./img/i30.jpg')} style={{width:"100%"}}></img> </div> 
        </Card.Body>
      </Card>
      </Col>

    </CardGroup>
    </Row>
    </Container>
    {/* ------------------------------------ */}
    <div className="slider3 m-1">
    <Container>
    <OwlCarousel className='owl-theme' {...Option} loop margin={10} nav>
    <div class='item'>
    <img src={require('./img/i9.png')}  style={{width:"50%"}} ></img> 
    </div>
    <div class='item'>
    <img src={require('./img/i11.png')}  style={{width:"50%"}} ></img> 
    </div>
    <div class='item'>
    <img src={require('./img/i12.png')}  style={{width:"50%"}} ></img> 
    </div>
    <div class='item'>
    <img src={require('./img/i13.png')}  style={{width:"50%"}} ></img> 
    </div>
    <div class='item'>
    <img src={require('./img/i11.png')}  style={{width:"50%"}} ></img> 
    </div>
</OwlCarousel>
    </Container>
</div>




    <Footer></Footer>
        </>
    )
}

export default Gallary