import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    CartArea,
    CartHeader,
    CartBody,
    CartIcon,
    CartText,
    CartDown,
    ProductsArea,
    ProductItem,
    ProductPhoto,
    ProductInfoArea,
    ProductQuantityArea,
    ProductName,
    ProductPrice,
    ProductQtIcon,
    ProductQtText
} from './styled';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart.products);

    const [show, setShow] = useState(false);

    const handleCartClick = () => {
        setShow(!show);
    }

    const handleProductChange = (key, type) => {
        dispatch({
            type: 'CHANGE_PRODUCT',
            payload: {key,type}
        });
    }

    return (
        <CartArea>
            <CartHeader onClick={handleCartClick}>
                <CartIcon src='/assets/cart.png'></CartIcon>
                <CartText>Meu Carrinho ({products.length})</CartText>
                <CartDown show={show} src="/assets/down.png" alt="" />
            </CartHeader>
            <CartBody show={show}>
                <ProductsArea>
                    {products.map((item, index) => (
                        <ProductItem key={index}>
                            <ProductPhoto src={item.image} alt="" />
                            <ProductInfoArea>
                                <ProductName>{item.name}</ProductName>
                                <ProductPrice>R$ {(item.price).toFixed(2)}</ProductPrice>
                            </ProductInfoArea>
                            <ProductQuantityArea>
                                <ProductQtIcon 
                                    src="/assets/minus.png" 
                                    alt="" 
                                    onClick={() => handleProductChange(index, '-')}
                                />
                                <ProductQtText>{item.qt}</ProductQtText>
                                <ProductQtIcon 
                                    src="/assets/plus.png" 
                                    alt="" 
                                    onClick={() => handleProductChange(index, '+')}
                                />
                            </ProductQuantityArea>
                        </ProductItem>
                    ))}
                </ProductsArea>
            </CartBody>
        </CartArea>
    );
}

export default Cart;