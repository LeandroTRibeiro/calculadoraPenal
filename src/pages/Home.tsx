import { NavigationMenuHeader } from "@/components/navigation-menu-header";
import { Button } from "@/components/ui/button";
import dashboardImage from "/light-theme.png";
import { Footer } from "@/components/footer";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className="w-screen h-screen">
            <NavigationMenuHeader />
            <main className="h-main flex items-center px-10 py-5 gap-5">
                <div className="flex-1 flex flex-col gap-5">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-xl font-semibold">Bem-Vindo(a) à Calculadora Penal!</h2>
                        <p>A Calculadora Penal é uma ferramenta projetada para auxiliar profissionais, estudantes e entusiastas do Direito Penal. Esta plataforma digital busca facilitar e agilizar o processo de cálculo de penas, proporcionando resultados precisos e confiáveis de maneira rápida e intuitiva.</p>
                        <h3 className="text-xl font-semibold">Como Funciona?</h3>
                        <p>Basta inserir os dados necessários nos campos correspondentes, e a Calculadora Penal irá guiá-lo através das etapas da dosimetria penal, desde a pena base até a pena definitiva. Além disso, você pode contar com recursos adicionais e dicas úteis para entender melhor cada fase do cálculo.</p>
                        <p>Explore e experimente a Calculadora Penal hoje mesmo e descubra como podemos facilitar o seu dia a dia no universo do Direito Penal!</p>
                    </div>
                    <div className="flex gap-5">
                        <Link to="/calculator">
                            <Button>Calculadora</Button>
                        </Link>
                        <Link to="/dosimetria">
                            <Button variant="outline">Dosemetria Penal</Button>
                        </Link>
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <img src={dashboardImage} alt="image" className="max-w-md"/>
                </div>
            </main>
            <Footer />
        </div>
    );
};