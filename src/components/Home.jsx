import StyledHome from './styled-components/StyledHome';
import logo from '../img/logo.png';

const Home = ({ company }) => {

    return (
        <StyledHome>
            <img src={logo} alt=""></img>
            <p>{company.summary}</p>
            <p>CEO: {company.ceo}</p>
            <p>COO: {company.coo}</p>
            <p>Employees: {company.employees}</p>
            <p>Founded: {company.founded}</p>
            <p>HeadQuarters: {company.headquarters?.address}, {company.headquarters?.city}, {company.headquarters?.state}</p>
            <a target="blank" href={company.links?.website} >Official website</a>
        </StyledHome>
    )
}

export default Home
