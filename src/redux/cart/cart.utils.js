export const addItemToCart = (cartItems, carItemToAdd) => {

    // Checks if the new item to add exist in the array
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === carItemToAdd.id
    )

    // If exist map all the items to find the existing one and when matches add a property qunatity sum +1 to the actual qunatity
    if(existingCartItem){
        return cartItems.map(cartItem =>
                cartItem.id === carItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1}
                :  cartItem
            )
    }

    // If doesnt exist return the existing cartItem and add a quantity to 1
    return [...cartItems, { ...carItemToAdd, quantity: 1}]

}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {

    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    if(existingCartItem.quantity === 1){
        return cartItems.filter(
            carItem => carItem.id !== cartItemToRemove.id
        )
    }

    return cartItems.map(
            cartItem => cartItem.id === cartItemToRemove.id 
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
        );
}