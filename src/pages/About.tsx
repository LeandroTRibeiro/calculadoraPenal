import image from "../assets/images/aboutImage2.png";
import { NavigationHeader } from "../components/NavigationHeader";
import { BookOpenText } from "@phosphor-icons/react";

export const About = () => {
    return (
        <div className="w-screen h-screen tablet-m:w-fit">
            <NavigationHeader />
            <main className="h-main tablet-m:h-fit px-10 mobile-g:px-3 py-5 flex justify-center items-center gap-5 tablet-m:flex-col tablet-m:gap-3">
                <div className="flex-1 flex flex-col gap-5 tablet-m:gap-3">
                    <h1 className="flex items-center gap-1 text-4xl laptop-p:text-2xl tablet-m:text-xl">
                        <BookOpenText />
                        Sobre
                    </h1>
                    <p className="laptop-p:text-sm tablet-m:text-xs">Esta aplicação foi desenvolvida por alunos da UNESC, incluindo Leandro Thiago Ribeiro, Keven e Isack Perovano, com o objetivo de demonstrar a aplicação prática do conteúdo de frações no campo da programação. Oferecendo uma solução eficaz para um problema específico, este projeto foi idealizado como parte de um trabalho exigido pela professora Louise Miron Roloff, da disciplina de Fundamentos Matemáticos do curso de Ciências da Computação. Buscamos unir conceitos matemáticos fundamentais com a inovação tecnológica.</p>
                    <p className="laptop-p:text-sm tablet-m:text-xs">Nossa aplicação ilustra como conceitos matemáticos, especificamente frações, podem ser aplicados no desenvolvimento de software, criando soluções que facilitam e otimizam processos e atendendo a necessidades específicas. Através deste trabalho, não apenas cumprimos com os requisitos acadêmicos, mas também proporcionamos uma ferramenta útil e prática, destacando a importância da matemática na programação e na resolução de problemas reais.</p>
                </div>
                <div className="flex-1 tablet-m:flex-initial p-10 tablet-m:p-5 mobile-g:p-3">
                    <img src={image} alt="calculadora penal team" />
                </div>
            </main>
        </div>
    );
};