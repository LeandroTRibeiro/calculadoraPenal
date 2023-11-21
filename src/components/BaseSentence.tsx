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
import { Switch } from "@/components/ui/switch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { CalculationTypesType, CircumstancesFractionType, CircumstancesOptionsWeightType, SentenceFieldsType, judicialCircumstancesType, SentenceRangeType } from "@/types/baseSentencetypes";
import { updateCalculationType, setOptionCircumstancesWeight, updateMaxSentence, updateMinSentence, updateCircumstancesWeight, setJudicialCircumstances, clearSentencesRange } from "@/redux/reducers/baseSentenceReducer";
import { baseSentenceLabels } from "@/locales/pt";
import { convertToTotalDays } from "@/helpers/calculateResults";
import { useToast } from "./ui/use-toast";
import { useRef } from "react";

type BaseSentenceProps = {
    handleNextStep: () => void;
};

export const BaseSentence = (props: BaseSentenceProps) => {

    const { toast } = useToast();

    const dispatch = useDispatch();

    const inputRef = useRef<HTMLInputElement>(null);

    const baseSentenceReducer = useAppSelector( state => state.baseSentenceReducer );

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
        const field = e.target.name as CircumstancesFractionType;
        const value = +e.target.value;
        dispatch(updateCircumstancesWeight({field, value}));
    };

    const handleJudicialCircunstances = (field: judicialCircumstancesType) => {
        dispatch(setJudicialCircumstances({field}));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const minDays = convertToTotalDays(baseSentenceReducer.minSentence);

        const maxDays = convertToTotalDays(baseSentenceReducer.maxSentence);

        if(maxDays < minDays) {
            toast({
                title: "Erro na Definição da Pena",
                description: "A pena máxima não pode ser menor que a pena mínima. Por favor, revise os valores inseridos.",
            });
            dispatch(clearSentencesRange());
            inputRef.current?.focus();
            return;
        };
        props.handleNextStep();
    };

    const isRequiredminMaxSentence = (setenceRange: SentenceRangeType) => setenceRange.days || setenceRange.months || setenceRange.years;

    return (
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
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
                                            ref={key === "years" ? inputRef : null}
                                            className="" 
                                            placeholder={`Digite os ${value} da ${baseSentenceLabels.minSentence.label}`}
                                            value={baseSentenceReducer.minSentence[sentenceKey] ? baseSentenceReducer.minSentence[sentenceKey] : ""}
                                            required={!isRequiredminMaxSentence(baseSentenceReducer.minSentence)}
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
                                                required={!isRequiredminMaxSentence(baseSentenceReducer.maxSentence)}
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
                    <CardTitle className="text-base">{baseSentenceLabels.judicialCircumstances.label}</CardTitle>
                    <CardDescription>As circunstâncias judiciais são elementos considerados pelos juízes no momento de definir a pena de um condenado em um processo penal. Elas são previstas na legislação penal e têm o objetivo de garantir que a pena seja individualizada, ou seja, adequada à gravidade do crime e às características pessoais do condenado.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-5">
                    {Object.entries(baseSentenceLabels.judicialCircumstances).map(([key, value]) => {
                        if(key !== "label" && key !== "description" && typeof value === 'object' && value !== null) {
                            const circunstancesKey = key as judicialCircumstancesType;
                            return (
                                <Label key={key} className="flex items-center gap-5 cursor-pointer" title={value.description}>
                                    <Switch
                                        name={key}
                                        checked={baseSentenceReducer.judicialCircumstances[circunstancesKey]} 
                                        onClick={() => handleJudicialCircunstances(circunstancesKey)}
                                    />
                                    <div>
                                        {value.label}
                                        <span  
                                            className='text-red-600 font-bold text-lg'
                                        >
                                            *
                                        </span>
                                    </div>
                                </Label>
                            )
                        }
                        return null;
                    })}
                </CardContent>
            </Card>
            <Button type="submit">Proxima Fase</Button>
        </form>
    );
};