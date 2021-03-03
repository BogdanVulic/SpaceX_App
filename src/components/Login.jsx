import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getAllUsers } from "../service";
import StyledLogIn from "./styled-components/StyledLogIn";

const Login = ({ setUser }) => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [message, setMessage] = useState('');

    const history = useHistory();

    return (
        <>
            <StyledLogIn onSubmit={(e) => {
                e.preventDefault()
                getAllUsers().then(res => {
                    let user = res.data.find(el => (el.username === username || el.email === username) && el.password === password)
                    if(user){
                        setUser(user)
                        history.push('/launches')
                    }
                    else{
                        setMessage('Username or password incorrect')
                        setTimeout(() => {
                            setMessage('')
                        }, 5000)
                    }
                })
            }}>
                <input type="text" placeholder="username or email..." onChange={e => setUsername(e.target.value)}/>
                <input type="password" placeholder="password..." onChange={e => setPassword(e.target.value)}/>
                <input id="submit" type="submit" value="Login" />
            </StyledLogIn>
            <div>
                <Link to='/register'>Not registered?</Link>
            </div>
            <p>{message}</p>
        </>
    )
}

export default Login