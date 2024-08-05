import { configureStore, combineReducers } from "@reduxjs/toolkit";
import detailReducer from "../features/DetailSlice";
import profileReducer from "../features/ProfileSlice";
import cartReducer from "../features/CartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import wishlistReducer from "../features/WishlistReducer";
import { authReducer } from "../features/authSlice";
import { drawerReducer } from "../features/drawerSlice";
import apiSlice from "../services/apiSlice";
import { blogSlice } from "../services/blogSlice";
import { blogReducer } from "../features/BlogRedux";
import { arrivalReducer } from "../features/NewarrivalRedux";
import { orderReducer } from "../features/OrderSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  [blogSlice.reducerPath]: blogSlice.reducer,
  detailslice: detailReducer,
  profileslice: profileReducer,
  cartslice: cartReducer,
  orderlist:orderReducer,
  wishlist: wishlistReducer,
  drawer: drawerReducer,
  auth: authReducer,
  blogslice: blogReducer,
  arrivalslice:arrivalReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware, blogSlice.middleware),
});
