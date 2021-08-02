import React from 'react';
import { 
    Container,
    ProductPhotoArea,
    ProductInfoArea,
    ProductButtonArea,
    ProductPhoto,
    ProductName,
    ProductPrice,
    ProdutIngredients,
    ProductButton
} from './styled';

const ProductItem = ({data}) => {
    return (
        <Container>
            <ProductPhotoArea>
                <ProductPhoto src={data.image} alt="" />
            </ProductPhotoArea>
            <ProductInfoArea>
                <ProductName>{data.name}</ProductName>
                <ProductPrice>R$ {data.price}</ProductPrice>
                <ProdutIngredients>{data.ingredients}</ProdutIngredients>
            </ProductInfoArea>
            <ProductButtonArea>
                <ProductButton src="/assets/next.png" />
            </ProductButtonArea>
        </Container>
    );
}

export default ProductItem;