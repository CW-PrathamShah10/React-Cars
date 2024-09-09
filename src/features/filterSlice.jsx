import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedFuel: [],
  minPrice: '',
  maxPrice: '',
  sorting: 'DEFAULT',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFuel: (state, action) => {
      state.selectedFuel = action.payload;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setSorting: (state, action) => {
      state.sorting = action.payload;
    },
    setDefault: (state, action) => {
      state.maxPrice='';
      state.minPrice='';
      state.selectedFuel=[];
      state.sorting='DEFAULT';
    }
  },
});

export const { setFuel, setMinPrice, setMaxPrice, setSorting, setDefault } = filtersSlice.actions;


export default filtersSlice.reducer;
