import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counterSlice';
import basketReducer from '../features/basketSlice';
import detailReducer from '../features/detailSlice';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
};

const persistConfig1 = {
  key: "root1",
  storage: storage,
};

const detailedReducer = persistReducer(persistConfig, detailReducer);
const basketedReducer = persistReducer(persistConfig1, basketReducer);

export const store = configureStore({
  reducer: {
    basket: basketedReducer,
    detail:detailedReducer,
  },
});

export const persistor = persistStore(store);
