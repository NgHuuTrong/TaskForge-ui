import { createSlice } from "@reduxjs/toolkit";

const initialState = {
<<<<<<< HEAD
    activeTab: 'boards',
    showSubTemplateTabs: false
=======
    activeTab: 'boards'
>>>>>>> f8e3df0 (update sidebar)
};

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        setActiveTab(state, action) {
            state.activeTab = action.payload;
<<<<<<< HEAD
        },
        setShowSubTemplateTabs(state, action) {
            state.showSubTemplateTabs = action.payload;
=======
>>>>>>> f8e3df0 (update sidebar)
        }
    }
});

<<<<<<< HEAD
export const { setActiveTab, setShowSubTemplateTabs } = sidebarSlice.actions;
=======
export const { setActiveTab } = sidebarSlice.actions;
>>>>>>> f8e3df0 (update sidebar)
export default sidebarSlice.reducer;