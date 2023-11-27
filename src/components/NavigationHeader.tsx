import { useEffect, useState } from "react";
import { NavigationMenuHeaderDesktop } from "./NavigationMenuHeaderDesktop";
import { NavigationMenuHeaderMobile } from "./NavigationMenuHeaderMobile";

export const NavigationHeader = () => {

    const breakpoint = 600;

    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > breakpoint);

    useEffect(() => {

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);

    }, []);

    const handleResize = () => {
        setIsLargeScreen(window.innerWidth > breakpoint);
    };

    return (
        <>
            {isLargeScreen ? <NavigationMenuHeaderDesktop /> : <NavigationMenuHeaderMobile />}
        </>
    );
};