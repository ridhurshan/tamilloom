
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    searchResults: null,
};

const searchResultsSlice = createSlice({
    name: "searchResults",
    initialState,
    reducers: {
        openSearch: (state, action) => {
            state.isOpen = true;
            state.searchResults = action.payload;
        },
        closeSearch: (state) => {
            state.isOpen = false;
            state.searchResults = null;
        },
    }
});

export const { openSearch, closeSearch } = searchResultsSlice.actions;
export default searchResultsSlice.reducer;
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     isOpen: false,
//     searchResults: null,
// };

// const searchResultsSlice = createSlice({
//     name: "searchResults",
//     initialState,
//     reducers: {
//         openSearch: (state, action) => {
//             state.isOpen = true;
//             state.searchResults = action.payload;
//             console.log("from searchResultsSlice open:", state.isOpen, action.payload);
//         },
//         closeSearch: (state) => {
//             state.isOpen = false;
//             state.searchResults = null;
//             console.log("from searchResultsSlice close:", state.isOpen);
//         },
//     }
// });

// export const { openSearch, closeSearch } = searchResultsSlice.actions;
// export default searchResultsSlice.reducer;
