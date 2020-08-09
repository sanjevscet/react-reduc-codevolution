import { buyCake, buyIceCReam } from '../redux';

import React from 'react'
import { connect } from 'react-redux';

function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.items}</h2>
            <button
                onClick={props.buyItem}
            >Buy Now</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState =ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams;

    return {
        items: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCReam());

    return {
        buyItem: dispatchFunction
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
