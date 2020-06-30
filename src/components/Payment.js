import React, { Component } from 'react'

//payment component of the app
export class Payment extends Component {

    //originally this had more logic for button clicks but that was moved to app for fix a small bug with state changes
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Total: ${this.props.total}</h1>
                <form onSubmit = {this.props.onCodeSubmit}>
                    <input
                        type="text" 
                        name="title" 
                        style={{ flex: '10', padding: '5px' }}
                        placeholder="Discount Code" 
                        onChange={this.onChange}
                    />
                    <input 
                        type= 'submit'
                        value = "Submit Code"
                        style = {{flex: '1'}}
                    />
                </form>
                <button onClick = {this.props.creditClick}>Credit</button> 
                {this.props.total < 10 && 
                <button onClick = {this.props.cashClick}>Cash</button>
                }
                <form onSubmit = {this.props.onSubmit}>
                    {this.props.creditNotCash && <input
                        type="text" 
                        name="title" 
                        style={{ flex: '10', padding: '5px' }}
                        placeholder="Credit Card Number" 
                        onChange={this.onChange}
                    />}
                    {(!this.props.creditNotCash) && this.props && <h1>Cash upon Delivery</h1>}
                    <input 
                        type= 'submit'
                        value = "Submit Order"
                        style = {{flex: '1'}}
                    />
                </form>
            </div>
        )
    }
}

export default Payment
