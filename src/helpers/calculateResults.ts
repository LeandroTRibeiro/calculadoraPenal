import { BaseSentenceType } from "@/types/baseSentencetypes";
import { CircumstancesType } from "@/types/definitiveSentenceType";
import { IntermediateSentenceType } from "@/types/intermediateSentenceTypes";

const DAYS_PER_YEAR = 365;
const DAYS_PER_MONTH = 30;

export const calculateResults = (
    baseData: BaseSentenceType, 
    intermediateData: IntermediateSentenceType, 
    definitiveData: CircumstancesType[]
    ) => {

        let initialBaseSentenceDays;

        const maxSentenceDays = convertToTotalDays(baseData.maxSentence.days, baseData.maxSentence.months, baseData.maxSentence.years);

        const minSentenceDays = convertToTotalDays(baseData.minSentence.days, baseData.minSentence.months, baseData.minSentence.years);

        switch(baseData.calculationType) {
            case "minimum":
                initialBaseSentenceDays = minSentenceDays;
                break;
            case "average":
                initialBaseSentenceDays = maxSentenceDays - minSentenceDays;
                break;
            case "maximum":
                initialBaseSentenceDays = (maxSentenceDays - minSentenceDays) + minSentenceDays;
                break;
        };

        const fractionCircumstances = (baseData.circumstancesWeight.numerator * countTrueValues(baseData.judicialCircumstances)) / baseData.circumstancesWeight.denominator;

        const finalBaseSentenceDays = minSentenceDays + (initialBaseSentenceDays * fractionCircumstances);

        const finalBaseSentenceObject = convertDaysToYearsMonthsDays(finalBaseSentenceDays);

    return finalBaseSentenceObject;
};

const convertToTotalDays = (days: number, months: number, years: number) => days + months * DAYS_PER_MONTH + years * DAYS_PER_YEAR;

const countTrueValues = (objectOfBooleans: object) => Object.values(objectOfBooleans).filter(value => value === true). length;

const convertDaysToYearsMonthsDays = (totalDays: number) => {

    const years = Math.floor(totalDays / DAYS_PER_YEAR);
    const months = Math.floor((totalDays % DAYS_PER_YEAR) / DAYS_PER_MONTH);
    const days = Math.floor(totalDays % DAYS_PER_MONTH);

    return { years, months, days };

};