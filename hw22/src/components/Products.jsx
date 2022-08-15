import React from 'react';
import {popularProducts} from "../assets/js/data";
import styled from 'styled-components';
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(${props=> props.width > 1440 ? 4 : props.width > 768 ? 3 : props.width > 480 ? 2 : 1}, 1fr);
  gap: 10px;
`;

const Products = (props) => {
    const width = window.innerWidth;
    return (
        <Container width={width}>
            {popularProducts.map((item, index) => (
                <Product item={item} key={index}/>
            ))}
        </Container>
    )
}

export default Products;
