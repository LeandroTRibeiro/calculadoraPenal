export type BaseSentenceType = {
    minSentence: {
        years: number,
        months: number,
        days: number,
    },
    maxSentence: {
        years: number,
        months: number,
        days: number,
    },
    calculationType: CalculationTypesType,
    circumstancesWeight: {
        name: string,
        numerator: number,
        denominator: number,
    },
    defaultWeights: {
        weightOne: { numerator: number, denominator: number, },
        weightTwo: { numerator: number, denominator: number, },
        weightThree: boolean,
    },
    judicialCircumstances: {
        criminalRecord: boolean,
        socialConduct: boolean,
        personality: boolean,
        culpability: boolean,
        crimeMotive: boolean,
        crimeCircumstances: boolean,
        crimeConsequences: boolean,
        victimBehavior: boolean,
    },
};
export type SentenceFieldsType = "years" | "months" | "days";

export type CalculationTypesType = "minimum" | "range" | "average";

export type CircumstancesOptionsWeightType = "weightOne" | "weightTwo" | "weightThree";

export type CircumstancesFractionType = "numerator" | "denominator";

export type judicialCircumstancesType =  "criminalRecord" | "socialConduct" | "personality" | "culpability" | "crimeMotive" | "crimeCircumstances" | "crimeConsequences" | "victimBehavior";
