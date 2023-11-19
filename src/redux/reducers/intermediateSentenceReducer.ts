import { AggravatingType, MitigatingType } from "@/types/intermediateSentenceTypes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "intermediateSentenceReducer",
    initialState: {
        aggravating: {
            relapse: false,
            crimeMotive: false,
            LeadershipOrOrganizationOfCrime: false, 
            CoercionOrInducementToCommitCrime: false,
            instigationOrAuthority: false,
            crimeForPayment: false,
        },
        mitigating: {
            minorAgeOrSenior: false,
            ignoranceOfLaw: false,
            agentFactors: false,
        }
    },
    reducers: {
        setAggravating: (state, action: PayloadAction<{ field: AggravatingType }>) => {
            const { field } = action.payload;
            state.aggravating[field] = !state.aggravating[field];
        },
        setMitigating: (state, action: PayloadAction<{ field: MitigatingType }>) => {
            const { field } = action.payload;
            state.mitigating[field] = !state.mitigating[field];
        }
    }
});

export const { setAggravating, setMitigating } = slice.actions;
export default slice.reducer;