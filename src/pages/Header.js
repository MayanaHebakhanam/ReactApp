import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

export const StyledLink=styled(Link)`
padding: 15px;
color: #8186a9;
text-decoration: none;
font-size: 18px;
`

function Header(){


    return(
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/survey/1">Survey</StyledLink>
            <StyledLink to="/freelancers">Profiles</StyledLink>
        </nav>
    )
}

export default Header;