// export type baseSentenceReducerType = {
//     minSentence: {
//         years: number,
//         months: number,
//         days: number
//     }, 
//     maxSentence: {
//         years: number,
//         months: number,
//         days: number
//     },
//     calculationType: "minimum" | "range" | "average",
//     circumstancesWeight: {
//         numerator: number,
//         denominator: number
//     },
//     defaultWeights: {
//         weightOne: { 
//             numerator: number, 
//             denominator: number 
//         },
//         weightTwo: { 
//             numerator: number, 
//             denominator: number 
//         },
//     },
//     judicialCircumstances: {
//         criminalRecord: boolean,
//         socialConduct: boolean,
//         personality: boolean,
//         culpability: boolean,
//         crimeMotive: boolean,
//         crimeCircumstances: boolean,
//         crimeConsequences: boolean,
//         victimBehavior: boolean
//     }
// };

export type SentenceFieldsType = "years" | "months" | "days";

export type CalculationTypesType = "minimum" | "range" | "average";

export type CircumstancesOptionsWeightType = "weightOne" | "weightTwo" | "weightThree";

export type CircumstancesFractionType = "numerator" | "denominator";

export type judicialCircumstancesType =  "criminalRecord" | "socialConduct" | "personality" | "culpability" | "crimeMotive" | "crimeCircumstances" | "crimeConsequences" | "victimBehavior";
