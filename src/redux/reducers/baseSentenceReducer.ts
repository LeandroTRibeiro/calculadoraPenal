import { CalculationTypesType, CircumstancesFractionType, CircumstancesOptionsWeightType, SentenceFieldsType, judicialCircumstancesType } from "@/types/baseSentencetypes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'baseSentenceReducer',
    initialState: {
        minSentence: {
            years: 0,
            months: 0,
            days: 0
        }, 
        maxSentence: {
            years: 0,
            months: 0,
            days: 0
        },
        calculationType: "minimum",
        circumstancesWeight: {
            name: "weightOne",
            numerator: 1,
            denominator: 8
        },
        defaultWeights: {
            weightOne: { 
                numerator: 1, 
                denominator: 8 
            },
            weightTwo: { 
                numerator: 1, 
                denominator: 6 
            },
            weightThree: false
        },
        judicialCircumstances: {
            criminalRecord: false,
            socialConduct: false,
            personality: false,
            culpability: false,
            crimeMotive: false,
            crimeCircumstances: false,
            crimeConsequences: false,
            victimBehavior: false
        }
    },
    reducers: {
        updateMinSentence: (state, action: PayloadAction<{ field: SentenceFieldsType, value: number}>) => {
            const { field, value } = action.payload;
            state.minSentence[field] = value;
        },
        updateMaxSentence: (state, action: PayloadAction<{ field: SentenceFieldsType, value: number}>) => {
            const { field, value } = action.payload;
            state.maxSentence[field] = value;
        },
        updateCalculationType: (state, action: PayloadAction<CalculationTypesType>) => {
            state.calculationType = action.payload;
        },
        setOptionCircumstancesWeight: (state, action: PayloadAction<CircumstancesOptionsWeightType>) => {
            switch(action.payload) {
                case "weightOne":
                    state.defaultWeights.weightThree = false;
                    state.circumstancesWeight.name = action.payload;
                    state.circumstancesWeight.numerator = 1;
                    state.circumstancesWeight.denominator = 8;
                    break;
                case "weightTwo":
                    state.defaultWeights.weightThree = false;
                    state.circumstancesWeight.name = action.payload;
                    state.circumstancesWeight.numerator = 1;
                    state.circumstancesWeight.denominator = 6;
                    break;
                case "weightThree":
                    state.defaultWeights.weightThree = true;
                    state.circumstancesWeight.name = action.payload;
                    state.circumstancesWeight.numerator = 0;
                    state.circumstancesWeight.denominator = 0;
                    break;
            };
        },
        updateCircumstancesWeight: (state, action: PayloadAction<{field: CircumstancesFractionType, value: number}>) => {
            const { field, value } = action.payload;

            state.circumstancesWeight[field] = value;
        },
        setJudicialCircumstances: (state, action:PayloadAction<{field: judicialCircumstancesType}>) => {
            const { field } = action.payload;
            state.judicialCircumstances[field] = !state.judicialCircumstances[field];
        }
    }
});

export const { 
    updateMinSentence, 
    updateMaxSentence, 
    updateCalculationType, 
    setOptionCircumstancesWeight,
    updateCircumstancesWeight,
    setJudicialCircumstances
} = slice.actions;

export default slice.reducer;