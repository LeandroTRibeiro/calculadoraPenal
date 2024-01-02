import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { Scales } from "@phosphor-icons/react";
import { BackgroundVideo } from "../components/BackgroundVideo";
import { NavigationHeader } from "../components/NavigationHeader";

export const Home = () => {
    return (
        <div className="w-screen h-full">
            <NavigationHeader />
            <BackgroundVideo />
            <main className="h-main mobile-g:h-main-mobile flex items-center px-10 mobile-g:px-3 tablet-m:flex-col-reverse tablet-m:justify-center">
                <div className="flex-1 mobile-g:flex-2 flex flex-col gap-5">
                    <div className="flex flex-col gap-5 laptop-p:gap-3 mobile-g:gap-2 mobile-m:gap-1">
                        <h2 className="text-xl tablet-m:text-lg mobile-m:text-sm font-semibold">Bem-Vindo(a) à Calculadora Penal!</h2>
                        <p className="text-base tablet-m:text-xs">A Calculadora Penal é uma ferramenta projetada para auxiliar profissionais, estudantes e entusiastas do Direito Penal. Esta plataforma digital busca facilitar e agilizar o processo de cálculo de penas, proporcionando resultados precisos e confiáveis de maneira rápida e intuitiva.</p>
                        <h3 className="text-xl tablet-m:text-lg mobile-m:text-sm font-semibold">Como Funciona?</h3>
                        <p className="text-base tablet-m:text-xs">Basta inserir os dados necessários nos campos correspondentes, e a Calculadora Penal irá guiá-lo através das etapas da dosimetria penal, desde a pena base até a pena definitiva. Além disso, você pode contar com recursos adicionais e dicas úteis para entender melhor cada fase do cálculo.</p>
                        <p className="text-base tablet-m:text-xs">Explore e experimente a Calculadora Penal hoje mesmo e descubra como podemos facilitar o seu dia a dia no universo do Direito Penal!</p>
                    </div>
                    <div className="flex gap-5 mobile-g:gap-3">
                        <Link to="/calculator">
                            <Button>Calculadora</Button>
                        </Link>
                        <Link to="/dosimetria">
                            <Button variant="outline">Dosimetria Penal</Button>
                        </Link>
                    </div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center tablet-m:flex-row">
                    <Scales className="text-7xl tablet-m:text-5xl mobile-g:text-4xl" weight="thin"/>
                    <h1 className="text-6xl tablet-m:text-4xl mobile-g:text-3xl">Calculadora</h1>
                    <span className="text-6xl tablet-m:text-4xl mobile-g:text-3xl font-extrabold">Penal</span>
                </div>
            </main>
        </div>
    );
};