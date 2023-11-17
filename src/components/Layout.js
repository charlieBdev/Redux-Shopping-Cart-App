import React from 'react';
import './Layout.css';
import Header from './Header';
import Products from './Products';
import CartItems from './CartItems';
import { useSelector } from 'react-redux';

const Layout = () => {
	let total = 0;
	const itemsList = useSelector((state) => state.cart.itemsList);
	const showCart = useSelector((state) => state.cart.showCart);

	itemsList.forEach((item) => {
		total += item.totalPrice;
	});

	// let total = itemsList.reduce((acc, curr) => acc + curr.totalPrice, 0);

	return (
		<React.Fragment>
			<div className='layout'>
				<Header />
				<Products />
				{showCart && <CartItems />}
				<div className='total-price'>
					<h3>Total: ${total}</h3>
					<button className='orderBtn'>Place Order</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Layout;
