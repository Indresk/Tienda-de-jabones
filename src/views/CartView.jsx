import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Card, CardBody, Image, Button } from "@heroui/react";
import { Link } from "react-router-dom";

export default function CartView(){
    const {cartList,addItem,removeItem,clear,removeQuantity} = useContext(CartContext);

    return(
        <section>
            <title>Carrito | Tienda de jabones</title>
            <meta name="description" content="Tu tienda de jabones de confianza, siempre a tu disposición" />
            <div className="flex justify-between pb-4 mb-4 border-b border-divider">
                <h2 className="text-3xl font-bold">Carrito</h2>
                <Button onPress={()=>{clear()}} >Limpiar</Button>
            </div>
            
            
            {cartList.length !== 0?
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col gap-4 p-4 max-h-[60vh] overflow-auto order-3 md:order-1">         
                    {cartList.map((item)=>(
                        <Card key={item.id} className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] shrink-0" shadow="sm">
                            <CardBody>
                                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                                    <div className="relative col-span-6 md:col-span-4">
                                        <Image alt={item.nombre} className="object-cover" height={200} shadow="md" src={item.imagen} width="100%"/>
                                    </div>
                                    <div className="flex flex-col col-span-6 md:col-span-8 h-full gap-4 md:gap-0">
                                        <div className="flex justify-between items-center grow flex-col md:flex-row">
                                            <div>
                                            <h3 className="text-large font-medium">{item.nombre}</h3>
                                            <p>${item.precio*item.userQuantity} COP</p>
                                            </div>
                                            <div className="flex justify-center items-center">
                                                <Button isIconOnly color="none" onPress={()=>item.userQuantity>1?removeQuantity(item.id):removeItem(item.id)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /></svg></Button>
                                                <div className="flex flex-col justify-center">
                                                    <p className="font-bold text-5xl text-center">{item.userQuantity}</p>
                                                    <p className="text-small text-foreground/80">Unidades</p>
                                                </div>
                                                <Button isIconOnly color="none" onPress={()=>addItem(item)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg></Button>
                                            </div>
                                        </div>
                                        <div className="flex justify-between gap-4 flex-col md:flex-row">
                                            <Button fullWidth={true} onPress={()=>removeItem(item.id)}>Eliminar del carrito</Button>
                                            <Button as={Link} to={`/product/${item.slug}`} fullWidth={true} color="primary">Ver producto</Button>
                                        </div>  
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                    </div>
                    <aside className="flex border-b border-divider md:border-l md:border-b-0 p-4 order-2 items-center">
                        <div className="flex flex-col gap-4 w-full">
                            <h2 className="text-4xl font-bold">Completa tu compra</h2>
                            <p className="mb-4">Aseguremonos que tienes todo lo que buscas:</p>
                            <div className="p-4 bg-default rounded-lg">
                                <ul className="list-disc list-inside">
                                    <li>{cartList.length} diferentes productos.</li>
                                    <li>{cartList.reduce((acc,current)=>acc+current.userQuantity,0)} productos en total.</li>
                                </ul>
                                <p className="text-lg"><span className="text-5xl">${cartList.reduce((acc,current)=>acc+current.precio*current.userQuantity,0)}</span> precio total.</p>
                            </div>
                            <Button as={Link} color="primary" fullWidth>Comprar</Button>
                        </div>
                    </aside>
                </div>:
                <div>
                    <div className="flex justify-around items-center">
                        <h3 className="mb-4 text-4xl font-bold">Ups...</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" className="basis-[20%]" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a8 8 0 0 1 7.996 7.75l.004 .25l-.001 6.954l.01 .103a2.78 2.78 0 0 1 -1.468 2.618l-.163 .08c-1.053 .475 -2.283 .248 -3.129 -.593l-.137 -.146a.65 .65 0 0 0 -1.024 0a2.65 2.65 0 0 1 -4.176 0a.65 .65 0 0 0 -.512 -.25c-.2 0 -.389 .092 -.55 .296a2.78 2.78 0 0 1 -4.859 -2.005l.008 -.091l.001 -6.966l.004 -.25a8 8 0 0 1 7.996 -7.75zm2.82 10.429a1 1 0 0 0 -1.391 -.25a2.5 2.5 0 0 1 -2.858 0a1 1 0 0 0 -1.142 1.642a4.5 4.5 0 0 0 5.142 0a1 1 0 0 0 .25 -1.392zm-4.81 -4.429l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993zm4 0l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993z" /></svg>
                    </div>
                <p className="mb-4">Parece que aún no tienes productos cargados en el carrito.</p>
                <Button as={Link} to="/" className="w-full" color="primary">Regresar al catálogo</Button>
                </div>}
        </section>
    )
}