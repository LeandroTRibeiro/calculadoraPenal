import { AlignRightSimple, BookOpenText, Calculator, Gavel, House, Scales } from "@phosphor-icons/react";
import { ModeToggle } from "./ui/mode-toggle";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

export const NavigationMenuHeaderMobile = () => {
    return(
        <header className="h-12 px-3 flex items-center justify-between border-b border-stone-400">
            <Link to='/' className="flex justify-center items-center gap-1">
                <Scales size={25} weight="regular" />
                <h1 className="font-normal text-base">
                    Calculadora
                    <span className="font-bold text-lg">Penal</span>
                </h1>
            </Link>
            <div className="flex items-center gap-3">
                <ModeToggle />
                <Sheet>
                    <SheetTrigger>
                        <AlignRightSimple size={30} />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col">
                            <Link to='/'>
                                <Button variant="ghost" className="flex items-center gap-5">
                                    <House size={25} />
                                    Home
                                </Button>
                            </Link>
                            <Link to="/about">
                                <Button variant="ghost" className="flex items-center gap-5">
                                    <BookOpenText size={25} />
                                    Sobre
                                </Button>
                            </Link>
                            <Link to="/calculator">
                                <Button variant="ghost"  className="flex items-center gap-5">
                                    <Calculator size={25} />
                                    Calculadora
                                </Button>
                            </Link>
                            <Link to="/dosimetria">
                                <Button variant="ghost"  className="flex items-center gap-5">
                                    <Gavel size={25} />
                                    Dosemetria Penal
                                </Button>
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};