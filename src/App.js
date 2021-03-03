import { useEffect, useState } from 'react';
import Home from './components/Home';
import Launches from './components/Launches';
import Rockets from './components/Rockets';
import Crew from './components/Crew';
import { getCompany, getLaunches, getRockets, getCrew } from './service';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';
import OneCrewMember from './components/OneCrewMember';
import OneLaunch from './components/OneLaunch';


const App = () => {

    const [company, setCompany] = useState({});
    const [launches, setLaunches] = useState([]);
    const [rockets, setRockets] = useState([]);
    const [user, setUser] = useState(null);
    const [crew, setCrew] = useState([]);

    useEffect(() => {
        if(user){
            getCompany().then(res => {
                setCompany(res.data);
            })
            getLaunches().then(res => {
                setLaunches(res.data);
            })
            getRockets().then(res => {
                setRockets(res.data);
            })
            getCrew().then(res => {
                setCrew(res.data);
            })
        }   
    },[user])


    return (
        <>
                <Router>
                <Nav user={user} setUser={setUser}></Nav>
                <Switch>
                    <Route exact path='/'>
                        <Home company={company} />
                    </Route>
                    <Route path={'/launches/:id'}>
                        <OneLaunch launches={launches} rockets={rockets} />
                    </Route>
                    <Route path='/launches'>
                        <Launches rockets={rockets} loggedIn={user} launches={launches} />
                    </Route>
                    <Route path='/rockets'>
                        <Rockets loggedIn={user} rockets={rockets} />
                    </Route>
                    <Route path='/crew/:id'>
                        <OneCrewMember crew={crew} launches={launches}/>
                    </Route>
                    <Route path='/crew'>
                        <Crew loggedIn={user} crew={crew} launches={launches} />
                    </Route>
                    <Route path='/login' >
                        <Login setUser={setUser} />
                    </Route>
                    <Route path='/register'>
                        <Register />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App
