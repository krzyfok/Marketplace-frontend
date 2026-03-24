import { useAuth } from "../contexts/AuthContext";
import { useState, Fragment } from "react";
import { Dialog, TransitionChild, Transition, DialogPanel } from "@headlessui/react";
import { Navigate, useNavigate } from "react-router-dom";

export function Navbar() {
  const { authView, openLogin, openRegister, closeAuth, username, logout } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

  const handleLogutClick = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <nav className="p-3 flex flex-row justify-between bg-green-300">
     <div className="flex gap-4">
        <button className="text-3xl  text-black font-bold w-48 h-16 border-2  border-rounded rounded-lg  border-black transition duration-150 active:shadow-inner active:scale-95"
         onClick={() => navigate("/")}
        >Marketplace</button>
      
        <button className="bg-white w-48 h-16 border-2 border-rounded border-black rounded-lg text-lg text-black font-bold  transition duration-150 active:shadow-inner active:scale-95"
        onClick={() => navigate("/catalog")}
        >All Products
        </button>
     </div>
      
      
      <div className="flex gap-2 items-center">
        {username ? (
          <>
            <button
              onClick={handleToggleMenu}
              className="relative inline-flex items-center justify-center p-8 w-10 h-10 rounded-full text-3xl text-white font-bold bg-black hover:text-black hover:bg-white transition duration-150 active:shadow-inner active:scale-95 "
            >
              {username[0].toUpperCase()}
            </button>

            <Transition appear show={isMenuOpen} as={Fragment}>
              <Dialog as="div" className="relative z-50" onClose={() => setIsMenuOpen(false)}>
                
                
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

                
                <div className="fixed inset-0 flex justify-end">
                  
                  
                  <TransitionChild
                    as={Fragment}
                    enter="transform transition ease-in-out duration-300"
                    enterFrom="translate-x-full" 
                    enterTo="translate-x-0"     
                    leave="transform transition ease-in-out duration-300"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"  
                  >
                    <DialogPanel className="w-80 bg-gray-800 text-white flex flex-col p-5 shadow-2xl h-full">
                      <div className="flex justify-end mb-8">
                        <button
                          onClick={() => setIsMenuOpen(false)}
                          className="bg-black text-white hover:text-black hover:bg-white  px-5 py-4 text-3xl font-bold rounded-lg transition duration-150 active:shadow-inner active:scale-95"
                        >
                          &times;
                        </button>
                      </div>
                      
                      <button
                        className="bg-black text-white hover:text-black hover:bg-white  px-5 py-4 text-3xl font-bold rounded-lg transition duration-150 active:shadow-inner active:scale-95"
                        onClick={handleLogutClick}
                      >
                        Log Out
                      </button>
                    </DialogPanel>
                  </TransitionChild>
                </div>
              </Dialog>
            </Transition>
          </>
        ) : (
          <>
            <button
              className="bg-black text-white hover:text-black hover:bg-white px-5 py-4 text-3xl font-bold rounded-lg transition duration-150 active:shadow-inner active:scale-95"
              onClick={handleLoginClick}
            >
              Log in
            </button>
            <button
              className="bg-black text-white hover:text-black hover:bg-white  px-5 py-4 text-3xl font-bold rounded-lg transition duration-150 active:shadow-inner active:scale-95"
              onClick={handleRegisterClick}
            >
              Register
            </button>
          </>
        )}
      </div>
    </nav>
  );
}