import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

export function Navbar() {
  const { authView, openLogin, openRegister, closeAuth, username, logout } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <nav className="p-3 flex flex-row justify-between">
      <div className="bg-white py-3 border-2 border-rounded border-black rounded-lg">
        <h1 className="text-5xl text-black font-bold px-5">Marketplace</h1>
      </div>

      <div className="flex gap-2 items-center">
        {username ? (
          <>
            <button
              onClick={handleToggleMenu}
              className="bg-black text-white hover:text-white py-4 px-10 text-3xl font-bold rounded-lg"
            >
              {username}
            </button>

            <div
              className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white z-50 flex flex-col p-5 shadow-2xl transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={handleToggleMenu}
                  className="text-white text-4xl font-bold hover:text-gray-400"
                >
                  &times;
                </button>
              </div>
              <button
                className="bg-black text-white hover:text-white py-4 px-10 text-3xl font-bold rounded-lg"
                onClick={handleLogutClick}
              >
                Log Out
              </button>
            </div>
          </>
        ) : (
          <>
            <button
              className="bg-black text-white hover:text-white px-5 py-4 text-3xl font-bold rounded-lg"
              onClick={handleLoginClick}
            >
              Log in
            </button>
            <button
              className="bg-black text-white hover:text-white px-5 py-4 text-3xl font-bold rounded-lg"
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