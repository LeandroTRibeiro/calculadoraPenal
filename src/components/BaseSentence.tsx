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
import { useAppSelector } from "@/hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { CalculationTypesType, CircumstancesFractionType, CircumstancesOptionsWeightType, SentenceFieldsType } from "@/types/baseSentencetypes";
import { updateCalculationType, setOptionCircumstancesWeight, updateMaxSentence, updateMinSentence } from "@/redux/reducers/baseSentenceReducer";
import { baseSentenceLabels } from "@/locales/pt";

type BaseSentenceProps = {
    handleNextStep: () => void;
};

type JudicialCircumstancesType = {
    [key: string]: {
        value: boolean;
        label: string;
    }
};

const weightMappings = {
    weightOne: { numerator: 1, denominator: 8 },
    weightTwo: { numerator: 1, denominator: 6 },
};

export const BaseSentence = (props: BaseSentenceProps) => {

    const dispatch = useDispatch();

    const baseSentenceReducer = useAppSelector( state => state.baseSentenceReducer );
    
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

        const field = e.target.name as SentenceFieldsType;
        const value = +e.target.value;
        dispatch(updateMinSentence({field, value}));
    };

    const handleMaxSentence = (e: React.ChangeEvent<HTMLInputElement>) => {

        const field = e.target.name as SentenceFieldsType;
        const value = +e.target.value;
        dispatch(updateMaxSentence({field, value}));
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
                        <CardTitle className="text-base">{baseSentenceLabels.minSentence.label}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {Object.entries(baseSentenceLabels.minSentence).map(([key, value]) => {
                            if(key !== "label") {
                                const sentenceKey = key as SentenceFieldsType;
                                return (
                                    <Label key={key} className="cursor-pointer">
                                        {value}
                                        <Input 
                                            id={key}
                                            name={key} 
                                            type="number" 
                                            className="" 
                                            placeholder={`Digite os ${value} da ${baseSentenceLabels.minSentence.label}`}
                                            value={baseSentenceReducer.minSentence[sentenceKey] ? baseSentenceReducer.minSentence[sentenceKey] : ""}
                                            onChange={e => handleMinSentence(e)}
                                        /> 
                                    </Label>
                                );
                            }
                            return null;
                        })}
                    </CardContent>
                </Card>
                <Card className="flex-1">
                    <CardHeader>
                        <CardTitle className="text-base">{baseSentenceLabels.maxSentence.label}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {Object.entries(baseSentenceLabels.maxSentence).map(([key, value]) => {
                                if(key !== "label") {
                                    const sentenceKey = key as SentenceFieldsType;
                                    return (
                                        <Label key={key} className="cursor-pointer">
                                            {value}
                                            <Input 
                                                id={key}
                                                name={key} 
                                                type="number" 
                                                className="" 
                                                placeholder={`Digite os ${value} da ${baseSentenceLabels.maxSentence.label}`}
                                                value={baseSentenceReducer.maxSentence[sentenceKey] ? baseSentenceReducer.maxSentence[sentenceKey] : ""}
                                                onChange={e => handleMaxSentence(e)}
                                            /> 
                                        </Label>
                                    );
                                }
                                return null;
                        })}
                    </CardContent>
                </Card>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle className="text-base">{baseSentenceLabels.calculationTypes.label}</CardTitle>
                    <CardDescription>Alguns tribunais tendem a calcular a pena base usando a pena mínima, enquanto outros utilizam o intervalo entre a pena mínima e máxima. Há também aqueles que consideram o intervalo entre a pena mínima e a média entre elas. Essa abordagem pode variar de acordo com cada tribunal.</CardDescription>
                </CardHeader>
                <CardContent>
                    <RadioGroup 
                        value={baseSentenceReducer.calculationType} 
                        onValueChange={type => dispatch(updateCalculationType(type as CalculationTypesType))}
                    >
                        {Object.entries(baseSentenceLabels.calculationTypes).map(([key, value]) => {
                            if(key !== "label") {
                                return (
                                    <div key={key} className="flex items-center space-x-2">
                                        <RadioGroupItem value={key} id={key}
                                        />
                                        <Label htmlFor={key} className="cursor-pointer">{value}</Label>
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </RadioGroup>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="text-base">{baseSentenceLabels.circumstancesWeight.label}</CardTitle>
                    <CardDescription>O "peso das circunstâncias judiciais" refere-se à influência que elas possuem ao ampliar ou reduzir a pena base. No entanto, não há uma convenção uniforme sobre o peso exato atribuído a elas, podendo variar de um tribunal para outro.</CardDescription>
                </CardHeader>
                <CardContent>
                    <RadioGroup 
                        defaultValue={baseSentenceReducer.circumstancesWeight.name} 
                        onValueChange={(weight) => dispatch(setOptionCircumstancesWeight(weight as CircumstancesOptionsWeightType))}
                    >
                        {Object.entries(baseSentenceLabels.defaultWeights).map(([key, value]) => {
                            if(key !== "label") {
                                return (
                                    <div key={key} className="flex items-center space-x-2">
                                        <RadioGroupItem value={key} id={key} />
                                        <Label htmlFor={key} className="cursor-pointer">{value}</Label>
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </RadioGroup>
                    {baseSentenceReducer.defaultWeights.weightThree &&
                        Object.entries(baseSentenceLabels.circumstancesWeight).map(([key, value]) => {
                            if(key !== "label") {
                                const circumstanceKey = key as CircumstancesFractionType;
                                return (
                                    <div key={key}>
                                        <Label htmlFor={key} className="cursor-pointer">{value}</Label>
                                        <Input 
                                            id={key}
                                            name={key}
                                            type="number" 
                                            className="" 
                                            placeholder={`Digite o valor do ${value}`}
                                            value={baseSentenceReducer.circumstancesWeight[circumstanceKey] ? baseSentenceReducer.circumstancesWeight[circumstanceKey] : ""}
                                            onChange={handleEditCircumstancesWeight}
                                            min={1}
                                            required
                                        />
                                    </div>  
                                );
                            }
                        })

                    }
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="text-base">Circunstâncias Judiciais Desfavoráveis</CardTitle>
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