import { Divider } from "@heroui/divider";
import { NavLink,Link } from 'react-router-dom'
import { Button } from "@heroui/button";

function Footer({menuItems}){
    return(
        <footer>
            <Divider className="mb-4"/>
            <div className="max-w-5xl md:mx-auto flex ml-8 mr-8 mb-8 gap-8 flex-col md:flex-row justify-around items-center">
                <div className="w-full flex justify-around items-center">
                    <p className="font-bold text-2xl">Tienda</p>
                    <div>
                        <ul>
                            {menuItems.map((item, index) => (
                            <li key={`${item.name}-${index}`}>
                                <NavLink to={item.link} className={({ isActive }) => isActive ? 'text-primary font-bold w-full' : 'text-foreground w-full'} size="lg">
                                        {item.name}
                                </NavLink>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Button as={Link} to='/' size="lg" variant="solid" className="w-full md:w-1/3" color="primary">
                    Carrito
                </Button>
            </div>
        </footer>
    )
}

export default Footer