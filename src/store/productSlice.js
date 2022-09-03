import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading' 
});

const productSlice = createSlice({
    name: 'product',
    initialState: {
     data: [],
     status: STATUSES.IDLE,
    },
    reducers: {
        setProducts(state, action) {
            state.data = action.payload;
            console.log("setProduct");
        },
        setStatus(state, action) {
            state.status = action.payload;
            console.log("setStatus ")
        },
    },
});
export const {setProducts, setStatus} = productSlice.actions
export default productSlice.reducer;

//THUNKS
export function fetchProducts() {
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            let response = await fetch('https://fakestoreapi.com/products')
            response = await response.json()
            dispatch(setProducts(response));
            dispatch(setStatus(STATUSES.ERROR));

        } catch(err) {
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR));
        }
    }
}