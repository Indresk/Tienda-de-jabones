import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import { Link as RouterLink} from 'react-router-dom';
import { Image } from "@heroui/image";

function ItemListContainer({products}){
    return(
        <div className="gap-2 grid grid-cols-1 sm:grid-cols-3">
            {products.map((item) => (
                <Card as={RouterLink} to={`/product/${item.id}`} state={{ product: item }} key={item.id} isPressable shadow="sm">
                <CardHeader><p className="font-bold">{item.nombre}</p></CardHeader>
                <CardBody className="overflow-visible p-0">
                    <Image
                    alt={item.nombre}
                    className="w-full object-cover h-[340px]"
                    radius="lg"
                    shadow="sm"
                    src={item.imagen}
                    width="100%"
                    />
                </CardBody>
                <CardFooter className="text-small justify-between flex-wrap">
                    <p>Más info +</p>
                    <p className="text-default-500">${item.precio} {item.moneda}</p>
                </CardFooter>
                </Card>
            ))}
        </div>
    )
}

export default ItemListContainer