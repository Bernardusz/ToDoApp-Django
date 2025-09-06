import { useState, useEffect } from "react";
import api from "../../axiosConfig";
import { useNavigate } from "react-router-dom";
import './tasks.css';

export default function Tasks(){
    const [tasks, setTasks] = useState([])
    const [title, setTitle] = useState("");
    const navigate = useNavigate()

    const tokenLocal = localStorage.getItem("access_token");
    const tokenSession = sessionStorage.getItem("access_token");
    const token = tokenLocal || tokenSession;

    const fetchTasks = async () => {
        const response = await api.get("/tasks/", {
            headers: {Authorization: `Bearer ${token}` }
        });
        setTasks(response.data)
    };

    const addTask = async () => {
        try {
            const response = await api.post("/tasks/", {title, is_done: false}, {
                headers: { Authorization: `Bearer ${token}`}
            });
            setTitle("");
            fetchTasks();
        }
        catch (error){
            console.error("Task creation failed:", error.response?.data)
        }
    };

    const toggleDone = async (id, done) => {
        const response = await api.patch(`/tasks/${id}/`, { is_done: !done}, {
            headers: {Authorization: `Bearer ${token}`}
        });
        fetchTasks();
    };

    const deleteTask = async (id) => {
        const response = await api.delete(`/tasks/${id}/`, {
            headers: {Authorization: `Bearer ${token}`}
        });
        fetchTasks()
    };

    const logOut = () => {
        localStorage.removeItem("access_token");
        sessionStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        sessionStorage.removeItem("refresh_token");
        navigate("/login")
    }

    useEffect(() => {
        if (token) fetchTasks();
    }, [token]);

    return (
        <div id="holder"> 
            <div id="header">
                <h3>Tasks</h3>
                <hr />
            </div>
            <div id="content">
                <input id="input" type="text" value={title} onChange={event => setTitle(event.target.value)} placeholder="title"/>
                <button onClick={addTask}>Add</button>
                <button onClick={logOut}>Sign Out</button>
                <div id="content-holder">
                    {(tasks || []).map(t => (
                        <div className="tasks" key={t.id}>
                            <span style={{textDecoration: t.is_done?"line-through":"none"}}>{t.title}</span>
                            <div>
                                <button onClick={()=>toggleDone(t.id, t.is_done)}>Toggle</button>
                                <button onClick={()=>deleteTask(t.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
