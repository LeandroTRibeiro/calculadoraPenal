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
import { DefinitiveSentence } from "@/components/DefinitiveSentence";

const tabs = [
    {value: "first-step", label: "Pena Base"},
    {value: "second-step", label: "Pena Intermediaria (Provisória)"},
    {value: "third-step", label: "Pena Definitiva"}
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
                                    <CardDescription>Primeiramente, identifique as penas mínima e máxima estipuladas no Código Penal para o crime específico. Lembre-se de verificar a presença de circunstâncias qualificadoras que possam modificar esses limites estabelecidos.</CardDescription>
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
                                <CardDescription>Nesta fase, a pena-base definida inicialmente é ajustada com base nas circunstâncias atenuantes e agravantes identificadas no contexto do delito cometido.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <IntermediateSentence handleNextStep={handleNextStep} />
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="third-step">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-primary">Pena Definitiva</CardTitle>
                                <CardDescription>Nesta etapa, a pena provisória, definida na segunda fase, é ajustada considerando as causas de aumento e diminuição previstas na legislação, resultando na pena final a ser aplicada ao réu.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <DefinitiveSentence />
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </main>
            <Footer />
        </div>
    );
};