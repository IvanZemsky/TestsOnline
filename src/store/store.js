import { combineSlices, configureStore } from "@reduxjs/toolkit";
import testSlice from "./slices/testSlice";
import { 
   persistStore,
   persistReducer,
   // для ignoredActions:
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
   key: "test",
   storage,
};

const rootReducer = combineSlices(testSlice);

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
