import React from 'react';
import {
    CartArea,
    CartHeader,
    CartBody,
    CartIcon,
    CartText
} from './styled';

const Cart = () => {
    return (
        <CartArea>
            <CartHeader>
                <CartIcon src='/assets/cart.png'></CartIcon>
                <CartText>Meu Carrinho (X)</CartText>
            </CartHeader>
            <CartBody>

            </CartBody>
        </CartArea>
    );
}

export default Cart;