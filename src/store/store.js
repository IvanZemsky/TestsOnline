import { combineSlices, configureStore } from "@reduxjs/toolkit";
import testSlice from "./slices/testSlice";
import themeSlice from "./slices/themeSlice";
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
import { testAPI } from "../services/TestService";
import filterSlice from './slices/filterSlice';

const persistConfig = {
   key: "test",
   storage,
   whitelist: ["test", "theme", "filter"],
};

const rootReducer = combineSlices(testSlice, themeSlice, filterSlice, testAPI)

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }).concat(testAPI.middleware)
});

export const persistor = persistStore(store);
export default store;
