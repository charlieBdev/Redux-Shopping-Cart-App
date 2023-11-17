import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
	name: 'ui',
	initialState: {
		notification: null,
	},
	reducers: {
		showNotification(state, action) {
			state.notification = {
				open: action.payload.open,
				type: action.payload.type,
				message: action.payload.message,
			};
		},
	},
});

export const uiActions = uiSlice.actions;

export default uiSlice;
