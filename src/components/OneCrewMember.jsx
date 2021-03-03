import { Link, useParams } from "react-router-dom";

const OneCrewMember = ({ crew, launches }) => {

    const { id } = useParams();

    const oneCrewMember = crew.find(member => member.id === id);
    
    const launch = launches.filter(launch => launch.id === oneCrewMember.launches[0])
                           .map(el => <Link key={el.id} to={`/launches/${el.id}`}>{el.name}</Link>);

    return (
        <div>
            <img style={{width:200, height:260}} src={oneCrewMember.image} alt=''></img>
            <p>{oneCrewMember.name}</p>
            <p>Agency: {oneCrewMember.agency}</p>
            <div>Launches: {launch[0] ? launch : 'No Launches'}</div>
            <p>Status: {oneCrewMember.status}</p>
            <a href={oneCrewMember.wikipedia} target="blank" >Read more at wiki</a>
        </div>
    )
}

export default OneCrewMember
