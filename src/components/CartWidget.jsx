import { Button } from '@heroui/button';
import { useContext } from 'react';
import { Link as RouterLink, useMatch } from 'react-router-dom';
import {CartContext} from '../context/CartContext'

function CartWidget(){
    const {cartList} = useContext(CartContext)
    const match = useMatch({ path: "/cart", end: true });
    const isActive = Boolean(match);

    return(
        <>
            <Button as={RouterLink} color={isActive ? "secondary" : "primary"} to='/cart' variant="solid" className="overflow-visible">
                Carrito{cartList.length>0&&<span className='bg-orange-300 px-2 rounded-md absolute right-[-10px]'>{cartList.length}</span>}
            </Button>
        </>
    )
}

export default CartWidget

