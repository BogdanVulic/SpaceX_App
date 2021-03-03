import StyledRocket from './styled-components/StyledRocket';

const Rocket = ({ rocket }) => {

    return (
        <StyledRocket>
            <img style={{width:400, height:300}} src={rocket.flickr_images[0]} alt=''></img>
            <h2>{rocket.name}</h2>
            <details>
                <p>{rocket.description}</p>
                <p>Cost per launch: {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 2
                    }).format(rocket.cost_per_launch)}
                </p>
                <p>Height: {rocket.height.meters}m</p>
                <p>{rocket.active ? 'Currently active' : 'Currently not active'}</p>
                <a href={rocket.wikipedia} target="blank">Read more at wiki</a>
            </details>
        </StyledRocket>
    )
}

export default Rocket

