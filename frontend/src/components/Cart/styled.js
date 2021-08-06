import styled from "styled-components";

export const CartArea = styled.div`
    background-color: #136713;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: fixed;
    bottom: 0;
    right: 30px;
`;

export const CartHeader = styled.div`
    width: 290px;
    height: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const CartIcon = styled.img`
    width: 23px;
    height: auto;
    margin: 0px 10px;
`;

export const CartText = styled.div`
    flex: 1;
    color: #FFF;
    font-size: 17px;
`;

export const CartBody = styled.div`
    color: #FFF;
    transition: height 5s;
    height: ${props=>props.show ? 'auto' : '0px'};
`;

export const CartDown = styled.img`
    width: 23px;
    height: auto;
    margin: 0px 10px;
    transition: all ease 0.65s;
    transform: ${props=>props.show ? 'rotate(0deg)' : 'rotate(180deg)'};
`;

export const ProductsArea = styled.div`
`;

export const ProductItem = styled.div`
    display: flex;
    margin: 10px;
`;

export const ProductPhoto = styled.img`
    width: 64px;
    height: auto;
    border-radius: 10px;
`;

export const ProductInfoArea = styled.div`
    flex: 1;
    margin-left: 10px;
`;

export const ProductQuantityArea = styled.div`
    display: flex;
    align-items: center;
`;

export const ProductName = styled.div`
    font-size: 15px;
    font-weight: bold;
`;

export const ProductPrice = styled.div`
    font-size: 13px;
`;

export const ProductQtIcon = styled.img`
    width: 13px;
    height: auto;
    cursor: pointer;
`;

export const ProductQtText = styled.div`
    font-size: 13px;
    font-weight: bold;
    margin: 0px 5px;
`;