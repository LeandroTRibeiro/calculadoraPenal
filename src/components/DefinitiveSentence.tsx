import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "../components/ui/card";
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import React, { useState, useEffect, useRef } from "react";
import { Check, PencilLine, Plus, Trash } from "@phosphor-icons/react";
import { useToast } from "../components/ui/use-toast";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks/useAppSelector";
import { addCircumstance, removeCircumstance } from "../redux/reducers/definitiveSentenceReducer";
import { Link } from "react-router-dom";
import { CircumstancesType } from "../types/definitiveSentenceType";

export const DefinitiveSentence = () => {

    const { toast } = useToast();

    const dispatch = useDispatch();

    const definitiveSentenceReducer = useAppSelector( state => state.definitiveSentenceReducer );

    const inputRef = useRef<HTMLInputElement>(null);

    const [addingCircunstance, setAddingCircunstance] = useState(false);

    const [circumstance, setCircumstance] = useState<CircumstancesType>({
        name: "",
        weight: {
            denominator: 0,
            numerator: 0
        },
        description: ""
    });

    useEffect(() => {
        if (addingCircunstance && inputRef.current) {
            inputRef.current.focus();
        }
    }, [addingCircunstance]);

    const handleCircumstanceWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCircumstance(prevState => ({
            ...prevState,
            weight: {
                ...prevState.weight,
                [e.target.name]: e.target.value
            }
        }));
    };

    const handleClearCircumstance = () => {
        setCircumstance({
            name: "",
            weight: {
                denominator: 0,
                numerator: 0
            },
            description: ""
        });
        setAddingCircunstance(false);
    };  

    const handleSubmitCircumstance = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (
            (circumstance.name !== "Minorante" && circumstance.name !== "Majorante") || 
            circumstance.weight.numerator <= 0 || 
            circumstance.weight.denominator <= 0
        ) {
            toast({
                title: "Erro ao adicionar circunstância",
                description: "Por favor, preencha todos os campos obrigatórios.",
            });
            return;
        }
        dispatch(addCircumstance(circumstance));
        toast({
            title: "Nova circunstância adicionada!",
            description: `${circumstance.name} - peso: ${circumstance.weight.numerator}/${circumstance.weight.denominator}.`    
        });
        handleClearCircumstance();
    };  

    const handleEditCircunstance = (index: number) => {
        setCircumstance(definitiveSentenceReducer[index]);
        dispatch(removeCircumstance(index));
        setAddingCircunstance(true);
    };

    const handleRemoveCircumstance = (index: number) => {
        dispatch(removeCircumstance(index));
    };

    return (
        <form className="flex flex-col gap-5" onSubmit={handleSubmitCircumstance}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-base">Adicione Majorantes ou Minorantes</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-5">
                    {definitiveSentenceReducer.map((item, index) => (
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">{item.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <dl className="grid grid-cols-8 gap-5">
                                    <div className="col-span-5">
                                        <dt className="font-semibold">Descrição:</dt>
                                        <dd className="text-sm">{item.description}</dd>
                                    </div>
                                    <div>
                                        <dt className="font-semibold">Peso:</dt>
                                        <dd className="text-sm">{item.weight.numerator}/{item.weight.denominator}</dd>
                                    </div>
                                    <button 
                                        type="button" 
                                        className="flex justify-center items-center cursor-pointer hover:text-orange-600 transition-all ease-in-out duration-300 active:scale-50" 
                                        title="editar"
                                        onClick={() => handleEditCircunstance(index)}
                                    >
                                        <PencilLine size={25} />
                                    </button>
                                    <button 
                                        type="button" 
                                        className="flex justify-center items-center cursor-pointer hover:text-red-500 transition-all ease-in-out duration-300 active:scale-50" 
                                        title="deletar"
                                        onClick={() => handleRemoveCircumstance(index)}
                                    >
                                        <Trash size={25} />
                                    </button>
                                </dl>
                            </CardContent>
                        </Card>
                    ))}
                    {addingCircunstance &&
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">Nova Circunstancia</CardTitle>
                            </CardHeader> 
                            <CardContent className="grid grid-cols-3 gap-x-10 gap-y-5">
                                <div className="flex flex-col justify-center gap-2">
                                    <Label htmlFor="circunstances">Circunstancia:</Label>
                                    <Select
                                        value={circumstance.name ? circumstance.name : ""}
                                        onValueChange={s => setCircumstance(prev => ({...prev, name: s as "Minorante" | "Majorante"}))}
                                    >
                                        <SelectTrigger
                                            value={circumstance.name ? circumstance.name : ""}
                                        >
                                            <SelectValue placeholder="Selecione a Circunstancia" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="Majorante">Majorante</SelectItem>
                                                <SelectItem value="Minorante">Minorante</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="numerator" className="cursor-pointer">Numerador:</Label>
                                    <Input 
                                        ref={inputRef}
                                        id="numerator"
                                        name="numerator"
                                        type="number" 
                                        className=""
                                        value={circumstance.weight.numerator ? circumstance.weight.numerator : ""}
                                        onChange={e => handleCircumstanceWeight(e)}
                                        placeholder="Digite o valor do numerador"
                                        min={1}
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="denominator" className="cursor-pointer">Denominador:</Label>
                                    <Input 
                                        id="denominator" 
                                        name="denominator"
                                        type="number" 
                                        className=""
                                        value={circumstance.weight.denominator ? circumstance.weight.denominator : ""}
                                        onChange={e => handleCircumstanceWeight(e)}
                                        placeholder="Digite o valor do denominador"
                                        min={1}
                                        required
                                    />   
                                </div>
                                <div className="col-span-3 flex flex-col gap-2">
                                    <Label htmlFor="description">Descrição:</Label>
                                    <Textarea 
                                        placeholder="Digite a descrição" 
                                        id="description"
                                        name="description"
                                        value={circumstance.description ? circumstance.description : ""}
                                        onChange={e => setCircumstance(prev => ({...prev, description: e.target.value}))}
                                    />
                                </div>
                                <div className="col-span-3 flex justify-center">
                                    <button 
                                        type="submit"
                                        className="flex-1 flex justify-center items-center cursor-pointer hover:text-green-500 transition-all ease-in-out duration-300 active:scale-50"
                                    >
                                        <Check size={25} className="flex-1"/>
                                    </button>
                                    <button
                                        type="button"
                                        className="flex-1 flex justify-center items-center cursor-pointer hover:text-red-500 transition-all ease-in-out duration-300 active:scale-50"
                                        onClick={handleClearCircumstance}
                                    >
                                        <Trash size={25} className="flex-1" />
                                    </button>
                                </div>
                            </CardContent>
                        </Card>
                    }
                    {!addingCircunstance &&
                        <Button 
                            type="button" 
                            className="gap-1 w-fit"
                            onClick={() => setAddingCircunstance(!addingCircunstance)}
                        >
                                Adicionar
                                <Plus size={15} weight="bold"/> 
                        </Button>
                    }
                </CardContent>
            </Card>
            <Link to="/sentenceOverview">
                <Button type="button">Finalizar Calculo</Button>
            </Link>
        </form>
    );
};