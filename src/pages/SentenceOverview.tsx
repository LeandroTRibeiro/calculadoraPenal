import { NavigationHeader } from "../components/NavigationHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { calculateResults } from "../helpers/calculateResults";
import { useAppSelector } from "../hooks/useAppSelector";
import { sentenceOverview } from "../locales/pt";
import { DosimetryResultsType, dosimetryPhaseKeyType } from "../types/sentenceOverviewTypes";
import { FilePdf, Pencil } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const SentenceOverview = () => {

    const baseSetenceReducer = useAppSelector( state => state.baseSentenceReducer );
    const intermediateSentenceReducer = useAppSelector( state => state.intermediateSentenceReducer);
    const definitiveSetenceReducer = useAppSelector( state => state.definitiveSentenceReducer);
    const [dosimetryResults, setDosimetryResults] = useState<DosimetryResultsType>({
        baseSentence: {
            days: 0,
            months: 0,
            years: 0
        },
        intermediateSentence: {
            days: 0,
            months: 0,
            years: 0
        },
        definitiveSentence: {
            days: 0,
            months: 0,
            years: 0
        },
    });

    useEffect(() => {

        const handleSetDosimetryResults = () => {
            setDosimetryResults(
                calculateResults(
                    baseSetenceReducer, 
                    intermediateSentenceReducer, 
                    definitiveSetenceReducer
                )
            );
        };

        handleSetDosimetryResults();

    }, [baseSetenceReducer, intermediateSentenceReducer, definitiveSetenceReducer]);

    return (
        <div className="">
            <NavigationHeader />
            <div className="flex justify-center px-10 py-5 gap-5">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex justify-between">
                            {sentenceOverview.title}
                            <div className="flex gap-5">
                                <Link 
                                    to="/calculator"
                                    className="hover:text-orange-600 transition-all ease-in-out duration-300 active:scale-50"
                                >
                                    <Pencil size={30} className="cursor-pointer" />
                                </Link>
                                <FilePdf size={35} className="cursor-pointer" />
                            </div>
                        </CardTitle>
                        <CardDescription>{sentenceOverview.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-5">
                        {Object.entries(sentenceOverview.dosemetryPhases).map(([key, value]) => {
                            const phaseKey = key as dosimetryPhaseKeyType;
                            return (
                                <Card key={key}>
                                    <CardHeader>
                                        <CardTitle>{value.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex flex-col gap-5">
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    {Object.entries(value.results).map(([key, results]) => (
                                                        <TableHead key={key}>{results}</TableHead>
                                                    ))}
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow>
                                                    {Object.entries(dosimetryResults[phaseKey]).map(([key, results]) => (
                                                        <TableCell key={key}>{results}</TableCell>
                                                    ))}
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};