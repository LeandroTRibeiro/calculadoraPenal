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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BaseSentence } from "@/components/BaseSentence";

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
                                <CardTitle className="text-primary">Atenuantes</CardTitle>
                                <CardDescription>Inicialmente, é necessário identificar quais são as penas mínima e máxima previstas no código penal para o crime em questão, não se esqueça de verificar se existem circunstâncias qualificadoras que alterem esses limites mínimos e máximos.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form action="SUBMIT" className="flex flex-col gap-2" onSubmit={handleNextStep}>
                                    <div className="flex gap-2">
                                        <div className="flex-1">
                                            <Label htmlFor="max-penalty">Pena Máxima</Label>
                                            <Input 
                                                id="max-penalty" 
                                                type="number"
                                                className="" 
                                                placeholder="Digite a pena máxima"
                                            />  
                                        </div>
                                        <div className="flex-1">
                                            <Label htmlFor="min-penalty">Pena Mínima</Label>
                                            <Input 
                                                id="min-penalty" 
                                                type="number" 
                                                className="" 
                                                placeholder="Digite a pena mínima"
                                            />   
                                        </div>
                                    </div>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-base">Escolha o tipo de calculo<span className="text-primary text-lg font-bold cursor-pointer" title="Alguns tribunais tendem a aplicar o calculo da pena base usando a diferença entre a pena máxima e mínima, já outros ultilizam a pena mínima, isso varia de tribunal para tribunal.">*</span></CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <RadioGroup defaultValue="option-one">
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="option-one" id="option-one" />
                                                    <Label htmlFor="option-one">Calcular a partir da pena mínima.</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="option-two" id="option-two" />
                                                    <Label htmlFor="option-two">Calcular a partir da diferença da diferença da pena mínima para a máxima.</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="option-three" id="option-three" />
                                                    <Label htmlFor="option-three">Me de os dois resultados.</Label>
                                                </div>
                                            </RadioGroup>
                                        </CardContent>
                                    </Card>
                                    <Button>Proxima Fase</Button>
                                </form>
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