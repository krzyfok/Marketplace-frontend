import { useState } from "react";
import  { useAuth } from "../contexts/AuthContext"
import { loginRequest } from "../services/authService";

export default function LoginForm(){
    const {login} =useAuth();

    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");

    const handleLogin = async ()=>
    {
        const data = await loginRequest(username, password);
        login(data.token);
    }


    return(

        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 z-30 bg-white py-10 rounded-2xl shadow-xl w-full max-w-md  flex flex-col items-center justify-center gap-4">
          <h1 className="text-black text-center " >LOG IN</h1>
          <input type= "text" placeholder="username" onChange={(e)=>setUsername(e.target.value)} className=""></input>
          <input type= "text" placeholder="password" onChange={(e)=>setPassword(e.target.value)} className=""></input>
          <button className="bg-black text-white p-2 rounded-2xl" onClick={handleLogin}> Sign in</button>
        </div>
    )
}