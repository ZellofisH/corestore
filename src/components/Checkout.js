import React, { Component } from 'react'
import CheckoutItem from './CheckoutItem'

//generates the checkout section of the app
export class Checkout extends Component {
    render() {
        return (
            this.props.cartitems.map((item)=> (
            <CheckoutItem key = {item.itemId} item={item} />
        ))
        )
    }
}

export default Checkout
