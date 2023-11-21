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

        let initialBaseSentenceDays;

        const maxSentenceDays = convertToTotalDays(baseData.maxSentence);

        const minSentenceDays = convertToTotalDays(baseData.minSentence);

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

        const fractionAggravating = countTrueValues(intermediateData.aggravating) / 6;

        const aggravatingDays = finalBaseSentenceDays * fractionAggravating;

        const fractionMitigating = countTrueValues(intermediateData.mitigating) / 6;

        const mitigatingDays = finalBaseSentenceDays * fractionMitigating;

        const finalIntermediateSentenceDays =  finalBaseSentenceDays + aggravatingDays - mitigatingDays;

        const finalIntemediateSentenceObject = convertDaysToYearsMonthsDays(finalIntermediateSentenceDays);

    return { 
        baseSentence: finalBaseSentenceObject, 
        intermediateSentence: finalIntemediateSentenceObject
    };
};

export const convertToTotalDays = (range: SentenceRangeType) => range.days + range.months * DAYS_PER_MONTH + range.years * DAYS_PER_YEAR;

const countTrueValues = (objectOfBooleans: object) => Object.values(objectOfBooleans).filter(value => value === true). length;

const convertDaysToYearsMonthsDays = (totalDays: number) => {

    const years = Math.floor(totalDays / DAYS_PER_YEAR);
    const months = Math.floor((totalDays % DAYS_PER_YEAR) / DAYS_PER_MONTH);
    const days = Math.floor(totalDays % DAYS_PER_MONTH);

    return { years, months, days };

};