import { configureStore } from "@reduxjs/toolkit";
import ContactsReducer from "./slices/contacts.slice";
// import logger from "redux-logger";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: "MyApp",
    storage
};
const rootReducer = combineReducers({
    contacts: ContactsReducer
});

const persistedReducer = persistReducer(persistConfig, ContactsReducer);

const store = configureStore ({
    reducer: persistedReducer,
    middleware: []
});

export const persistor = persistStore(store);

export default store;
