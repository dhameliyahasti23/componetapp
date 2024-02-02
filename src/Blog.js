import React from 'react'
import Header from './Header'
import { Container,Row,Col} from "react-bootstrap";
import { GoChevronRight } from "react-icons/go";

import Aboutus from './Aboutus';
import Footer from './Footer';


function Blog() {
    return (
        <>
            <Header></Header>
            <div className="about">
        <div className="img-item justify-content-center text-center">blog
        </div>
       </div>
{/* ----------------------------------------------------------- */}
<Aboutus></Aboutus>
<Aboutus></Aboutus>

<Footer></Footer>
        </>
    )
}

export default Blog