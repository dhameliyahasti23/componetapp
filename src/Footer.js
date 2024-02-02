import { Container,Row,Col} from "react-bootstrap";

import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoIosCall } from "react-icons/io";




function Footer() {
    return (
      <>
       <section className="bg-black">
<Container>
  <Row>
    <Col className="col-lg-3 col-md-6 p-5 "sm={12}>
           <div className="footer_icon">
              <img src={require ('./img/i15.png')}></img>
              <p className="footer_text">There are many vari of pass of lorem ipsum availab majority have suffered in some form by injected humour or words.</p>
              <p className="footer"><FaFacebookF></FaFacebookF><IoLogoTwitter></IoLogoTwitter><IoLogoInstagram></IoLogoInstagram></p>
            </div>
           </Col>
    <Col className="col-lg-3 col-md-6 p-5 "sm={12}>
            <div className="footer_icon">
              <p className="footer">Links</p>
              <p className="footer">About</p>
              <p className="footer">FAQ's</p>
              <p className="footer">Links</p>
              <p className="footer">Links</p>
            </div>
          </Col>
     <Col className="col-lg-3 col-md-6 p-5 "sm={12}>
            <div className="footer_icon">
              <p className="footer">Contact</p>
              <p className="footer"><FaMapMarkerAlt></FaMapMarkerAlt> 56 Road Kurigram Street, 60 New York, UK</p>
              <p className="footer"><IoIosCall></IoIosCall> +968 556 778 345</p>
              <p className="footer"><IoIosMail></IoIosMail> demo@gmail.com</p>
          </div>
        </Col>
    <Col className="col-lg-3 col-md-6 p-5 "sm={12}>
            <div className="footer_icon">
              <p className="footer">Newsletter</p>
              <p className="footer">Subscribe to Our Newsletter for Daily News and Updates</p>
              <button className="btn7">Send Request</button> 
            </div>  
          </Col>
      </Row>
    </Container>
   </section>

      </>
    );
  }
  
  export default Footer