import { CalculationTypesType, SentenceFieldsType } from "@/types/baseSentencetypes";
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
        }
    }
});

export const { updateMinSentence, updateMaxSentence, updateCalculationType } = slice.actions;
export default slice.reducer;