import {createSlice, nanoid} from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: "cars",
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        addCar: (state, action) => {
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            });
        },
        deleteCar: (state, action) => {
            state.data = state.data.filter(car => car.id !== action.payload);
        }
    }
})

export const {changeSearchTerm, addCar, deleteCar} = carsSlice.actions;
export const carsReducer = carsSlice.reducer