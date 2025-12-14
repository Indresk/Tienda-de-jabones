import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import { Link as RouterLink} from 'react-router-dom';
import { Image } from "@heroui/image";

function ItemListContainer({products}){
    return(
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
            {products.map((item) => (
                <Card as={RouterLink} to={`/product/${item.slug}`} state={{ product: item }} key={item.id} isPressable shadow="sm">
                <CardBody className="overflow-visible p-0">
                    <Image
                    alt={item.nombre}
                    className="w-full object-cover h-[140px]"
                    radius="lg"
                    shadow="sm"
                    src={item.img}
                    width="100%"
                    />
                </CardBody>
                <CardFooter className="text-small justify-between">
                    <b>{item.nombre}</b>
                    <p className="text-default-500">{item.precio} {item.moneda}</p>
                </CardFooter>
                </Card>
            ))}
        </div>
    )
}

export default ItemListContainer