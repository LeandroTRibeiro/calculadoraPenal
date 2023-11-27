import { CircumstancesType } from "../../types/definitiveSentenceType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "definitiveSentenceReducer",
    initialState: [] as CircumstancesType[],
    reducers: {
        addCircumstance: (state, action: PayloadAction<CircumstancesType>) => {
            state.push(action.payload);
        },
        removeCircumstance: (state, action: PayloadAction<number>) => {
            state.splice(action.payload, 1);
        },
    }
});

export const { addCircumstance, removeCircumstance } = slice.actions;
export default slice.reducer;