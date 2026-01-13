import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import ItemListContainer from "../components/ItemListContainer";
import { getApi } from "../services/api";
import {Progress} from "@heroui/react";
import { addFireData, getFireData } from "../services/firebase";

function Catalog(){
    const {tipo} = useParams();
    const [products, setProducts] = useState([])
    const [productsShowed, setProductsShowed] = useState([])

    useEffect(()=>{
        getFireData()
        .then((data) => {setProducts(data)})
        .catch((error) => alert(error));
    },[]
)

    useEffect(() => {
        const filtered = tipo ? products.filter(p => p.categoria?.toLowerCase() === tipo.toLowerCase()): products;
        setProductsShowed(filtered);
    }, [products, tipo]);

    return(
        <>
            <title>Tienda de jabones | Todo en jabones para tu hogar</title>
            <meta name="description" content="Jabones en barra, líquidos, antibacteriales. Todos al mejor precio y con el sello de calidad de nuestra Tienda de jabones." />
            <div className="mb-2">
                <h1 className="text-3xl font-bold">TIENDA DE JABONES</h1>
                <p>Adquiere tus jabones favoritos aquí.</p>
            </div>
            {products.length === 0?<Progress isIndeterminate aria-label="Loading..." className="max-w-md" size="sm" />:<ItemListContainer products={productsShowed} />}
            
        </>
    )
}

export default Catalog