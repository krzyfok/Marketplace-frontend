import Gallery from "../components/Gallery";
import { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
export default function Home() {

  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegitserForm, setShowRegiterForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white text-white p-4 font-sans" >
        <div className="flex flex-row justify-between" > 
          <div className="bg-white py-3 border-2 border-rounded border-black rounded-lg">
            <h1 className=" text-5xl text-black font-bold px-5"> Marketplace</h1> 
          </div> 
          <div className="flex gap-2">
            <button className="bg-black text-white hover:text-white px-5 text-black  px-10 text-3xl font-bold rounded-lg" onClick={() => setShowLoginForm(!showLoginForm)}>Log in</button>
            <button className="bg-black text-white hover:text-white px-5 text-black px-10 text-3xl font-bold rounded-lg"  onClick={()=>setShowRegiterForm(!showRegitserForm)}>Register</button>
            </div>
      </div> 
      </header>
      <main className="flex-1 mx-auto w-full px-40 py-10 bg-white">
        <section className="grid grid-cols-1 gap-20"> 
          <Gallery/>
          <section className="grid grid-cols-2 gap-20"> 
           <div className="bg-green-300 p-20 rounded-2xl shadow-2xl  hover:bg-green-400  "> 
            <h1 className="text-center">TEKST</h1>
          </div>
           <div className="bg-green-300 p-20 rounded-2xl shadow-2xl  hover:bg-green-400  "> 
            <h1 className="text-center">TEKST</h1>
          </div>
          </section>
          
          

        </section>


      </main>
      {showLoginForm && (
        <LoginForm onLoginSuccess={()=>setShowLoginForm(false)}/>

      )}
      {showRegitserForm &&(
        <RegisterForm/>
      )}
      <footer className="text-white mt-auto">
        <div className="bg-emerald-700 h-10 flex items-center justify-center">
          <a
            href="https://github.com/krzyfok"
            className="text-white  hover:text-green-300 font-bold"
          >
            @Krzyfok
          </a>
        </div>
      </footer>
    </div>
  );
}
