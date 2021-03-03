import { useParams } from "react-router-dom"


const OneLaunch = ({ launches, rockets }) => {

    const { id } = useParams();
    const oneLaunch = launches.find(launch => launch.id === id);
    
    return (
        <div>
            <img src={oneLaunch.links.patch.small ? oneLaunch.links.patch.small : "https://via.placeholder.com/200"} alt="" ></img>
            <p>{oneLaunch.name}</p>
            <p>{oneLaunch.details ? oneLaunch.details : 'No details'}</p>
            <p>Launch date: {oneLaunch.date_utc.split('T')[0].split('-').reverse().join('. ').concat('.')}</p>
            <p>Rocket: {rockets.find(rocket => rocket.id === oneLaunch.rocket).name}</p>
        </div>
    )
}

export default OneLaunch
