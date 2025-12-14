import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@heroui/button';
import { useEffect, useState } from 'react';
import { getApi } from '../services/api';
import {Progress} from "@heroui/react";

export default function ProductDetail() {
    const { slug } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [product, setProduct] = useState(location.state?.product || null);
    const [loading, setLoading] = useState(!product);

    useEffect(() => {
      if (!product) {
        getApi('/db/productos.json')
          .then(data => {
            const found = data.find(p => p.slug === slug);
            setProduct(found ?? null);
            setLoading(false);
          })
          .catch(() => setLoading(false));
      }
    }, [slug, product]);

    if (loading) return <Progress isIndeterminate aria-label="Loading..." className="max-w-md" size="sm" />;
    if (!product) return <p>Producto no encontrado</p>;

    return (
      <div>
        <Button onPress={() => navigate(-1)}>Volver</Button>
        <h1>{product.nombre}</h1>
        <img src={product.imagen} alt={product.nombre} />
        <p>{product.descripcionCorta}</p>
        <p>{product.precio} {product.moneda}</p>
        <p>{product.descripcionLarga}</p>
      </div>
    );
}