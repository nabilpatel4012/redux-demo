import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    title: ReactNode;
    image: string | undefined;
    id: number;
    name: string;
    price: number;
}
  
interface CartState {
    items: CartItem[];
}
  
const initialState: CartState = {
    items: [],
};
  
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      add: (state, action: PayloadAction<CartItem>) => {
        state.items.push(action.payload);
      },
      remove: (state, action: PayloadAction<number>) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      },
    },
});

export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;



/*
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
*/