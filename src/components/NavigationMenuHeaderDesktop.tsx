import { Scales } from "@phosphor-icons/react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ui/mode-toggle";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const NavigationMenuHeaderDesktop = () => {
    return(
        <header className="h-14 px-5 flex items-center justify-between border-b border-stone-400">
            <Link to='/' className="flex justify-center items-center gap-1">
                <Scales size={25} weight="regular" />
                <h1 className="font-normal text-lg">
                    Calculadora
                    <span className="font-bold text-xl">Penal</span>
                </h1>
            </Link>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link to="/about">
                            <Button variant="ghost">Sobre</Button>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to="/calculator">
                            <Button variant="ghost">Calculadora</Button>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to="/dosimetria">
                            <Button variant="ghost">Dosemetria Penal</Button>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <ModeToggle />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
};