import React from 'react'
import { Container,Row,Col} from "react-bootstrap";

import { FaStar } from "react-icons/fa6";


function Slider() {
    return (
       <>
       <section>
   <div className="slider_next">
      <Container>
        <Row>
          <Col className="abo_info m-4" lg={6} md={6} sm={12} >
          <img src={require('./img/i14.jpg')} style={{width:"90%"}}></img> 
          </Col>
          <Col>
          <div className="ser_part2 ">
          <div>  
          </div>
             <h1 className="slider2_dark"><a className="ser_icon"><FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar></a>Execllent!!</h1>
            <h1 className="pro_des1">Labore sed dolore magna aliquay enim ad minim veniam quis nostr exercitation well laboris ni ut aliquip ex reprehen deritin voluptate. minim veniam.</h1>
            <img src={require('./img/i24.png')} style={{width:"10%"}}></img> 
             <h6 className="slider_n">Donald James</h6>
             <p className="slider_per">Designer</p>
             </div>
          </Col>
        </Row>
      </Container>
    </div>
    </section>
       </>
    )
}

export default Slider