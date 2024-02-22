import { combineSlices, configureStore } from "@reduxjs/toolkit";
import testSlice from "./slices/testSlice";
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import resultSlice from "./slices/resultsSlice";

const persistConfig = {
   key: "results",
   storage,
   whitelist: ['results']
};

const rootReducer = combineSlices(testSlice, resultSlice);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
