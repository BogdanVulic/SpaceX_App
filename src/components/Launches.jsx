import { useState } from 'react'
import { Redirect } from 'react-router-dom';
import Launch from './Launch';
import StyledLaunches from './styled-components/StyledLaunches';
import SelectPerPage from './SelectPerPage';
import Pages from './Pages';
import RadioRockets from './RadioRockets';

const Launches = ({ rockets, launches, loggedIn }) => {

    const [margins, setMargins] = useState([0, 5]);
    const [perPage, setPerPage] = useState(5);
    const [rocketID, setRocketID] = useState('');

    return (
        <>
        {
            loggedIn ? 
            <>
                <RadioRockets perPage={perPage} setMargins={setMargins} rocketID={rocketID} setRocketID={setRocketID} rockets={rockets}></RadioRockets>
                <span style={{padding:5}}>Launches per page</span>
                <SelectPerPage setMargins={setMargins} setPerPage={setPerPage}></SelectPerPage>
                
                <StyledLaunches>
                    {launches.filter(launch => launch.rocket.includes(rocketID)).slice(margins[0], margins[1]).map(launch => <Launch key={launch.id} launch={launch}/>)}
                </StyledLaunches>
                <Pages length={launches.filter(launch => launch.rocket.includes(rocketID)).length} perPage={perPage} setMargins={setMargins}></Pages>
            </>
                     :
                <Redirect to='/login'></Redirect>
        }
        </>
    )
}

export default Launches
