import { createSlice } from "@reduxjs/toolkit";

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    restaurant: {
      id: null,
      imgUrl: null,
      title: null,
      rating: null,
      genre: null,
      address: null,
      description: null,
      dihses: null,
    },
  },
  reducers: {
    setResturant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setResturant } = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant.restaurant;

export default restaurantSlice.reducer;
