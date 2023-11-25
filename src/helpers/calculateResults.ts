import { BaseSentenceType, SentenceRangeType } from "@/types/baseSentencetypes";
import { CircumstancesType } from "@/types/definitiveSentenceType";
import { IntermediateSentenceType } from "@/types/intermediateSentenceTypes";

const DAYS_PER_YEAR = 360;
const DAYS_PER_MONTH = 30;

export const calculateResults = (
    baseData: BaseSentenceType, 
    intermediateData: IntermediateSentenceType, 
    definitiveData: CircumstancesType[]
    ) => {

        // Primeiro determino a setenca base

        let initialBaseSentenceDays;

        let finalBaseSentenceDays;

        const maxSentenceDays = convertToTotalDays(baseData.maxSentence);

        const minSentenceDays = convertToTotalDays(baseData.minSentence);
        
        const fractionCircumstances = (baseData.circumstancesWeight.numerator * countTrueValues(baseData.judicialCircumstances)) / baseData.circumstancesWeight.denominator;

        switch(baseData.calculationType) {
            case "minimum":
                initialBaseSentenceDays = minSentenceDays;
                finalBaseSentenceDays = minSentenceDays + (initialBaseSentenceDays * fractionCircumstances);
                break;
            case "maximum":
                initialBaseSentenceDays = maxSentenceDays - minSentenceDays;
                finalBaseSentenceDays = minSentenceDays + (initialBaseSentenceDays * fractionCircumstances);
                break;
            default:
                console.error("Tipo de cálculo desconhecido:", baseData.calculationType);
                initialBaseSentenceDays = 0;
                finalBaseSentenceDays = 0;
                break;
        };

        
        if(finalBaseSentenceDays > maxSentenceDays) {
            finalBaseSentenceDays = maxSentenceDays;
        };

        if(finalBaseSentenceDays < minSentenceDays) {
            finalBaseSentenceDays = minSentenceDays;
        }

        // Objeto final da sentenca base

        const finalBaseSentenceObject = convertDaysToYearsMonthsDays(finalBaseSentenceDays);

        // Aqui comeco a determinar a setenca intermediaria

        const fractionAggravating = countTrueValues(intermediateData.aggravating) / 6;

        const aggravatingDays = finalBaseSentenceDays * fractionAggravating;

        const fractionMitigating = countTrueValues(intermediateData.mitigating) / 6;

        const mitigatingDays = finalBaseSentenceDays * fractionMitigating;

        let finalIntermediateSentenceDays =  finalBaseSentenceDays + aggravatingDays - mitigatingDays;

        if(finalIntermediateSentenceDays > maxSentenceDays) {
            finalIntermediateSentenceDays = maxSentenceDays;
        };

        if(finalIntermediateSentenceDays < minSentenceDays) {
            finalIntermediateSentenceDays = minSentenceDays;
        };

        // Aqui crio o objeto com a sentenca intermediaria

        const finalIntemediateSentenceObject = convertDaysToYearsMonthsDays(finalIntermediateSentenceDays);

        // Aqui comeco a determinar a sentenca definitiva

        const majorantes = definitiveData.filter((item) => item.name === "Majorante");

        let majorantesDays = 0;

        for(let i = 0; i < majorantes.length; i++) {
            majorantesDays = majorantesDays + ((majorantes[i].weight.numerator * finalIntermediateSentenceDays) / majorantes[i].weight.denominator);
        };

        const minorantes = definitiveData.filter((item) => item.name === "Minorante");

        let minorantesDays = 0;

        for(let i = 0; i < minorantes.length; i++) {
            minorantesDays = minorantesDays + ((minorantes[i].weight.numerator * finalIntermediateSentenceDays) / minorantes[i].weight.denominator);
        };

        let finalDefinitiveSentenceDays = finalIntermediateSentenceDays + majorantesDays - minorantesDays;

        if(finalDefinitiveSentenceDays > maxSentenceDays) {
            finalDefinitiveSentenceDays = maxSentenceDays;
        };

        if(finalDefinitiveSentenceDays < minSentenceDays) {
            finalDefinitiveSentenceDays = minSentenceDays;
        };

        // Aqui crio o objeto da sentenca definitiva

        const finalDefinitiveSentenceObject = convertDaysToYearsMonthsDays(finalDefinitiveSentenceDays);

    return { 
        baseSentence: finalBaseSentenceObject, 
        intermediateSentence: finalIntemediateSentenceObject,
        definitiveSentence: finalDefinitiveSentenceObject
    };
};

export const convertToTotalDays = (range: SentenceRangeType) => range.days + range.months * DAYS_PER_MONTH + range.years * DAYS_PER_YEAR;

export const countTrueValues = (objectOfBooleans: object) => Object.values(objectOfBooleans).filter(value => value === true). length;

export const convertDaysToYearsMonthsDays = (totalDays: number) => {

    const years = Math.floor(totalDays / DAYS_PER_YEAR);
    const months = Math.floor((totalDays % DAYS_PER_YEAR) / DAYS_PER_MONTH);
    const days = Math.floor(totalDays % DAYS_PER_MONTH);

    return { years, months, days };

};