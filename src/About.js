import { Container,Col,Row,FaPlayCircle,ProgressBar,Accordion,CardGroup,Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { FaCirclePlay } from "react-icons/fa6";
import { GoChevronRight } from "react-icons/go";
import { SlHome } from "react-icons/sl";
import { FaChartPie } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";
import Aboutus from "./Aboutus";
import Header from "./Header";
import Footer from "./Footer";
import Slider from "./Slider";

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





function About() {
    return (
      <>
       <Header></Header>
       
       <div className="about">
        <div className="img-item justify-content-center text-center">About
<div className="sub-name">You Here! <GoChevronRight></GoChevronRight> Home <GoChevronRight></GoChevronRight> Gallery</div>
        </div>
       </div>
  {/* ----------------------------------------------- */}
  <div className="bgsky1">
      <Container>
        <Row>
          <Col className="abo_info m-4" lg={6} md={6} sm={12} >
          <img src={require('./img/i4.jpg')} style={{width:"90%"}}></img> 
          </Col>
          <Col>
        <div className="ser_part2">
          <h1>Why We Are Different?</h1>
        <div>
            
          </div>

            <h1 className="abo_dark"><a className="ser_icon"><SlHome ></SlHome></a>Our Company History</h1>
            <h1 className="pro_des1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply.</h1>

             <h1 className="abo_dark"><a className="ser_icon"><IoBarChartSharp></IoBarChartSharp></a>Our Success Mission</h1>
            <h1 className="pro_des1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply.</h1>

            <h1 className="abo_dark"><a className="ser_icon"><FaChartPie></FaChartPie></a>Our Future Plan</h1>
            <h1 className="pro_des1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply. </h1>
            <ProgressBar variant="info" now={90} />
             <h6>Support</h6>
             </div>
          </Col>
        </Row>
      </Container>
    </div>
    {/* ------------------------------------------------- */}
   <Aboutus></Aboutus>
   {/* --------------------------------------------- */}
   <section className="bg-black p-5">
    <Container>
  <Row>
    <Col className="col-lg-3 col-md-6 p-5 "sm={12}>
           <div className="count_icon">
              <img src={require ('./img/i20.png')}></img>
              <p className="count_text">Happy Customers</p>
              <p className="count">130+</p>
            </div>
            </Col>

    <Col className="col-lg-3 col-md-6 p-5 "sm={12}>
            <div className="count_icon">
              <img src={require ('./img/i21.png')}></img>
              <p className="count_text">Employer Solutions</p>
              <p className="count">60+</p>
            </div>
            </Col>

    <Col className="col-lg-3 col-md-6 p-5 "sm={12}>
            <div className="count_icon">
              <img src={require ('./img/i22.png')}></img>
              <p className="count_text">Online Support</p>
              <p className="count">30+</p>
            </div>
            </Col>

    <Col className="col-lg-3 col-md-6 p-5 "sm={12}>
            <div className="count_icon">
              <img src={require ('./img/i23.png')}></img>
              <p className="count_text">Project Completed</p>
              <p className="count">33+</p>
            </div>  
            </Col>
    </Row>
    </Container>
  </section>
     {/* ----------------------------------------------- */}
     <section>
        <Container>
        <div class="sec_title m-5">
      <p class="h1 text-center main_title">Frequently Asked Questions</p>
      <p class="fs-5 text-muted  text-center mx-auto sub_title">Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
        </Container>
    </section>
    {/* ---------------------------------------------------- */}
    <Container>
      <Row>
      <Col className="abo_info m-3" lg={6} md={6} sm={12} >
          <img src={require('./img/i8.jpg')} style={{width:"90%"}}></img> 
          </Col>
          <Col>
          <div className="accordion1 m-3">
      <Accordion defaultActiveKey="2">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Do You Need A Business Service?</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ad minim veniam, quis nostrud exercitation.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ad minim veniam, quis nostrud exercitation.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ad minim veniam, quis nostrud exercitation.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ad minim veniam, quis nostrud exercitation.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ad minim veniam, quis nostrud exercitation.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ad minim veniam, quis nostrud exercitation.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ad minim veniam, quis nostrud exercitation.
        </Accordion.Body>
      </Accordion.Item> 
    </Accordion>
    </div>
    </Col>
      </Row>
    </Container>
  {/* ------------------------------------------------------ */}
  <div className="slider3">
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
{/* ------------------------------------ */}
<Container>
  <Row>
<CardGroup>
  <Col className="col-lg-4 col-md-6">
      <Card className="img_back border-0">
        <Card.Body className="img_1">
        <div className="our_i1_img "> 
        <img src={require('./img/i5.jpg')} style={{width:"100%"}}></img> 
   </div>     

        <h1 className="front_v">Amalia Edinson</h1>
        <p className="font_t">Marketing Manager</p>
        </Card.Body>
      </Card>
      </Col>

      <Col className="col-lg-4 col-md-6">
      <Card className="img_back border-0">
        <Card.Body className="img_2">
        <div className="our_i2_img">
        <img src={require('./img/i6.jpg')} style={{width:"100%"}}></img> 
  </div> 
        <h1 className="front_v">Marian Chirs</h1>
        <p className="font_t">Funder</p>
        </Card.Body>
      </Card>
      </Col>

      <Col className="col-lg-4 col-md-6">
      <Card className="img_back border-0 ">
        <Card.Body className="img_3">
        <div className="our_i3_img">
        <img src={require('./img/i7.jpg')} style={{width:"100%"}}></img> 
    </div> 
        <h1 className="front_v">Maria Andaloro</h1>
        <p className="font_t">Support</p>
        </Card.Body>
      </Card>
      </Col>
    </CardGroup>
    </Row>
    </Container>
    {/* ------------------------------------------------ */}
    <section className="back">
<div className="about">
        <div className="play-icon justify-content-center text-center"><FaCirclePlay></FaCirclePlay>
<div className="sub-name">Get Introduction</div>
        </div>
       </div>
       </section>
   {/* ------------------------------------------- */}
   <section>
        <Container>
        <div class="sec_title m-5">
      <p class="h1 text-center main_title">Our Projects</p>
      <p class="fs-5 text-muted  text-center mx-auto sub_title">Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>      
    </div>
        </Container>
    </section>
    {/* ----------------------------------------- */}
    <Aboutus></Aboutus>
    <Slider></Slider>
    <Footer></Footer>
    </>
    );
  }
  
  export default About;