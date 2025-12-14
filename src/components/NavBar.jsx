import React, { useEffect } from "react";
import { Navbar,NavbarBrand, NavbarContent,NavbarItem, NavbarMenuToggle,NavbarMenu,NavbarMenuItem} from "@heroui/navbar";
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget.jsx'

function NavBar(){
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
    useEffect

    const menuItems = [
    {name: "Catálogo", link: "/"},
    {name: "Barra", link: "/categoria/barra"},
    {name: "Líquidos", link: "/categoria/liquidos"},
    {name: "Antibacteriales", link: "/categoria/antibacteriales"},
  ];

    return(
    <Navbar shouldHideOnScroll isBordered onMenuOpenChange={setIsMenuOpen}>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      <NavbarBrand>
        <p className="font-bold text-inherit">Tienda</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index)=>(
            <NavbarItem key={`${item.name}-${index}`}>
                <NavLink to={item.link} className={({ isActive }) => isActive ? 'text-primary font-bold' : 'text-foreground'}>
                    {item.name}
                </NavLink>
            </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <CartWidget />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <NavLink to={item.link} className={({ isActive }) => isActive ? 'text-primary font-bold w-full' : 'text-foreground w-full'}
                size="lg"
                >
                    {item.name}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    )
}

export default NavBar