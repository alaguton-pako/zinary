import { UiSliceType } from "@/src/Types/Ui";
import { createSlice } from "@reduxjs/toolkit";

const initialState: UiSliceType = {
    showSidebar: false,
    minimizeSidebar: false,
}
export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleSidebar(state) {
            state.showSidebar = !state.showSidebar
        },
        toggleMinimizeSidebar(state) {
            state.minimizeSidebar = !state.minimizeSidebar
        }
    }
})

export const { toggleMinimizeSidebar, toggleSidebar } = uiSlice.actions
export const UiReducer = uiSlice.reducer