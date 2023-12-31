import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import { intermediateSentenceLabels } from '../locales/pt';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks/useAppSelector';
import { AggravatingType, MitigatingType } from '../types/intermediateSentenceTypes';
import { setAggravating, setMitigating } from '../redux/reducers/intermediateSentenceReducer';

type IntermediateSentenseProps = {
    handleNextStep: () => void;
    handleBeforeStep: () => void;
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
        <form className="flex flex-col gap-5 tablet-p:gap-3 mobile-gg:gap-1" onSubmit={e => e.preventDefault()}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-base tablet-p:text-sm">{intermediateSentenceLabels.aggravating.label}</CardTitle>
                    <CardDescription className="tablet-p:text-xs">{intermediateSentenceLabels.aggravating.description}</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-5 tablet-p:grid-cols-1">
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
                    <CardTitle className="text-base tablet-p:text-sm">{intermediateSentenceLabels.mitigating.label}</CardTitle>
                    <CardDescription className="tablet-p:text-xs">{intermediateSentenceLabels.mitigating.description}</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 tablet-p:grid-cols-1 gap-5">
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
            <div className="flex gap-3">
                <Button 
                    type="button" 
                    variant="outline"
                    onClick={props.handleBeforeStep} 
                    className="flex-1"
                >
                    Fase Anterior
                </Button>
                <Button type="button" onClick={props.handleNextStep} className="flex-1">Proxima Fase</Button>
            </div>
        </form>
    );
};