import { useState } from "react";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Gallery(){
    const [current, setCurrent] = useState(0);
    const images = [
    "https://picsum.photos/600/400?1",
    "https://picsum.photos/600/400?2",
    "https://picsum.photos/600/400?3",
    "https://picsum.photos/600/400?4",
    "https://picsum.photos/600/400?5",

    ]

    const next= () => setCurrent((current+1)%images.length);
    const previous= () => setCurrent((current-1+images.length)%images.length);
return(
    <div className="flex relative w-full h-96 items-center justify-center  overflow-hidden "> 
        {images.map((img,index)=>{

            const position =
             index === current ? "center" 
             : index === (current - 1 + images.length)%images.length ? "left"
             : index === (current + 1 + images.length)%images.length ? "right"
             : index === (current - 2 + images.length)%images.length ? "left2"
             : index === (current + 2 + images.length)%images.length ? "right2"
             : "hidden";

            return(
                <img 
                 key={index}
                 src={img}
                 className={`absolute transition-all duration-500 rounded-2xl shadow-xl
              ${position === "center" && "scale-100 opacity-100 z-20"}
              ${position === "left" && "scale-75 opacity-100 -translate-x-64 z-10"}
              ${position === "right" && "scale-75 opacity-100 translate-x-64 z-10"}
              ${position === "left2" && "scale-50 opacity-60 -translate-x-96 z-5"}
              ${position === "right2" && "scale-50 opacity-60 translate-x-96 z-5"}
              ${position === "hidden" && "scale-50 opacity-0"}
            `} />

            );

        })}
        <button
        onClick={previous}
        className="absolute left-10 bg-black/50 text-white px-4 py-2 rounded"
      >
        <FiChevronLeft size={24} />
      </button>

      <button
        onClick={next}
        className="absolute right-10 bg-black/50 text-white px-4 py-2 rounded"
      >
         <FiChevronRight size={24} />
      </button>
    </div>
)

}