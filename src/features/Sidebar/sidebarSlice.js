import { createSlice } from "@reduxjs/toolkit";

const initialState = {
<<<<<<< HEAD
<<<<<<< HEAD
    activeTab: 'boards',
    showSubTemplateTabs: false
=======
    activeTab: 'boards'
>>>>>>> f8e3df0 (update sidebar)
=======
    activeTab: 'boards',
    showSubTemplateTabs: false
>>>>>>> e634ed9 (add sub tabs for Templates tab)
};

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        setActiveTab(state, action) {
            state.activeTab = action.payload;
<<<<<<< HEAD
<<<<<<< HEAD
        },
        setShowSubTemplateTabs(state, action) {
            state.showSubTemplateTabs = action.payload;
=======
>>>>>>> f8e3df0 (update sidebar)
=======
        },
        setShowSubTemplateTabs(state, action) {
            state.showSubTemplateTabs = action.payload;
>>>>>>> e634ed9 (add sub tabs for Templates tab)
        }
    }
});

<<<<<<< HEAD
<<<<<<< HEAD
export const { setActiveTab, setShowSubTemplateTabs } = sidebarSlice.actions;
=======
export const { setActiveTab } = sidebarSlice.actions;
>>>>>>> f8e3df0 (update sidebar)
=======
export const { setActiveTab, setShowSubTemplateTabs } = sidebarSlice.actions;
>>>>>>> e634ed9 (add sub tabs for Templates tab)
export default sidebarSlice.reducer;