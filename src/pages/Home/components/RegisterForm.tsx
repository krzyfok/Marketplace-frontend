import { useState, Fragment  } from "react";
import { registerRequest } from "../../../services/AuthService";
import { useAuth } from "../../../contexts/AuthContext";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";

export default function RegisterForm(){
    
    const {login,authView, closeAuth} = useAuth();
    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email,setEmail] = useState("");
    const [error, setError] = useState("")

    const handleRegister = async (e: React.ChangeEvent)=>
    {
        e.preventDefault();
        setError("");
    try{
        const data = await registerRequest(name, surname,email, username, password);
        login(data.token, data.username);
        closeAuth();

    }
     catch (err:any)
        {
        setError("ERROR");   
        }
    }

     const isOpen = authView === "register";

 
    return (
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={closeAuth}>
            
           
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/50" />
            </TransitionChild>
    
           
            <div className="fixed inset-0 flex items-center justify-center p-4">
              
           
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-700"
                enterFrom="opacity-0 scale-10 -translate-y-10" 
                enterTo="opacity-100 scale-100 translate-y-0"  
                leave="ease-in duration-700"
                leaveFrom="opacity-100 scale-10 translate-y-0"
                leaveTo="opacity-0 scale-95 -translate-y-10"
              >
               
                <DialogPanel className="bg-white py-10 rounded-2xl shadow-xl w-full max-w-md flex flex-col items-center justify-center gap-4 border-4 border-black">
                  
                  <h2 className="text-3xl font-bold mb-4">Register</h2>
    
                
                  <form onSubmit={handleRegister} className="flex flex-col gap-4 w-3/4">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="name"
                      onChange={(e) => setName(e.target.value)}
                      className="border-2 border-gray-300 p-3 rounded-lg"
                      required
                    />
                    <input
                      id="surname"
                      name="surname"
                      type="text"
                      autoComplete="surname"
                      placeholder="surname"
                      onChange={(e) => setSurname(e.target.value)}
                      className="border-2 border-gray-300 p-3 rounded-lg"
                      required
                    />
                    <input
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="username"
                      placeholder="username"
                      onChange={(e) => setUsername(e.target.value)}
                      className="border-2 border-gray-300 p-3 rounded-lg"
                      required
                    />
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      placeholder="password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="border-2 border-gray-300 p-3 rounded-lg"
                      required
                    />
                    <input
                      id="email"
                      name="email"
                      type="text"
                      autoComplete="email"
                      placeholder="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-2 border-gray-300 p-3 rounded-lg"
                      required
                    />
                    <button 
                      type="submit" 
                      className="bg-black text-white px-10 py-3 rounded-2xl hover:text-black hover:bg-white transition duration-150 active:shadow-inner active:scale-95 active:border-4  border-4 border-black"
                    >
                      REGISTER
                    </button>
                  </form>
    
                  {error && (
                    <div className="bg-red-600 px-10 py-3 rounded-2xl text-white font-bold w-3/4 text-center mt-2">
                      {error}
                    </div>
                  )}
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>
      );
}