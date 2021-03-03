
const RadioRockets = ({ perPage, setMargins, rockets, rocketID, setRocketID }) => {

    return (
        <form style={{padding: 10}}>
            <>
                {
                    rockets.map(rocket => 
                        <label style={{padding: 10}} key={rocket.id}>
                            {rocket.name}
                            <input type="radio" 
                                   checked={rocketID === rocket.id} 
                                   value={rocket.id} 
                                   onChange={e => {
                                       setRocketID(e.target.value)
                                       setMargins(prev => [0, perPage])
                                    }}
                            />
                        </label>
                    )
                }
            </>
        </form>
    )
}

export default RadioRockets
