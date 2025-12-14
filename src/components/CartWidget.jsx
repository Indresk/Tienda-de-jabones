import { Button } from '@heroui/button';
import { Link as RouterLink } from 'react-router-dom';

function CartWidget(){
    return(
        <>
            <Button as={RouterLink} color="primary" to='/' variant="solid">
                Carrito
            </Button>
        </>
    )
}

export default CartWidget

