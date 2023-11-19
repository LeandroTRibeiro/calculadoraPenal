import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { intermediateSentenceLabels } from '@/locales/pt';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/hooks/useAppSelector';
import { AggravatingType, MitigatingType } from '@/types/intermediateSentenceTypes';
import { setAggravating, setMitigating } from '@/redux/reducers/intermediateSentenceReducer';

type IntermediateSentenseProps = {
    handleNextStep: () => void;
};

export const IntermediateSentence = (props: IntermediateSentenseProps) => {

    const dispatch = useDispatch();

    const intermediateSentenceReducer = useAppSelector( state => state.intermediateSentenceReducer)
    
    const handleAggravating = (field: AggravatingType) => {
        dispatch(setAggravating({field}))
    };

    const handleMitigating = (field: MitigatingType) => {
        dispatch(setMitigating({field}))
    };

    return (
        <form className="flex flex-col gap-5" onSubmit={e => e.preventDefault()}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-base">{intermediateSentenceLabels.aggravating.label}</CardTitle>
                    <CardDescription>{intermediateSentenceLabels.aggravating.description}</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-5">
                    {Object.entries(intermediateSentenceLabels.aggravating).map(([key, value]) => {
                        if(key !== "label" && key !== "description" && typeof value === 'object' && value !== null) {
                            const aggravatingKey = key as AggravatingType;
                            return (
                                <Label 
                                    key={key}
                                    className="flex items-center gap-5 cursor-pointer"
                                    title={value.description}
                                >
                                    <Switch 
                                        name={key} 
                                        checked={intermediateSentenceReducer.aggravating[aggravatingKey]}
                                        onClick={() => handleAggravating(aggravatingKey)}
                                    />
                                    <div >
                                        {value.label}
                                        <span  
                                            className='text-red-600 font-bold text-lg cursor-pointer'
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
            <Card>
                <CardHeader>
                    <CardTitle className="text-base">{intermediateSentenceLabels.mitigating.label}</CardTitle>
                    <CardDescription>{intermediateSentenceLabels.mitigating.description}</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-5">
                    {Object.entries(intermediateSentenceLabels.mitigating).map(([key, value]) => {
                        if(key !== "label" && key !== "description" && typeof value === 'object' && value !== null) {
                            const mitigatingKey = key as MitigatingType;
                            return (
                                <Label 
                                    key={mitigatingKey}
                                    className="flex items-center gap-5 cursor-pointer"
                                    title={value.description}
                                >
                                    <Switch 
                                        name={mitigatingKey} 
                                        checked={intermediateSentenceReducer.mitigating[mitigatingKey]}
                                        onClick={() => handleMitigating(mitigatingKey)}
                                    />
                                    <div >
                                        {value.label}
                                        <span  
                                            className='text-red-600 font-bold text-lg cursor-pointer'
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
            <Button type="button" onClick={props.handleNextStep}>Proxima Fase</Button>
        </form>
    );
};