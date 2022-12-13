import React from "react";
import {Link} from 'react-router-dom' 
import {Container,Nav, Navbar} from 'react-bootstrap'
import '../App.css'


const navBar=()=>{
  return(
 
    <Navbar bg="dark" style={{position:'fixed',top:'0',left:'0',right:'0'}}>
      <Container>
    <Nav className="justify-content-between" style={{width:'100%'}}>
    <Nav.Item>
        <Link to="/" style={{color:"white"}}>Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/create" style={{color:"white"}}>Create Notes</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/notes" style={{color:"white"}}>Notes</Link>
      </Nav.Item>
    </Nav>
    </Container>
    </Navbar>
   
    )

}

export default navBar;











