import  { useAuth } from "../contexts/AuthContext"

export function Navbar(){
    
 const { authView, openLogin, openRegister, closeAuth } = useAuth();

  const handleLoginClick = () => {
    if (authView === "login") {
      closeAuth(); 
    } else {
      openLogin(); 
    }
  };

  const handleRegisterClick = () => {
    if (authView === "register") {
      closeAuth(); 
    } else {
      openRegister(); 
    }
  };

    return(
            <nav className="p-3 flex flex-row justify-between">
                
                <div className="bg-white py-3 border-2 border-rounded border-black rounded-lg">
                    <h1 className=" text-5xl text-black font-bold px-5"> Marketplace</h1> 
                </div> 
                <div className="flex gap-2">
                    <button className="bg-black text-white hover:text-white px-5 text-black  px-10 text-3xl font-bold rounded-lg" 
                        onClick={handleLoginClick}
                        >Log in</button>
                    <button className="bg-black text-white hover:text-white px-5 text-black px-10 text-3xl font-bold rounded-lg" 
                        onClick={handleRegisterClick}
                        >Register</button>
                    </div>
            </nav>


    )
}