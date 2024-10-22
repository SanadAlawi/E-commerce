import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { product, quantity } = action.payload
            const productIndex = state.items.findIndex(p => p.id === product.id)
            
            if (productIndex >= 0)
                state.items[productIndex].quantity += quantity
            else state.items.push({ ...product, quantity })
        },
        removeFromCart(state, action){
            const {productId} = action.payload
            const productIndex = state.items.findIndex(p => p.id === productId)
            if(productIndex >= 0)
                state.items.splice(productIndex, 1)
        },
        resetCart(state) {
            state.items = []
        },
        changeQuantity(state, action){
            const {productId, quantity} = action.payload
            const productIndex = state.items.findIndex(p => p.id === productId)

            if(productIndex >= 0)
                if(quantity <= 0) state.items.splice(productIndex, 1)
                else state.items[productIndex].quantity = quantity
        }

    }
})

export const { addToCart, removeFromCart, resetCart, changeQuantity } = cartSlice.actions
export default cartSlice.reducer

export const getItems = state => state.cart.items