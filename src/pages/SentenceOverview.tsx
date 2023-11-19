import { Footer } from "@/components/Footer";
import { NavigationMenuHeader } from "@/components/NavigationMenuHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { calculateResults } from "@/helpers/calculateResults";
import { useAppSelector } from "@/hooks/useAppSelector";
import { FilePdf, Pencil } from "@phosphor-icons/react";

export const SentenceOverview = () => {

    const baseSetenceReducer = useAppSelector( state => state.baseSentenceReducer );
    const intermediateSentenceReducer = useAppSelector( state => state.intermediateSentenceReducer);
    const definitiveSetenceReducer = useAppSelector( state => state.definitiveSentenceReducer);

    console.log(calculateResults(baseSetenceReducer, intermediateSentenceReducer, definitiveSetenceReducer));

    return (
        <div className="w-screen h-screen">
            <NavigationMenuHeader />
            <div className="h-main px-10 py-5 gap-5">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex justify-between">
                            Resultado da Dosimetria da Pena
                            <div className="flex gap-5">
                                <Pencil size={30} className="cursor-pointer" />
                                <FilePdf size={35} className="cursor-pointer" />
                            </div>
                        </CardTitle>
                        <CardDescription>Abaixo, você encontrará o resultado detalhado da dosimetria da pena, apresentado em uma tabela clara e informativa. Esta tabela resume as informações calculadas, oferecendo uma visão completa e precisa da sentença determinada.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableCaption>Rseultado da dosemetria da pena.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Fase</TableHead>
                                    <TableHead>Nome</TableHead>
                                    <TableHead>Resultado</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>1a</TableCell>
                                    <TableHead>Pena base</TableHead>
                                    <TableCell>3 anos</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>2a</TableCell>
                                    <TableHead>Pena Provisoria</TableHead>
                                    <TableCell>3 anos</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>3a</TableCell>
                                    <TableHead>Pena Definitiva</TableHead>
                                    <TableCell>3 anos</TableCell>
                                </TableRow>
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell colSpan={2}>Total</TableCell>
                                    <TableCell>7 anos</TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </CardContent>
                </Card>
            </div>
            <Footer />
        </div>
    );
};