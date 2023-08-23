import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductItems {
    id: number;
    name: string;
    price: number;
}
// enum STATUS {
//     IDLE = 'idle',
//     ERROR = 'error',
//     LOADING = 'loading'
//   }
 
interface ProductState {
    items: ProductItems[];
}
const initialState: ProductState = {
  items:[]
}
  
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
      add: (state, action: PayloadAction<ProductItems>) => {
        state.items.push(action.payload);
      },
    },
});

export const {add} = productSlice.actions;
export default productSlice.reducer;