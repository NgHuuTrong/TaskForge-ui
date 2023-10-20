import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeTab: 'boards',
    showSubTemplateTabs: false
};

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        setActiveTab(state, action) {
            state.activeTab = action.payload;
        },
        setShowSubTemplateTabs(state, action) {
            state.showSubTemplateTabs = action.payload;
        }
    }
});

export const { setActiveTab, setShowSubTemplateTabs } = sidebarSlice.actions;
export default sidebarSlice.reducer;