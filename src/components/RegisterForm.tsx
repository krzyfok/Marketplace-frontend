import { useState } from "react";
import { registerRequest } from "../services/AuthService";
import { useAuth } from "../contexts/AuthContext";
export default function RegisterForm(){
    
    const {login} = useAuth();
    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email,setEmail] = useState("");

    const handleRegister = async ()=>
    {
        const data = await registerRequest(name, surname,email, username, password);
        login(data.token);

    }


    return(

        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 z-30 bg-white py-10 rounded-2xl shadow-xl w-full max-w-md  flex flex-col items-center justify-center gap-4  border-4 border-black">
          <div className="bg-white text-black px-10 py-3 rounded-2xl border-4 border-black font-bold" >Register</div>
          <input type= "text" placeholder="name" onChange={(e)=>setName(e.target.value)} className=""></input>
          <input type= "text" placeholder="surname" onChange={(e)=>setSurname(e.target.value)} className=""></input>
          <input type= "text" placeholder="username" onChange={(e)=>setUsername(e.target.value)} className=""></input>
          <input type= "text" placeholder="password" onChange={(e)=>setPassword(e.target.value)} className=""></input>
          <input type= "text" placeholder="email" onChange={(e)=>setEmail(e.target.value)} className=""></input>
          <button className="bg-black text-white px-10 py-3 rounded-2xl" onClick={handleRegister}> Register</button>
        </div>
    )
}