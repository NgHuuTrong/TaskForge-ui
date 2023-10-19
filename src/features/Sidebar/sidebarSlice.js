import { createSlice } from "@reduxjs/toolkit";

const initialState = {
<<<<<<< HEAD
    activeTab: 'boards',
    showSubTemplateTabs: false
=======
    activeTab: 'boards'
>>>>>>> 3adba71 (update sidebar)
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
>>>>>>> 3adba71 (update sidebar)
        }
    }
});

<<<<<<< HEAD
export const { setActiveTab, setShowSubTemplateTabs } = sidebarSlice.actions;
=======
export const { setActiveTab } = sidebarSlice.actions;
>>>>>>> 3adba71 (update sidebar)
export default sidebarSlice.reducer;