import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,button ,Row,Col,Navbar,Nav,NavDropdown,Carousel,ExampleCarouselImage,CardGroup,Card,ProgressBar,Accordion} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { IoBarChartSharp } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import { MdPeopleOutline } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { HiOutlinePhotograph } from "react-icons/hi";
import { FaPlayCircle } from "react-icons/fa";
import { ImHeadphones } from "react-icons/im";
import { MdComputer } from "react-icons/md";
import Slider from "./Slider";



// import myimg1 from './img/i1.png';
// import myimg2 from './img/i2.jpg';
// import myimg3 from './img/i3.jpg';
// import myimg4 from './img/i4.jpg';
// import myimg5 from './img/i5.jpg';
// import myimg6 from './img/i6.jpg';
// import myimg7 from './img/i7.jpg';
// import myimg8 from './img/i20.png';
// import myimg9 from './img/i21.png';
// import myimg10 from './img/i22.png';
// import myimg11 from './img/i23.png';


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

function Home() {
    return (
      <>
      <Header></Header>
      <div className="slider_img">
    <Carousel>
        <Carousel.Item>
          <img src={require('./img/i2.jpg')} style={{width:"100%",height:"70%"}}></img>
          <Container>
          <Carousel.Caption className="slider_center">
            <h3 className="slider_h">Make Your Business Perfect WordPress Site</h3>
            <p className="slider_n">Nulla vitae elit libero, a pharetra augue mollis interdumNulla vitae elit libero, a pharetra augue mollis interdumNulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <div className="slider_btn">
            <button className="btn1">Contant Now</button>
            </div>
          </Carousel.Caption>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <img src={require('./img/i3.jpg')} style={{width:"100%",height:"70%"}}></img>
          <Container>
          <Carousel.Caption>
            <h3 className="slider_h">Generate Engaging content Through.</h3>
            <p className="slider_n">Nulla vitae elit libero, a pharetra augue mollis interdumNulla vitae elit libero, a pharetra augue mollis interdumNulla vitae elit libero, a pharetra augue mollis interdum.</p>

          <div className="slider_btn">         
          <button className="btn1">Contant Now</button>
          </div>  
          </Carousel.Caption>
          </Container>
        </Carousel.Item>
      </Carousel>
    </div>
    {/* ----- */}
    <section>
        <Container>
        <div class="sec_title">
      <p class="h1 text-center main_title">Our Feature</p>
      <p class="fs-5 text-muted  text-center mx-auto sub_title">Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
        </Container>
    </section>
    {/* --------------------------------------- */}
    <Container>
  <Row>
<CardGroup>
  <Col className="col-lg-4 col-md-6">
      <Card className="card_back border-0">
        <Card.Body className="card_1">
        <div className="our_i1"><MdComputer></MdComputer>   </div>     

        <h1 className="front_title">Awesome Work Place</h1>
          <Card.Text className="front_text">
          Lorem ipsum dolor sit amet, ca adipisicing elit, sed do eiusmod tempor incididunt utn labore et dolore magna.
          <button className="btn3">READ MORE</button>

          </Card.Text>
        </Card.Body>
      </Card>
      </Col>

      <Col className="col-lg-4 col-md-6">
      <Card className="card_back border-0">
        <Card.Body className="card_2">
        <div className="our_i2"><IoBarChartSharp></IoBarChartSharp>    </div> 
        <h1 className="front_title">Unlimited facility</h1>
              <Card.Text className="front_text">
              Lorem ipsum dolor sit amet, ca adipisicing elit, sed do eiusmod tempor incididunt utn labore et dolore magna.
              <button className="btn3">READ MORE</button>

          </Card.Text>
        </Card.Body>
      </Card>
      </Col>

      <Col className="col-lg-4 col-md-6">
      <Card className="card_back border-0 ">
        <Card.Body className="card_3">
        <div className="our_i3"><FaComputer ></FaComputer>     </div> 
        <h1 className="front_title">Responsive Design</h1>
              <Card.Text className="front_text">
              Lorem ipsum dolor sit amet, ca adipisicing elit, sed do eiusmod tempor incididunt utn labore et dolore magna.
              <button className="btn3">READ MORE</button>

          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
    </CardGroup>
    </Row>
    </Container>
  {/* ------------------------ */}
  <div className="bgsky1">
      <Container>
        <Row>
          <Col className="abo_info m-4" lg={6} md={6} sm={12} >
          <img src={require('./img/i4.jpg')} style={{width:"90%"}}></img> 
          </Col>
          <Col>
          <div className="ser_part2 m-4">
          <h1>Why We Are Different?</h1>
          <div>
            
          </div>

            <h1 className="abo_dark"><a className="ser_icon"><IoHome></IoHome></a>Our Company History</h1>
            <h1 className="pro_des1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply.</h1>

             <h1 className="abo_dark"><a className="ser_icon"><IoBarChartSharp></IoBarChartSharp></a>Our Success Mission</h1>
            <h1 className="pro_des1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply.</h1>

            <h1 className="abo_dark"><a className="ser_icon"><FaChartPie></FaChartPie></a>Our Future Plan</h1>
            <h1 className="pro_des1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply.</h1>
            <ProgressBar variant="info" now={90} />
             <h6>Support</h6>
             </div>
          </Col>
        </Row>
      </Container>
    </div>
    {/* ---------------------------------------------- */}
    <section>
        <Container>
        <div class="sec_title m-5">
      <p class="h1 text-center main_title">Our Service</p>
      <p class="fs-5 text-muted  text-center mx-auto sub_title">Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
        </Container>
    </section>
    {/* --------------------------------- */}
    <Container>
  <Row>
<CardGroup>
  <Col className="col-lg-4 col-md-6">
      <Card className="main_back border-0">
        <Card.Body className="main_1">
        <div className="sit_i1"> <MdComputer ></MdComputer >     </div>     

        <h1 className="back_title">CLEAN DESIGN</h1>
          <Card.Text className="back_text">
          Lorem ipsum dolor sit amet, ca adipisicing elit, sed do eiusmod tempor incididunt utn labore .
          <button className="btn4">READ MORE<GoArrowRight></GoArrowRight></button>

          </Card.Text>
        </Card.Body>
      </Card>
      </Col>

      <Col className="col-lg-4 col-md-6">
      <Card className="main_back border-0">
        <Card.Body className="main_1">
        <div className="sit_i2"><MdPeopleOutline></MdPeopleOutline>    </div> 
        <h1 className="back_title">CREATIVE IDEA</h1>
              <Card.Text className="back_text">
              Lorem ipsum dolor sit amet, ca adipisicing elit, sed do eiusmod tempor incididunt utn labore .
              <button className="btn4">READ MORE<GoArrowRight></GoArrowRight></button>

          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      

      <Col className="col-lg-4 col-md-6">
      <Card className="main_back border-0">
        <Card.Body className="main_1">
        <div className="sit_i2"><FaChalkboardTeacher></FaChalkboardTeacher>    </div> 
        <h1 className="back_title">COMMUNICATION</h1>
              <Card.Text className="back_text">
              Lorem ipsum dolor sit amet, ca adipisicing elit, sed do eiusmod tempor incididunt utn labore.
              <button className="btn4">READ MORE<GoArrowRight></GoArrowRight></button>

          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col className="col-lg-4 col-md-6">
      <Card className="main_back border-0">
        <Card.Body className="main_1">
        <div className="sit_i2"><HiOutlinePhotograph></HiOutlinePhotograph>    </div> 
        <h1 className="back_title">PHOTOGRAPHY</h1>
              <Card.Text className="back_text">
              Lorem ipsum dolor sit amet, ca adipisicing elit, sed do eiusmod tempor incididunt utn labore.
              <button className="btn4">READ MORE<GoArrowRight></GoArrowRight></button>

          </Card.Text>
        </Card.Body>
      </Card>
      </Col>

      <Col className="col-lg-4 col-md-6">
      <Card className="main_back border-0">
        <Card.Body className="main_1">
        <div className="sit_i2"><MdComputer></MdComputer>    </div> 
        <h1 className="back_title">ONLINE MARKETING</h1>
              <Card.Text className="back_text">
              Lorem ipsum dolor sit amet, ca adipisicing elit, sed do eiusmod tempor incididunt utn labore.
              <button className="btn4">READ MORE<GoArrowRight></GoArrowRight></button>

          </Card.Text>
        </Card.Body>
      </Card>
      </Col>

      <Col className="col-lg-4 col-md-6">
      <Card className="main_back border-0 ">
        <Card.Body className="main_1">
        <div className="sit_i3"><ImHeadphones ></ImHeadphones>     </div> 
        <h1 className="back_title">UNLIMITED SUPPORT</h1>
              <Card.Text className="back_text">
              Lorem ipsum dolor sit amet, ca adipisicing elit, sed do eiusmod tempor incididunt utn labore.
              <button className="btn4">READ MORE<GoArrowRight></GoArrowRight></button>

          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
    </CardGroup>
    </Row>
    </Container>
    {/* ------------------------------------------------ */}
    <section>
        <Container>
        <div class="sec_title text-center m-5">
      <p class="h1 text-center main_title">Our Portfolio</p>
      <p class="fs-5 text-muted  text-center mx-auto sub_title">Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <Button variant="outline-info m-4 border-black text-black">All Work</Button>{' '}       
      <Button variant="outline-info m-4 border-black text-black">Branding</Button>{' '}
      <Button variant="outline-info m-4 border-black text-black">PhotoShop</Button>{' '}
      <Button variant="outline-info m-4 border-black text-black">Web Design</Button>{' '}
      <Button variant="outline-info m-4 border-black text-black">Word Press</Button>{' '}

    </div>
        </Container>
    </section>
    {/* -------------------------------------- */}
    <Container>
  <Row>
<CardGroup>
  <Col className="col-lg-4 col-md-6">
      <Card className="img_back border-0">
        <Card.Body className="img_1">
        <div className="our_i1_img"> 
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
    {/* ---------------------------------- */}
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
  {/* ----------------------------------------- */}
  <section>
        <Container>
        <div class="sec_title m-5">
      <p class="h1 text-center main_title">Frequently Asked Questions</p>
      <p class="fs-5 text-muted  text-center mx-auto sub_title">Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
        </Container>
    </section>
    {/* ---------------------------------------------------------- */}
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
    {/* --------------------------------------------- */}
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
{/* ---------------------------------------------------------- */}
<section className="back">
<div className="about">
        <div className="play-icon justify-content-center text-center"><FaPlayCircle></FaPlayCircle>
<div className="sub-name">Get Introduction</div>
        </div>
       </div>
       </section>
{/* ---------------------------------------------- */}
      <Slider></Slider>
      <Footer></Footer>

      </>
    );
  }
  
  export default Home