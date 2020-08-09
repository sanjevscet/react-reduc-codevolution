import { useDispatch, useSelector } from 'react-redux'

import React from 'react'
import { buyCake } from '../redux';

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Using Hooks</h1>
            <h2>Number of Cakes - {numOfCakes}</h2>
            <button
                onClick={() => dispatch(buyCake())}
            >
                Buy Now</button>
        </div>
    )
}

export default HooksCakeContainer
