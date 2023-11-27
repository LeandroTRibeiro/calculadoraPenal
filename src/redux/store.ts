import { configureStore } from "@reduxjs/toolkit";
import baseSentenceReducer from "./reducers/baseSentenceReducer";
import intermediateSentenceReducer from "./reducers/intermediateSentenceReducer";
import definitiveSentenceReducer from "./reducers/definitiveSentenceReducer";

export const store = configureStore({
    reducer: {
        baseSentenceReducer: baseSentenceReducer,
        intermediateSentenceReducer: intermediateSentenceReducer,
        definitiveSentenceReducer: definitiveSentenceReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;