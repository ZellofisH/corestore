import React, { Component } from 'react'

//generates an item to appear in the checkout section
export class CheckoutItem extends Component {
    render() {
        if (this.props.item.amount > 0) {
            return (
                <div>
                    <h2>{this.props.item.name}: ${this.props.item.amount * this.props.item.price}</h2>
                </div>
            )
        } else {
            return (
                <div>
                    
                </div>
            )
        }
    }
}

export default CheckoutItem
