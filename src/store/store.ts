import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import rootReducer from "./root-reducer";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        root: rootReducer,
    }
});

export default store; 
export type RootState = ReturnType<typeof rootReducer>;
