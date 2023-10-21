import { useState } from 'react';
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Label } from '@radix-ui/react-dropdown-menu';
import { Switch } from "@/components/ui/switch";

type IntermediateSentenseProps = {
    handleNextStep: () => void;
};

export const IntermediateSentence = (props: IntermediateSentenseProps) => {

    const [aggravating, setAggravating] = useState({
        relapse: { 
            value: false, 
            label: "Reincidência",
            description: "Art. 63. Verifica-se a reincidência quando o agente comete novo crime, depois de transitar em julgado a sentença que, no País ou no estrangeiro, o tenha condenado por crime anterior.\n\nArt. 64. Para efeito de reincidência:\nI – não prevalece a condenação anterior, se entre a data do cumprimento ou extinção da pena e a infração posterior tiver decorrido período de tempo superior a 5 (cinco) anos, computado o período de prova da suspensão ou do livramento condicional, se não ocorrer revogação;\nII – não se consideram os crimes militares próprios e políticos."
        },
        crimeMotive: { 
            value: false, 
            label: "Motivo do Crime",
            description: "a) por motivo fútil ou torpe;\nb) para facilitar ou assegurar a execução, a ocultação, a impunidade ou vantagem de outro crime;\nc) à traição, de emboscada, ou mediante dissimulação, ou outro recurso que dificultou ou tornou impossível a defesa do ofendido;\nd) com emprego de veneno, fogo, explosivo, tortura ou outro meio insidioso ou cruel, ou de que podia resultar perigo comum;\ne) contra ascendente, descendente, irmão ou cônjuge;\nf) com abuso de autoridade ou prevalecendo-se de relações domésticas, de coabitação ou de hospitalidade, ou com violência contra a mulher na forma da lei específica;\ng) com abuso de poder ou violação de dever inerente a cargo, ofício, ministério ou profissão;\nh) contra criança, maior de 60 (sessenta) anos, enfermo ou mulher grávida;\ni) quando o ofendido estava sob a imediata proteção da autoridade;\nj) em ocasião de incêndio, naufrágio, inundação ou qualquer calamidade pública, ou de desgraça particular do ofendido;\nl) em estado de embriaguez preordenada."
        },
        LeadershipOrOrganizationOfCrime: { 
            value: false, 
            label: "Liderança ou Organização do Crime",
            description: "I – promove, ou organiza a cooperação no crime ou dirige a atividade dos demais agentes;"
        },
        CoercionOrInducementToCommitCrime: {
            value: false,
            label: "Coerção ou Indução à Execução do Crime",
            description: "II – coage ou induz outrem à execução material do crime;"
        }
    });

    return (
        <form className="flex flex-col gap-5" onSubmit={e => e.preventDefault()}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-base">Preponderantes:</CardTitle>
                    <CardDescription>São circunstâncias que tornam o crime mais reprovável, resultando em um aumento da pena-base.</CardDescription>
                </CardHeader>
                <CardContent>

                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="text-base">Agravantes:</CardTitle>
                    <CardDescription>São circunstâncias que tornam o crime mais reprovável, resultando em um aumento da pena-base.</CardDescription>
                </CardHeader>
                <CardContent>
                    {Object.entries(aggravating).map(([key, aggravating]) => (
                        <Label 
                            key={key}
                            className="flex items-center gap-5 cursor-pointer"
                            title={aggravating.description}
                        >
                            <Switch 
                                name={aggravating.label} 
                                checked={aggravating.value}
                            />
                            <div >
                                {aggravating.label}
                                <span  
                                    className='text-red-600 font-bold text-lg cursor-pointer'
                                >
                                    *
                                </span>
                            </div>
                        </Label>
                    ))}
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="text-base">Atenuantes:</CardTitle>
                    <CardDescription>São fatores que podem reduzir a reprovabilidade do crime, levando a uma diminuição da pena-base.</CardDescription>
                </CardHeader>
                <CardContent>

                </CardContent>
            </Card>
            <Button type="button" onClick={props.handleNextStep}>Proxima Fase</Button>
        </form>
    );
};