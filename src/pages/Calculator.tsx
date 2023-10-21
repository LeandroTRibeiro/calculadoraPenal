import { useState } from "react";
import { Footer } from "../components/Footer";
import { NavigationMenuHeader } from "@/components/NavigationMenuHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { BaseSentence } from "@/components/BaseSentence";
import { IntermediateSentence } from "@/components/IntermediateSentence";

const tabs = [
    {value: "first-step", label: "Pena Base"},
    {value: "second-step", label: "Pena Intermediaria (Provisória)"},
    {value: "third-step", label: "3ª Fase"}
];

export const Calculator = () => {

    const [step, setStep] = useState(tabs[0].value);

    const handleNextStep = () => setStep(tabs[1].value);

    const handleTabClick = (nextStep: string) => setStep(nextStep);

    return (
        <div className="">
            <NavigationMenuHeader />
            <main className="h-main flex justify-center px-10 py-2">
                <Tabs value={step} className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                        {tabs.map((tab) => (
                            <TabsTrigger 
                                key={tab.value} 
                                value={tab.value}
                                onClick={() => handleTabClick(tab.value)}
                            >
                                {tab.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    <TabsContent value="first-step">
                        <Card>
                            <div className="flex">
                                <CardHeader className="flex-1">
                                    <CardTitle className="text-primary">Pena Base</CardTitle>
                                    <CardDescription>Inicialmente, é necessário identificar quais são as penas mínima e máxima previstas no código penal para o crime em questão, não se esqueça de verificar se existem circunstâncias qualificadoras que alterem esses limites mínimos e máximos.</CardDescription>
                                </CardHeader>
                            </div>
                            <CardContent>
                                <BaseSentence handleNextStep={handleNextStep} />
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="second-step">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-primary">Pena Intermediaria (Provisória)</CardTitle>
                                <CardDescription>Nesta etapa, a pena-base, estabelecida na primeira fase, será aumentada ou diminuída conforme as circunstâncias atenuantes e agravantes presentes no caso concreto.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <IntermediateSentence handleNextStep={handleNextStep} />
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="third-step">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, molestiae aspernatur omnis quis voluptates, nulla accusantium maxime eveniet quia eius fugiat. Quibusdam perspiciatis iure dolor reiciendis libero facilis voluptatum suscipit.
                    </TabsContent>
                </Tabs>
            </main>
            <Footer />
        </div>
    );
};