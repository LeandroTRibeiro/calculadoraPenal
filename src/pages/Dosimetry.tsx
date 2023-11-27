import image from "../assets/images/desimetryImage.png";
import { NavigationHeader } from "../components/NavigationHeader";

export const Dosimetry = () => {
    return (
        <div className="w-screen h-screen">
        <NavigationHeader />
        <main className="h-main px-10 py-5 flex justify-center items-center gap-5">
            <div className="flex-1 flex flex-col gap-5">
                <p className="text-lg">A dosimetria penal é o processo utilizado pelos tribunais para determinar a extensão da pena a ser aplicada a um indivíduo condenado por um crime. Esse método envolve várias etapas, começando com a definição de uma pena base com base nos limites estabelecidos pela legislação. A pena é então ajustada levando em conta fatores agravantes e atenuantes, bem como outras circunstâncias específicas do caso. O objetivo da dosimetria penal é assegurar que a pena seja proporcional à gravidade do delito e às circunstâncias individuais do réu, promovendo assim a justiça e a equidade no sistema penal.</p>
            </div>
            <div className="flex-1 flex justify-center items-center p-10">
                <img src={image} alt="books" className="max-w-md"/>
            </div>
        </main>
    </div>
    );
};