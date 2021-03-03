import { Redirect } from 'react-router-dom'
import CrewMember from './CrewMember'
import StyledCrew from './styled-components/StyledCrew'

const Crew = ({ crew, loggedIn }) => {
    return (
        <>
            {
                loggedIn ?
                <StyledCrew>
                    {crew.map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember} ></CrewMember>)}
                </StyledCrew>
                         :
                <Redirect to='/login'></Redirect>
            }
        </>
    )
}

export default Crew
