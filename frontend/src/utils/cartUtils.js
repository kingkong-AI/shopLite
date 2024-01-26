
export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
}

export const updateCart = (state) => {
    //Calculate Item Price
    state.itemsPrice = addDecimals(state.cartItems.reduce((accumulator,item) => 
    accumulator + item.price * item.qty, 0));

    //shipping price : >100$ free else 10$

    state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

    // 15% tax Price
    state.taxPrice = addDecimals(Number((.15 * state.itemsPrice).toFixed(2)));

    //totalPrice
    state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
    ).toFixed(2);

    //store everything in localStorage
    localStorage.setItem('cart', JSON.stringify(state));

    return state;
}