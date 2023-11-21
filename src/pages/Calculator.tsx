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
import { useAppSelector } from "@/hooks/useAppSelector";
import { convertToTotalDays } from "@/helpers/calculateResults";
import { useToast } from "@/components/ui/use-toast";

const tabs = [
    {value: "first-step", label: "Pena Base"},
    {value: "second-step", label: "Pena Intermediaria (Provisória)"},
    {value: "third-step", label: "Pena Definitiva"}
];

export const Calculator = () => {

    const { toast } = useToast();

    const baseSentenceReducer = useAppSelector( state => state.baseSentenceReducer );

    const [step, setStep] = useState(tabs[0].value);

    const handleNextStep = (index: number) => {
        setStep(tabs[index].value);
    };

    const handleTabClick = (nextStep: string) => {

        const minDays = convertToTotalDays(baseSentenceReducer.minSentence);

        const maxDays = convertToTotalDays(baseSentenceReducer.maxSentence);

        if(!minDays || !maxDays) {
            toast({
                title: "Campos Incompletos",
                description: "Por favor, preencha as penas mínima e máxima antes de prosseguir.",
            });
            return;
        };
        if(maxDays < minDays) {
            toast({
                title: "Erro na Definição da Pena",
                description: "A pena máxima não pode ser menor que a pena mínima. Por favor, revise os valores inseridos.",
            });
            return;
        };
        setStep(nextStep);
    };

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
                                <BaseSentence handleNextStep={() => handleNextStep(1)} />
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
                                <IntermediateSentence handleNextStep={() => handleNextStep(2)} />
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