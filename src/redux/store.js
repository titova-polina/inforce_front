import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const setProductData = createAction("/addProduct");
export const clearProductData = createAction("/removeProduct");

const persistConfig = {
  key: "prod",
  storage,
};

const initialState = {
  prod: {
    product: null,
  },
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setProductData, (state, action) => {
      const { product } = action.payload;
      return { prod: { product } };
    })
    .addCase(clearProductData, () => initialState);
});

const store = configureStore({
  reducer: persistReducer(persistConfig, reducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
