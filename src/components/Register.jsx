import { registerUser, getAllUsers } from "../service"
import { useRegister } from "../useRegister"
import { useHistory } from 'react-router-dom'
import { useState } from "react"
import StyledRegister from './styled-components/StyledRegister';

const validPassword = (password) => password.length >= 8 
                                 && password.split('').some(char => !isNaN(Number(char)))
                                 && password.split('').some(char => (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z'))


const Register = () => {
    const [username,setUsername,email,setEmail,password,setPassword] = useRegister();
    const [message, setMessage] = useState('');
    const history = useHistory()

    return (
        <>
        <StyledRegister onSubmit={e => {
            e.preventDefault()
            if(username.length < 4 && !validPassword(password)){
                setMessage('Invalid entry: username has to be at least 4 characters long, password at least 8 characters long with at least one letter and one number');
                setTimeout(() => {
                    setMessage('')
                }, 7000)
                return 
            }
            getAllUsers().then(res => {
                if(!res.data.some(user => user.username === username || user.email === email)){
                    registerUser(username,email,password).then(res => {
                        history.push('/login')
                    })
                }
                else{
                    setMessage('User already exists')
                    setTimeout(() => {
                        setMessage('')
                    }, 3000)
                }
            })
        }}>
            <input type="text" placeholder="username..." onChange={e => setUsername(e.target.value)}/>
            <input type="email" placeholder="email..." onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="password..." onChange={e => setPassword(e.target.value)} />
            <input id="submit" type="submit" value="Register" />
            
        </StyledRegister>
        <p>{message}</p>
        </>
    )
}

export default Register