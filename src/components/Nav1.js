import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';

function Nav1() {
  var d = { color: "white" };
  var location = useLocation().pathname;
  console.log(useLocation().pathname);
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className='d-flex justify-content-space-between'>
          {/* <Navbar.Brand href="/">Navbar</Navbar.Brand> */}
          {/* <h1>nakl</h1> */}
          <h3 style={d}>companyname </h3>
          {/* <switch></switch> */}
          <switch className='d-flex justify-content-end ' >
            {/* <NavLink></NavLink> */}
            <NavLink className={'link ' + ("/" == location ? "active" :"")} href="/" style={d} >Home</NavLink>
            <NavLink className={'link ' + ("/contact" == location ? "active" :"")} href="contact" style={d} >Contact</NavLink>
            <NavLink className={'link '} href="/dfghj" style={d} >unkow</NavLink>
          </switch>


          {/* <h1>nakl</h1> */}
          {/* <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="contact">contact</Nav.Link>
            <Nav.Link href="contact">Pricing</Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>

    </>
  );
}

export default Nav1;
