import Gallery from "../components/Gallery";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
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
