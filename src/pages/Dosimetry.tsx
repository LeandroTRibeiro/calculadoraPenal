import { Gavel } from "@phosphor-icons/react";
import image from "../assets/images/desimetryImage.png";
import { NavigationHeader } from "../components/NavigationHeader";

export const Dosimetry = () => {
    return (
        <div className="w-screen h-screen">
        <NavigationHeader />
        <main className="h-main tablet-m:h-fit px-10 mobile-g:px-3 py-5 flex justify-center items-center gap-5 tablet-m:flex-col tablet-m:gap-3">
            <div className="flex-1 flex flex-col gap-5 tablet-m:gap-3">
                <h1 className="flex items-center gap-1 text-4xl laptop-p:text-2xl tablet-m:text-xl">
                    <Gavel />
                    Dosemetria Penal
                </h1>
                <p className="laptop-p:text-sm tablet-m:text-xs">A dosimetria penal é o processo utilizado pelos tribunais para determinar a extensão da pena a ser aplicada a um indivíduo condenado por um crime. Esse método envolve várias etapas, começando com a definição de uma pena base com base nos limites estabelecidos pela legislação. A pena é então ajustada levando em conta fatores agravantes e atenuantes, bem como outras circunstâncias específicas do caso. O objetivo da dosimetria penal é assegurar que a pena seja proporcional à gravidade do delito e às circunstâncias individuais do réu, promovendo assim a justiça e a equidade no sistema penal.</p>
            </div>
            <div className="flex-1 tablet-m:flex-initial p-10 tablet-m:p-5 mobile-g:p-3">
                <img src={image} alt="books" />
            </div>
        </main>
    </div>
    );
};