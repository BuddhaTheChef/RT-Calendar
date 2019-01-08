import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { NavLink, withRouter} from 'react-router-dom';

const NavBar = () => {
    return (
      <Menu>
       <Container className="nav-container">
         <Menu.Item as={NavLink} to='/' className="nav-links" name="Calendar" />
         <Menu.Item as={NavLink} to='/profile' className="nav-links" name="Your Events"/>
         <Menu.Item as={NavLink} to='/signin' className="nav-links" name="Sign in"/>
       </Container>
     </Menu>
    );
}
export default withRouter(NavBar);