import { Link } from 'react-router-dom';
import StyledNav from './styled-components/StyledNav';
import logo from '../img/logo.png';

const Nav = ({ user, setUser}) => {

    return (
        <StyledNav>
            <img src={logo} alt=""></img>
            
            <Link to='/' >HOME</Link>
            <Link to='/launches' >LAUNCHES</Link>
            <Link to='/rockets' >ROCKETS</Link>
            <Link to='/crew' >CREW</Link>
            {user ?
                <>
                    <span>Welcome <span>{user.username}</span></span>
                    <button onClick={() => setUser(null)}>Logout</button>
                </>
                    :
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>}
            
        </StyledNav>
    )
}

export default Nav
