import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './signup.css';

export default function SignUp(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
    const navigate = useNavigate()
    const handleLogin =  async () => {
        try{
        await axios.post("http://localhost:8000/api/users/", {username, password, email})
        navigate("/login")
    }
        catch(error){
            alert("Sign up failed")
            console.error(error.response ? error.response.data : error.message);
        }
    };

    return(
        <div id="holder">
            <div id="header">
                <h2>Login</h2>
                <hr />
            </div>
            <div id="content">
                <input className="input" type="text" value={username} onChange={event => setUsername(event.target.value)} placeholder="Username"/>
                <input className="input" type="password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Password" />
                <input className="input" type="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="Email" />
                <button onClick={handleLogin}>Sign Up</button>
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
}