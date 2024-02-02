import About from "./About";
import { Container,Navbar,Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";






import { FaHome } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { FaThreads } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";



function Header() {
    return (
      <>
      <div className="bgblue">
    <Container>
    <div className="row py-3">

<div className="col-lg-9 col-md-9 Me-5 text-center lg-me-5 text-center col-xs-12   text-lg-start text-center  right_text">
    <i className=" me-2 "><FaHome></FaHome></i>
    <span className="me-3 ">56 Road Kurigram Street, 60 New York, UK</span>
 
    <i className=" text-xs-center text-sm-start"><IoIosCall></IoIosCall></i>
    <span>+968 556 778 345</span>
</div>

<div className="col-md-auto col-sm-12 ms-auto  text-center social_icon">
  <a href="#"><FaFacebookF></FaFacebookF></a>
  <a href="#"><IoLogoTwitter></IoLogoTwitter></a>
  <a href="#"><IoLogoInstagram></IoLogoInstagram></a>
  <a href="#"><FaThreads></FaThreads></a> 
  <a href="#"><FaTiktok></FaTiktok></a>
</div>
</div>
        </Container>
    </div>
    {/* ---------------------------------------------- */}
    <header>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <div>
        <img src={require ('./img/i1.png')}></img>

        </div>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nev_icon m-4">
            <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#home"><Link to="/About">About</Link></Nav.Link>
            <Nav.Link href="#home">Page</Nav.Link>
            <Nav.Link href="#home"><Link to="/Gallery">Gallery</Link></Nav.Link>
            <Nav.Link href="#home"><Link to="/Blog">Blog</Link></Nav.Link>
            <Nav.Link href="#home"><Link to="/Contact">Contact</Link></Nav.Link>
            <Nav.Link href="#home"><IoSearch></IoSearch></Nav.Link>
            <div>
            <button className="btn2">Free Estimate</button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
      </>
    );
  }
  
  export default Header;