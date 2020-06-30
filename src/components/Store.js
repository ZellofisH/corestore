import React, { Component } from 'react';
import StoreItem from './StoreItem';
import PropTypes from "prop-types";

//generates the store section of the app
export class Store extends Component {
    render() {
        return this.props.storeitems.map((item)=> (
            <StoreItem key = {item.itemId} item={item} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} changeAmount={this.props.changeAmount}/>
        ));
    }
}

Store.propTypes = {
    storeitems: PropTypes.array.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
  }

export default Store;
