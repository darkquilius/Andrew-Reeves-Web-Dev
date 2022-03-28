import React from 'react';
import styled from "styled-components";
import { nanoid } from "nanoid";
import PortfolioItem from './PortfolioItem';
import { PortfolioArray } from '../utils/PortfolioArray';

const PortfolioItems = () => {
    return (
        <PortfolioItemsStyles>
            {PortfolioArray.map(item => <PortfolioItem {...item} key={nanoid()} />)}
        </PortfolioItemsStyles>
    );
};

const PortfolioItemsStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    margin-top: 3rem;
    transition: all 0.4s ease-in-out;
    @media screen and (max-width: 950px) {
        grid-template-columns: 1fr;
    grid-gap: 1rem;
    justify-items: center;
        }
`

export default PortfolioItems;