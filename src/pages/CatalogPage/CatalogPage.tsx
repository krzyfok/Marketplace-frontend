import { useEffect, useState } from "react"
import { getAllProducts } from "../../services/ProductService";
import type { Product } from "../../types/product";
export default function CatalogPage (){

    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(()=>{
        const fetchProducts = async() => {
            try{
                const response = await getAllProducts();
                
                setProducts(response.products);
            }
             catch (err:any)
            {
                setError("ERROR");   
            }
            setIsLoading(false);

        };
        fetchProducts();
    },[])


    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {products.map((product)=>(

            <div key={product.id}> {product.name} </div>
           ))}     
        </div>
    )
}