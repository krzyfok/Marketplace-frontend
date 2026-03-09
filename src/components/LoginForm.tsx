import { useState } from "react";
import  { useAuth } from "../contexts/AuthContext"
import { loginRequest } from "../services/AuthService";
import toast from "react-hot-toast";
type Props = {
  onLoginSuccess: () => void;
};

export default function LoginForm({onLoginSuccess}: Props){
    const {login} =useAuth();

    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [error, setError] = useState("")
    const handleLogin = async ()=>
    {   setError("");
        try{
        const data = await loginRequest(username, password);
        login(data.token);
        onLoginSuccess();
        toast.success("Logged in Successfully");
        }
        catch (err:any)
        {
            if(err.response?.status == 401)
            {
                setError("Wrong password or username");
            }
            else{
                setError("ERROR");
            }
        }
       
    }


    return(

        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 z-30 bg-white py-10 rounded-2xl shadow-xl w-full max-w-md flex flex-col items-center justify-center gap-4 border-4 border-black">
          <div className="bg-white text-black px-10 py-3 rounded-2xl border-4 border-black font-bold" >LOG IN</div>
          <input type= "text" placeholder="username" onChange={(e)=>setUsername(e.target.value)} className=""></input>
          <input type= "text" placeholder="password" onChange={(e)=>setPassword(e.target.value)} className=""></input>
          <button className="bg-black text-white px-10 py-3 rounded-2xl" onClick={handleLogin}> Sign in</button>

          {error && <div className="bg-red-600 px-10 py-3 rounded-2xl text-white"> {error}</div>}
        </div>
    )
}