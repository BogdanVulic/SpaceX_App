import { Link } from 'react-router-dom'
import StyledLaunch from './styled-components/StyledLaunch'

const Launch = ({ launch }) => {

    return (
        
        <StyledLaunch>
            <div>
                <Link to={`/launches/${launch.id}`}><img src={launch.links.patch.small ? launch.links.patch.small : "https://via.placeholder.com/200"} alt="" ></img>
                                                    <p>{launch.name}</p>
                </Link>
            </div>
        </StyledLaunch>
    )
}

export default Launch
