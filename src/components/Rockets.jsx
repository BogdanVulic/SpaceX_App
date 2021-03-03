import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Rocket from './Rocket';
import StyledRockets from './styled-components/StyledRockets';

const Rockets = ({ rockets, loggedIn }) => {

    const [margins, setMargins] = useState([0, 1]);
    
    return (
        <>
            {
                loggedIn ?
                <StyledRockets>
                    <p className={margins[0] === 0 ? 'remove' : undefined} onClick={() => {setMargins(prev => [prev[0]-1,prev[1]-1])}}><i className="arrow left"></i></p>
                    {rockets.slice(margins[0], margins[1]).map(rocket => <Rocket key={rocket.name} rocket={rocket}></Rocket>)}
                    <p className={margins[1] >= rockets.length ? 'remove' : undefined} onClick={() => {setMargins(prev => [prev[0]+1,prev[1]+1])}}><i className="arrow right"></i></p>
                </StyledRockets>
                :
                <Redirect to='/login'></Redirect>
            }
        </>
    )
}

export default Rockets
