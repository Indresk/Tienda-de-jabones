import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import ItemListContainer from "../components/ItemListContainer";
import { getApi } from "../services/api";
import {Progress} from "@heroui/react";

function Catalog(){
    const {tipo} = useParams();
    const [products, setProducts] = useState([])
    const [productsShowed, setProductsShowed] = useState([])

    useEffect(()=>{
        getApi(`../../public/db/productos.json`)
        .then((data) => setProducts(data))
        .catch((error) => alert(error));
    },[])

    useEffect(() => {
        const filtered = tipo ? products.filter(p => p.categoria?.toLowerCase() === tipo.toLowerCase()): products;
        setProductsShowed(filtered);
    }, [products, tipo]);

    return(
        <>
            <div className="mb-2">
                <h1 className="text-xl">TIENDA DE JABONES</h1>
                <p>Adquiere tus jabones favoritos aquí.</p>
            </div>
            {products.length === 0?<Progress isIndeterminate aria-label="Loading..." className="max-w-md" size="sm" />:<ItemListContainer products={productsShowed} />}
            
        </>
    )
}

export default Catalog