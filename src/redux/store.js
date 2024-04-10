
import { configureStore } from "@reduxjs/toolkit";

import contactsReducer from "./contacts/slice"
import filtersReduser from "./filters/slice"
import authReduser from "./auth/slice"
import {
    persistStore, persistReducer, FLUSH,
    
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const authPersistConfig = {
  key: 'authSlice',
    storage,
  whitelist: ['token']
}
 
const persistedReducer = persistReducer(authPersistConfig, authReduser)

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReduser,
        auth: persistedReducer
    },
       middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

});
export const persistor = persistStore(store);
