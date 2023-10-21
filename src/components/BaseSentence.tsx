import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";

type BaseSentenceProps = {
    handleNextStep: () => void;
};

type JudicialCircumstancesType = {
    [key: string]: {
        value: boolean;
        label: string;
    }
};

export const BaseSentence = (props: BaseSentenceProps) => {

    const [minSentence, setMinSentence] = useState({
        years: 0,
        months: 0,
        days: 0
    });
    const [maxSentence, setMaxSentence] = useState({
        years: 0,
        months: 0,
        days: 0
    });
    
    const [optionSelectedCalc, setOptionSelectedCalc] = useState("option-one");

    const [editCircumstanceWeight, setEditCircumstanceWeight] = useState(false);

    const [circumstancesWeight, setCircumstancesWeight] = useState({
        numerator: 1,
        denominator: 8
    });

    const [judicialCircumstances, setJudicialCircumstances] = useState<JudicialCircumstancesType>({
        criminalRecord: { 
            value: false, label: "Antecedentes" 
        },
        socialConduct: { 
            value: false, label: "Conduta Social" 
        },
        personality: { 
            value: false, label: "Personalidade" 
        },
        culpability: { 
            value: false, label: "Culpabilidade" 
        },
        crimeMotive: { 
            value: false, label: "Motivo do Crime" 
        },
        crimeCircumstances: { 
            value: false, label: "Circunstâncias do Crime" 
        },
        crimeConsequences: { 
            value: false, label: "Consequência do Crime" 
        },
        victimBehavior: { 
            value: false, label: "Comportamento da Vítima" 
        }
    });

    const handleMinSentence = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMinSentence(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleMaxSentence = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxSentence(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleCircustancesWeight = (weight: string) => {

        switch(weight) {
            case "weight-one":
                setEditCircumstanceWeight(false);
                setCircumstancesWeight({
                    numerator: 1,
                    denominator: 8
                });
                break;
            case "weight-two":
                setEditCircumstanceWeight(false);
                setCircumstancesWeight({
                    numerator: 1,
                    denominator: 6
                });
                break;
            case "weight-three":
                setEditCircumstanceWeight(true);
                setCircumstancesWeight({
                    numerator: 0,
                    denominator: 0
                });
                break;
        };

    };

    const handleEditCircumstancesWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCircumstancesWeight(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleJudicialCircunstances = (key: string) => {
        setJudicialCircumstances(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                value: !prevState[key].value
            }
        }));
    };

    return (

        <form className="flex flex-col gap-5" onSubmit={ e => e.preventDefault() }>
            <div className="flex gap-2">
                <Card className="flex-1">
                    <CardHeader>
                        <CardTitle className="text-base">Pena mínima:</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Label htmlFor="min-sentence-year" className="cursor-pointer">Anos:</Label>
                        <Input 
                            id="min-sentence-year"
                            name="years" 
                            type="number" 
                            className="" 
                            placeholder="Digite os anos da pena mínima"
                            value={minSentence.years ? minSentence.years : ""}
                            onChange={e => handleMinSentence(e)}
                        />  
                        <Label htmlFor="min-sentence-month" className="cursor-pointer">Meses:</Label>
                        <Input 
                            id="min-sentence-month"
                            name="months" 
                            type="number" 
                            className="" 
                            placeholder="Digite os meses da pena mínima"
                            value={minSentence.months ? minSentence.months : ""}
                            onChange={e => handleMinSentence(e)}
                        />
                        <Label htmlFor="min-sentence-days" className="cursor-pointer">Dias:</Label>
                        <Input 
                            id="min-sentence-days"
                            name="days" 
                            type="number" 
                            className="" 
                            placeholder="Digite os dias da pena mínima"
                            value={minSentence.days ? minSentence.days : ""}
                            onChange={e => handleMinSentence(e)}
                        />     
                    </CardContent>
                </Card>
                <Card className="flex-1">
                    <CardHeader>
                        <CardTitle className="text-base">Pena máxima:</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Label htmlFor="max-sentence-year" className="cursor-pointer">Anos:</Label>
                        <Input 
                            id="max-sentence-year"
                            name="years" 
                            type="number" 
                            className="" 
                            placeholder="Digite os anos da pena máxima"
                            value={maxSentence.years ? maxSentence.years : ""}
                            onChange={e => handleMaxSentence(e)}
                        />  
                        <Label htmlFor="max-sentence-month" className="cursor-pointer">Meses:</Label>
                        <Input 
                            id="max-sentence-month"
                            name="months" 
                            type="number" 
                            className="" 
                            placeholder="Digite os meses da pena máxima"
                            value={maxSentence.months ? maxSentence.months : ""}
                            onChange={e => handleMaxSentence(e)}
                        />
                        <Label htmlFor="max-sentence-days" className="cursor-pointer">Dias:</Label>
                        <Input 
                            id="max-sentence-days"
                            name="days" 
                            type="number" 
                            className="" 
                            placeholder="Digite os dias da pena máxima"
                            value={maxSentence.days ? maxSentence.days : ""}
                            onChange={e => handleMaxSentence(e)}
                        />     
                    </CardContent>
                </Card>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle className="text-base">Escolha o tipo de calculo</CardTitle>
                    <CardDescription>Alguns tribunais tendem a calcular a pena base usando a pena mínima, enquanto outros utilizam o intervalo entre a pena mínima e máxima. Há também aqueles que consideram o intervalo entre a pena mínima e a média entre elas. Essa abordagem pode variar de acordo com cada tribunal.</CardDescription>
                </CardHeader>
                <CardContent>
                    <RadioGroup 
                        value={optionSelectedCalc} 
                        onValueChange={s => setOptionSelectedCalc(s)}
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-one" id="option-one"
                            />
                            <Label htmlFor="option-one" className="cursor-pointer">Calcular a partir da pena mínima.</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-two" id="option-two"
                            />
                            <Label htmlFor="option-two" className="cursor-pointer">Calcular a partir do intervalo entre a pena mínima e a máxima.</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-three" id="option-three" />
                            <Label htmlFor="option-three" className="cursor-pointer">Calcular a partir do intervalo entre a pena mínima e a média entre elas.</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-four" id="option-four" />
                            <Label htmlFor="option-four" className="cursor-pointer">Calcular todos os tipos.</Label>
                        </div>
                    </RadioGroup>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="text-base">Peso das Circunstâncias Judiciais</CardTitle>
                    <CardDescription>O "peso das circunstâncias judiciais" refere-se à influência que elas possuem ao ampliar ou reduzir a pena base. No entanto, não há uma convenção uniforme sobre o peso exato atribuído a elas, podendo variar de um tribunal para outro.</CardDescription>
                </CardHeader>
                <CardContent>
                    <RadioGroup 
                        defaultValue="weight-one" 
                        onValueChange={(weight) => handleCircustancesWeight(weight)}
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="weight-one" id="weight-one" />
                            <Label htmlFor="weight-one" className="cursor-pointer">Peso 1/8</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="weight-two" id="weight-two" />
                            <Label htmlFor="weight-two" className="cursor-pointer">Peso 1/6</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="weight-three" id="weight-three" />
                            <Label htmlFor="weight-three" className="cursor-pointer">Peso Personalizado</Label>
                        </div>
                    </RadioGroup>
                    {editCircumstanceWeight &&
                        <>
                            <Label htmlFor="numerator" className="cursor-pointer">Numerador:</Label>
                            <Input 
                                id="numerator"
                                name="numerator"
                                type="number" 
                                className="" 
                                placeholder="Digite o valor do numerador"
                                value={circumstancesWeight.numerator ? circumstancesWeight.numerator : ""}
                                onChange={handleEditCircumstancesWeight}
                                min={1}
                                required
                            />
                            <Label htmlFor="denominator" className="cursor-pointer">Denominador:</Label>
                            <Input 
                                id="denominator" 
                                name="denominator"
                                type="number" 
                                className="" 
                                placeholder="Digite o valor do denominador"
                                value={circumstancesWeight.denominator ? circumstancesWeight.denominator : ""}
                                onChange={handleEditCircumstancesWeight}
                                min={1}
                                required
                            />   
                        </>
                    }
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="text-base">Circunstâncias Judiciais</CardTitle>
                    <CardDescription>As circunstâncias judiciais são elementos considerados pelos juízes no momento de definir a pena de um condenado em um processo penal. Elas são previstas na legislação penal e têm o objetivo de garantir que a pena seja individualizada, ou seja, adequada à gravidade do crime e às características pessoais do condenado.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-5">
                    {Object.entries(judicialCircumstances).map(([key, circumstances]) => (
                        <Label key={key} className="flex items-center gap-5 cursor-pointer">
                            <Switch
                                name={key}
                                checked={circumstances.value} 
                                onClick={() => handleJudicialCircunstances(key)}
                            />
                            {circumstances.label}
                        </Label>
                    ))}
                </CardContent>
            </Card>
            <Button type="button" onClick={props.handleNextStep}>Proxima Fase</Button>
        </form>
    );
};