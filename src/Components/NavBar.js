import React from 'react';
import { Container } from 'semantic-ui-react';
import {Link, withRouter} from 'react-router-dom';

const NavBar = () => {
    return (

       <Container className="nav-container">
         <Link  to='/' className="nav-links">Calendar</Link>
         <Link  to='/profile' className="nav-links">Your Events</Link>
         <Link  to='/signin' className="nav-links">Sign in</Link>
       </Container>
    );
}
export default withRouter(NavBar);