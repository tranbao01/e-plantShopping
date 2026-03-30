import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15",
                    quantity:1
                }
    ], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const {name, image, cost} = action.payload
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity += 1; // Increment quantity if item already exists
        } else {
            state.items.push({ name, image, cost , quantity: 1 });
        }
    },
    removeItem: (state, action) => {
        const {name} = action.payload
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem && existingItem.quantity > 1) {
            existingItem.quantity -= 1;
        } else if (existingItem && existingItem.quantity === 1) {
            state.items = state.items.filter(item => item.name !== name)
        }
    },
    updateQuantity: (state, action) => {
        const {name, quantity} = action.payload
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity = quantity;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
