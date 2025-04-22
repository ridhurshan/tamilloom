import { createSlice } from '@reduxjs/toolkit';

// Initial state of the modal
const initialState = {
  isOpen: false,
  modalContent: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.isOpen = true;
      state.modalContent = action.payload;
      console.log("action.payload"+action.payload);
    },
    hideModal: (state) => {
      state.isOpen = false;
      state.modalContent = null;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;
