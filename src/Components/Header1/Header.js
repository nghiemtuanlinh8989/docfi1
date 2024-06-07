
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";

import React from "react";
export function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{padding:0}}>
         <Container fluid style={{ backgroundColor: "#262626", height: 60,  }}>
        <Navbar.Brand href="#"  style={{color:'white'}}>
          
        envatoMarket
        </Navbar.Brand>

        <Button
          variant="outline-success"
          className="buynow"
          style={{
            // marginRight: 70,
            backgroundColor: "#82B440",
            fontWeight: "400",
            color:"white",
            borderRadius:10,
          
           
          
          }}
        >
          Buy now
        </Button>
      </Container>
    </Navbar>
  );
}

export default Header;