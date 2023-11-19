import { configureStore } from "@reduxjs/toolkit";
import baseSentenceReducer from "./reducers/baseSentenceReducer";
import intermediateSentenceReducer from "./reducers/intermediateSentenceReducer";

export const store = configureStore({
    reducer: {
        baseSentenceReducer: baseSentenceReducer,
        intermediateSentenceReducer: intermediateSentenceReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;