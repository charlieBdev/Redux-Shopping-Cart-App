import { cartActions } from './cart-slice';
import { uiActions } from './ui-slice';

const firebaseURL =
	'https://redux-shopping-d341c-default-rtdb.europe-west1.firebasedatabase.app/';

export const fetchData = () => {
	return async (dispatch) => {
		const fetchHandler = async () => {
			const res = await fetch(firebaseURL);
			const data = await res.json();
			return data;
		};
		try {
			const cartData = await fetchHandler();
			console.log(cartData);
			dispatch(cartActions.replaceData(cartData));
		} catch (err) {
			dispatch(
				uiActions.showNotification({
					open: true,
					message: 'Sending Request Failed',
					type: 'error',
				})
			);
		}
	};
};

export const sendCartData = (cart) => {
	return async (dispatch) => {
		dispatch(
			uiActions.showNotification({
				open: true,
				message: 'Sending Request To Database!',
				type: 'warning',
			})
		);
		const sendRequest = async () => {
			// Send state as Sending request

			const res = await fetch(firebaseURL, {
				method: 'PUT',
				body: JSON.stringify(cart),
			});
			const data = await res.json();
			// Send state as Request is successful
			dispatch(
				uiActions.showNotification({
					open: true,
					message: 'Request Sent Successfully!!',
					type: 'success',
				})
			);
		};
		try {
			await sendRequest();
		} catch (err) {
			dispatch(
				uiActions.showNotification({
					open: true,
					message: 'Sending Request Failed',
					type: 'error',
				})
			);
		}
	};
};
