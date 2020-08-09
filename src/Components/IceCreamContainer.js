import React from 'react';
import { buyIceCReam } from '../redux';
import { connect } from 'react-redux';

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of Cakes - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy IceCReam</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => dispatch(buyIceCReam())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
