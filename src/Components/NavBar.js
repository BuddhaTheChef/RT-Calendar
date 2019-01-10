import React from 'react';
import { Container } from 'semantic-ui-react';
import {Link, NavLink, withRouter} from 'react-router-dom';

const NavBar = () => {
    return (

       <Container className="nav-container">
         <Link as={NavLink} to='/' className="nav-links">Calendar</Link>
         <Link as={NavLink} to='/profile' className="nav-links">Your Events</Link>
         <Link as={NavLink} to='/signin' className="nav-links">Sign in</Link>
       </Container>
    );
}
export default withRouter(NavBar);