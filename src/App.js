import React, {Component} from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Store from './components/Store';
import Checkout from './components/Checkout';
import Payment from './components/Payment'

//store-like component with 4 drink options complete with fake payment abilities at the bottom

class App extends Component{

  //basic state (might add pulling stock from AWS database)
  state = {
    storeItems: [
      {
        itemId: 1,
        name: 'Italian Coffee',
        price: 6,
        amount: 0,
        img: "images/italian-coffee.jfif"
      },
      {
        itemId: 2,
        name: 'American Coffee',
        price: 5,
        amount: 0,
        img: '/images/american-coffee.jfif'
      },
      {
        itemId: 3,
        name: 'Tea',
        price: 3,
        amount: 0,
        img: '/images/tea.jfif'
      },
      {
        itemId: 4,
        name: 'Chocolate',
        price: 2,
        amount: 0,
        img: '/images/chocolate.jfif'
      }
    ],
    subtotal: Number(0),
    codesApplied: 0,
    creditNotCash: true
  }

  
  //calulates the subtotal by looping through storeItems in state
  //very ineffcient but serves its purpose currently
  // params: codeCheck => boolean for factoring in an extra codeApplied in cases where state is not updated yet
  checkSubtotal = (codeCheck) => {
    var subtotal = 0;
    this.state.storeItems.map((item) => {
      subtotal += item.price * item.amount;
      return item;
    }
    )
    if (codeCheck){
      subtotal -= (this.state.codesApplied + 1) * 10;
    } else {
      subtotal -= this.state.codesApplied * 10
    }
    ;
    if (subtotal < 0) {
      subtotal = 0;
    }
    return subtotal;
  }

  //increments amount of a storeItem when called
  //params: itemId => id of storeItem to be incremented
  addToCart = (itemId) => {
    this.setState({
      storeItems: this.state.storeItems.map(item => {
        if (item.itemId === itemId) {
          item.amount++;
        }
        return item;
      }),
    subtotal: this.checkSubtotal(false),
    creditNotCash: this.checkSubtotal(false) < 10? this.state.creditNotCash : true
    })
  }

  //decrements amount of a storeItem when called if amount is not already 0
  //params: itemId => id of storeItem to be decremented
  removeFromCart = (itemId) => {
    this.setState({
      storeItems: this.state.storeItems.map(item => {
        if (item.itemId === itemId) {
          if (item.amount > 0){
            item.amount--;
          }
        }
        return item;
      }),
      subtotal: this.checkSubtotal(false),
      creditNotCash: this.checkSubtotal(false) < 10? this.state.creditNotCash : true
    })
  }

  //Currently non functional
  changeAmount = (itemId, value) => {
    this.setState({
      storeItems: this.state.storeItems.map(item => {
        if (item.itemId === itemId) {
          if (value > 0){
            item.amount = value;
          }
        }
        return item;
      })
    })
  }

  //resets page
  //ToDo: maybe add api call to send fake payment info
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      storeItems: this.state.storeItems.map(item => {
        item.amount = 0;
        return item;
      }),
      subtotal: Number(0),
      codesApplied: Number(0)
    })
  }

  //increments codesApplied in state
  onCodeSubmit = (e) => {
    e.preventDefault();
    this.setState({
      codesApplied: this.state.codesApplied + 1,
      subtotal: this.checkSubtotal(true),
      creditNotCash: this.checkSubtotal(true) < 10? this.state.creditNotCash : true
    })
  }

  //clicking credit changes payment option to credit
  creditClick = () => {
    this.setState({
      creditNotCash: true
    })
  }

  //clicking cash changes payment option to cash
  cashClick = () => {
    this.setState({
      creditNotCash: false
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Store storeitems = {this.state.storeItems} addToCart={this.addToCart} removeFromCart={this.removeFromCart} changeAmount={this.changeAmount}/>
        <div className="Cart">
          <h1>Checkout:</h1>
          <Checkout cartitems = {this.state.storeItems}/>
          <h2>Code Applied: {this.state.codesApplied > 0 && '-$'}{this.state.codesApplied > 0 && this.state.codesApplied * 10}</h2>
          <h1>Subtotal: ${this.state.subtotal}</h1>
        </div>
        <Payment creditNotCash = {this.state.creditNotCash} creditClick = {this.creditClick} cashClick = {this.cashClick} total = {this.state.subtotal} onSubmit = {this.onSubmit} onCodeSubmit = {this.onCodeSubmit}/>
      </div>
    );
  }
  
}

export default App;
