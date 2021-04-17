import React,{useState,useEffect} from "react";
import { Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
    const [scrolled,setScrolled] = useState(false);
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 200 ){
          setScrolled(true);
        }
        else{
          setScrolled(false);
        }
      }
    
      useEffect(() => {
        window.addEventListener('scroll',handleScroll)
      })
  return (
    <div>
      <Navbar expand="sm" fixed={scrolled?"top":"sticky"} className="nav-bar">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
          <Nav >
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link href="#memes">Dank memes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
