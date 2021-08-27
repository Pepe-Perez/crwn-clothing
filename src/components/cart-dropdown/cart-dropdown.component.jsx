import React from 'react';
import { connect } from 'react-redux';
import { selectCartItem } from '../../redux/cart/cart.selectors';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.style.scss';


const CartDropdown = ({ cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems
                .map(cartItem => 
                    <CartItem key={cartItem.id} item={cartItem}/>
                    )
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

// mapStateToProps get call every time our state updates    
const mapStateToProps = state => ({
    cartItems: selectCartItem(state)
});


export default connect(mapStateToProps)(CartDropdown);