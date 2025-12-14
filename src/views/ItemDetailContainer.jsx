import { useParams, useLocation, useNavigate, Link as RouterLink } from 'react-router-dom';
import { Button } from '@heroui/button';
import {Image} from "@heroui/image"
import {Divider} from "@heroui/divider";
import { useEffect, useState } from 'react';
import { getApi } from '../services/api';
import {Progress} from "@heroui/react";
import {addToast} from "@heroui/toast";
import {Table,TableHeader,TableBody,TableColumn,TableRow,TableCell} from "@heroui/table";

export default function ItemDetailContainer() {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [product, setProduct] = useState(location.state?.product || null);
    const [loading, setLoading] = useState(!product);

    useEffect(() => {
      if (!product) {
        getApi('/db/productos.json')
          .then(data => {
            const found = data.find(p => p.id === id);
            setProduct(found ?? null);
            setLoading(false);
          })
          .catch(() => setLoading(false));
      }
    }, [id, product]);

    if (loading) return <Progress isIndeterminate aria-label="Cargando..." className="max-w-md" size="sm" />;
    if (!product) return <p>Producto no encontrado</p>;

    return (
      <section>
        <div className='flex justify-between mb-4'>
          <h1 className='text-2xl font-bold'>{product.nombre}</h1>
          <Button onPress={() => navigate(-1)}>Volver</Button>
        </div>
        <div className='flex gap-8 flex-col md:flex-row mb-4'>
          <div className='basis-full md:basis-1/3'>
            <Image isBlurred alt={product.nombre} src={product.imagen} width="100%"/>
          </div>
          <div className='basis-full md:basis-2/3 flex flex-col justify-center'>
            <div className='flex justify-between'>
              <p className='font-bold'>{product.descripcionCorta}</p>
              <p>Categoria: {product.categoria}</p>
            </div>
            <Divider className="my-4" />
            <p className='text-2xl mb-4'>${product.precio} {product.moneda}</p>
            <p className='mb-4'>{product.descripcionLarga}</p>
            <Table removeWrapper aria-labelledby='detalle'>
              <TableHeader>
                <TableColumn>Tamaño</TableColumn>
                <TableColumn>Unidades disponibles</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key='1'>
                  <TableCell>{product.unidadMedida}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        <Button variant="solid" color='primary' fullWidth='true' onPress={() => {
                  addToast({
                    title: "Producto añadido",
                    description: `${product.nombre} ha sido añadido exitosamente al carrito.`,
                    color: "success",
                    icon: (<svg width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 fill-current"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 10l-2 -6" /><path d="M7 10l2 -6" /><path d="M11 20h-3.756a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.479 2.729" /><path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M15 19l2 2l4 -4" /></g></svg>),
                    endContent: (
                      <Button as={RouterLink} to='/' size="sm" variant="solid">
                        Carrito
                      </Button>
                    ),
                  });
                }}
              >Añadir a carrito
            </Button>
      </section>
    );
}