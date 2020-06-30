import React, { Component } from 'react'
import PropTypes from "prop-types";

//generates item to appear in the store section
export class StoreItem extends Component {
    getStyle = () => {
        return{
            background: "#f4f4f4",
            padding: "10px",
            border: "5px",
            borderBottom: "1px #ccc dotted",
            textAlign: "center"
        }
    }

    //doesn't currently do anything but might re-add this later
    onChange = (e, value) => {
        this.props.changeAmount.bind(this, this.props.item.itemId, value)
    }


    render() {
        return (
            <div style = {this.getStyle()}>   
                <div>
                    <p>{this.props.item.name}</p> 
                    <img src = {this.props.item.img} alt= {this.props.item.name}/>  
                </div>
                <input 
                    type="text" 
                    name="title" 
                    style={{ padding: '5px' }}
                    placeholder="0" 
                    value={this.props.item.amount}
                    // onChange = {this.props.changeAmount.bind(this, this.props.item.itemId, this.value)}
                    readOnly = {true}
                />
                <button style = {btnStyle} onClick = {this.props.addToCart.bind(this, this.props.item.itemId)}>+ </button>
                <button style = {btnStyle} onClick = {this.props.removeFromCart.bind(this, this.props.item.itemId)}>- </button>
            </div>
            
            
        )
    }
}

const btnStyle = {
  padding: "5px 9px",
  cursor: "pointer"
}

// PropTypes
StoreItem.propTypes = {
    item: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
  }

export default StoreItem;
