import { Link } from "react-router-dom"

const CrewMember = ({ crewMember }) => {

    return (
        <div>
            <img style={{width:100, height:130}} src={crewMember.image} alt=''></img>
            <p><Link to={`/crew/${crewMember.id}`}>{crewMember.name}</Link></p>
        </div>
    )
}

export default CrewMember
