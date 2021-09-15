//import logo from './logo.svg';
import './App.css';
import {
  Button, Navbar, Container,
  Nav, NavDropdown, Form,
  FormControl
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
//components-----------------------------------------
import Ctrlpanel from './Ctrlpanel'
import Createquote from './Createquote'
import Confirmoffer from './Confirmoffer'
import Reports from './Reports'
import Clients from './Clients'
import Consultants from './Consultants'
import Products from './Products'
import ClientCreate from './ClientCreate'

//--------------------------------------end Components
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";

/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";*/



function App() {

  //handle submit from bootstrap ----------------

  const history = useHistory();

  const handleSubmitnav = (event) => {
    const form = event.currentTarget;
    //if (form.checkValidity() === false) {
    history.push(form.name);
    event.preventDefault();
    //event.stopPropagation();

  }

  //---------------------------------------------




  useEffect(() => {

    fetch("http://localhost:4000/clients").
      then(res => res.json()).then(data => console.log(data))
    //createClient()

  }, [])

  /*const test = {
    name: {
        first: "Luis",
        last: "String",
    },
    username: "String",
    email: "String",
    author: "String",
    tags: [ "String" ],
    published: true,
    quantity: 5,
    price: 50,
    }*/

  const createClient = (fbRes) => {
    return fetch("http://localhost:4000/clients", {
      method: "POST",
      //body: JSON.stringify(Object.assign({}, fbRes, { platform: "fb" })),
      body: JSON.stringify(test),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      "Access-Control-Allow-Origin": "http://localhost:4000",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log({ res });
        return res.user;
      })
      .catch((err) => console.log("xxxxxxx", err));
  };


  return (
    <>


      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Mini ERP by LH</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#" onClick={handleSubmitnav} name="">Cpanel</Nav.Link>

            <Nav.Link href="#" onClick={handleSubmitnav} name="create-quote" >Create an offer</Nav.Link>

            <Nav.Link href="#" onClick={handleSubmitnav} name="confirm-quote">Confirm Quote</Nav.Link>

            <Nav.Link href="#" onClick={handleSubmitnav} name="reports">Reports</Nav.Link>

            <Nav.Link href="#" onClick={handleSubmitnav} name="products">Products</Nav.Link>

            <NavDropdown title="Clients" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#" onClick={handleSubmitnav} name="clients">Clients list</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4" onClick={handleSubmitnav} name="clientCreate">Create a new client</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Client reports</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Consultants" id="navbarScrollingDropdown2">
              <NavDropdown.Item href="#" onClick={handleSubmitnav} name="consultants">Consultants</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Consultant Reports</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Consultant details</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex" onsubmit={handleSubmitnav}>
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"

            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>


      <div>

        {/* <nav> 
          <ul>
            <li>
              <Link to="/">Control panel</Link>
            </li>
            <li>
              <Link to="/create-quote">Create Quote</Link>
            </li>
            <li>
              <Link to="/confirm-quote">Confirm Quote</Link>
            </li>
            <li>
              <Link to="/reports">See Reports ...</Link>
            </li>
            <li>
              <Link to="/clients">Clients List ...</Link>
            </li>
            <li>
              <Link to="/consultants">Consultants ...</Link>
            </li>
            <li>
              <Link to="/products">Our Products ...</Link>
            </li>
          </ul>
        </nav>*/}



        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Ctrlpanel />
          </Route>
          <Route exact path="/create-quote">
            <Createquote />
          </Route>
          <Route exact path="/confirm-quote">
            <Confirmoffer />
          </Route>
          <Route exact path="/reports">
            <Reports />
          </Route>
          <Route exact path="/clients">
            <Clients />
          </Route>
          <Route exact path="/clientCreate">
            <ClientCreate />
          </Route>
          <Route exact path="/consultants">
            <Consultants />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
        </Switch>
      </div>


    </>


  );
}

export default App;


function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users here ....</h2>;
}

function Users2() {
  return <h2>create something here by LH ....</h2>;
}



/*<Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Control Panel</Link>
              </li>
              <li>
                <Link to="/createquote">Create-Quote...</Link>
              </li>
              <li>
                <Link to="/confirm-offer">Confirm-Offer</Link>
              </li>
              <li>
                <Link to="/reports">Reports</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. }*/


/*<Switch>
<Route path="/">
  <Ctrlpanel />
</Route>
<Route exact path="/createquote">
  <Createquote />
</Route>
<Route exact path="/reports">
  <Reports />
</Route>

</Switch>
</div>
</Router>*/



