import { configureStore } from "@reduxjs/toolkit";
import baseSentenceReducer from "./reducers/baseSentenceReducer";

export const store = configureStore({
    reducer: {
        baseSentenceReducer: baseSentenceReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;