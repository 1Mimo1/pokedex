import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: localStorage.getItem("nameOfTrainer") ?? "", 
}

const trainerSlice = createSlice({
    initialState,
    name: "trainer",
    reducers: {
        trainerLogin: (state, action) => {
            const newName = action.payload;
            localStorage.setItem("nameOfTrainer", newName)
            state.name = newName;
        },
        logout: (state) => {
            state.name = ""
            localStorage.removeItem("nameOfTrainer")
        }
    },
});
export const { trainerLogin, logout } = trainerSlice.actions

export default trainerSlice.reducer;