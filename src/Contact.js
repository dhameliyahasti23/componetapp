import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Container,Row,Col,Form } from 'react-bootstrap'

import { RiHomeOfficeLine } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
import { RiMessage2Line } from "react-icons/ri";
import { GoChevronRight } from "react-icons/go";




function Contact() {
    return (
       <>
       <Header></Header>
       {/* ------------------------------------------ */}
       <div className="about">
        <div className="img-item justify-content-center text-center">Contact
<div className="sub-name">You Here! <GoChevronRight></GoChevronRight> Home <GoChevronRight></GoChevronRight> Gallery</div>
        </div>
       </div>
       {/* ------------------------------------------------------ */}
       <section>
        <Container>
        <div class="sec_title">
      <p class="h1 text-center main_title">Our Contact</p>
      <p class="fs-5 text-muted  text-center mx-auto sub_title">Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
        </Container>
    </section>
    {/* --------------------------------------------- */}
    <section className="next">
    <Container>
        <Row>
          <Col>
          <div className="slider_img mt-5">
          <div className="img-item7 justify-content-center text-center">
       
            <Col>
              <Form className="d-flex col-md-12">
            <Form.Group className="inputbox" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="Name" />
            </Form.Group>
            <Form.Group className="inputbox " controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="E-mail" />
            </Form.Group>
            </Form>
            </Col>
            <Col>
            <Form className="d-flex">
          <Form.Group className="inputbox" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Phone Number" />
          </Form.Group>
          <Form.Group className="inputbox " controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Your Website" />
          </Form.Group>
          </Form>
            </Col>

            <Col>
            <Form.Group className="inputbox textarea mb-3" controlId="formGridAddress2">
              <Form.Control placeholder="Youe Message Here" className="border-0 p-5" />
          </Form.Group>
            <button className="btn5">SUBMIT NOW</button>
            </Col>
          </div>
          </div>
          </Col>
        </Row>
      </Container>
      </section>

       {/* --------------------------------------------------------- */}
       <div class="google_map">
        <iframe src="https://maps.google.com/maps?q=WEBITRANGPUR&amp;t=m&amp;z=11&amp;output=embed&amp;iwloc=near" frameborder="0"></iframe>
    </div>
    {/* ------------------------------------------------ */}
       <Footer></Footer>
       </>
    )
}

export default Contact