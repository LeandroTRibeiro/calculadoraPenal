import { Link } from "react-router-dom";
import { GithubLogo } from "@phosphor-icons/react";

export const Footer = () => {
    return (
        <footer className="h-7 mobile-g:h-5 flex items-center justify-end gap-1 px-5 mobile-g:px-3"> 
            <p className="flex items-center gap-1 text-xs">
                powered by
                <Link to="https://github.com/LeandroTRibeiro" target="_blank" className="flex items-center gap-1 font-medium transition-colors ease-in-out duration-200 hover:text-stone-700"> Leandro Thiago Ribeiro <GithubLogo size={18} /></Link>
            </p>
        </footer>
    );
};