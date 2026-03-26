import type { Product } from "../../../types/product";

export default function ProductCard({product}:{product : Product}){


    return(


        <div className="p-5 bg-green-200 hover:scale-105 border-4 border-black rounded-2xl" key={product.id} > 
            <h1 className="text-xl"> {product.name.toUpperCase()}</h1>
            <h2>{product.model}</h2>
            <h2>{product.price}</h2>
        </div>
    )
}