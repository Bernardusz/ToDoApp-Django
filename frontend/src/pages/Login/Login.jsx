import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from "../../axiosConfig";
import './login.css'

export default function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate()

    const handleLogin =  async () => {
        try {
            const response = await api.post("/token/", {username, password});
            if (rememberMe === true){
                localStorage.setItem("access_token", response.data.access);
                localStorage.setItem("refresh_token", response.data.refresh);
            }
            else{
                sessionStorage.setItem("access_token", response.data.access);
                sessionStorage.setItem("refresh_token", response.data.refresh);
            }

            navigate("/")
        }
        catch (err){
            alert("Login failed !");
            console.error(err.response ? err.response.data : err.message);
        }
    };

    return(
        <div id="holder">
            <div id="header">
                <h2>Login</h2>
                <hr />
            </div>
            <div id="content">
                <input  className="input" type="text" value={username} onChange={event => setUsername(event.target.value)} placeholder="Username"/>
                <input className="input" type="password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Password" />
                <button onClick={handleLogin}>Login</button>
                
                <div id="remember-me">
                    <h3>Remember Me</h3>
                    <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                </div>
                
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    )
}