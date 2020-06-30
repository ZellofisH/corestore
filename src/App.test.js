import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {mount} from 'enzyme';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

test('state is set', () => {
  let wrapper;
  wrapper = mount(<App />)
  wrapper.setState({
      storeItems: [
        {
          itemId: 1,
          name: 'Italian Coffee',
          price: 6,
          amount: 1,
          img: "images/italian-coffee.jfif"
        },
        {
          itemId: 2,
          name: 'American Coffee',
          price: 5,
          amount: 1,
          img: '/images/american-coffee.jfif'
        },
        {
          itemId: 3,
          name: 'Tea',
          price: 3,
          amount: 1,
          img: '/images/tea.jfif'
        },
        {
          itemId: 4,
          name: 'Chocolate',
          price: 2,
          amount: 1,
          img: '/images/chocolate.jfif'
        }
      ],
      subtotal: Number(16),
      codesApplied: 0,
      creditNotCash: true
  });
  expect(wrapper.state()).toEqual({
    storeItems: [
      {
        itemId: 1,
        name: 'Italian Coffee',
        price: 6,
        amount: 1,
        img: "images/italian-coffee.jfif"
      },
      {
        itemId: 2,
        name: 'American Coffee',
        price: 5,
        amount: 1,
        img: '/images/american-coffee.jfif'
      },
      {
        itemId: 3,
        name: 'Tea',
        price: 3,
        amount: 1,
        img: '/images/tea.jfif'
      },
      {
        itemId: 4,
        name: 'Chocolate',
        price: 2,
        amount: 1,
        img: '/images/chocolate.jfif'
      }
    ],
    subtotal: Number(16),
    codesApplied: 0,
    creditNotCash: true
});
});

test( 'Subtotal Check', () => {
  let wrapper, instance;
  wrapper = mount(<App />)
  instance = wrapper.instance();
  wrapper.setState({
    storeItems: [
      {
        itemId: 1,
        name: 'Italian Coffee',
        price: 6,
        amount: 1,
        img: "images/italian-coffee.jfif"
      },
      {
        itemId: 2,
        name: 'American Coffee',
        price: 5,
        amount: 1,
        img: '/images/american-coffee.jfif'
      },
      {
        itemId: 3,
        name: 'Tea',
        price: 3,
        amount: 1,
        img: '/images/tea.jfif'
      },
      {
        itemId: 4,
        name: 'Chocolate',
        price: 2,
        amount: 1,
        img: '/images/chocolate.jfif'
      }
    ],
    subtotal: Number(16),
    codesApplied: 0,
    creditNotCash: true
});
  expect(instance.checkSubtotal()).toBe(16);
});

test( 'addToCart Check', () => {
  let wrapper, instance;
  wrapper = mount(<App />)
  instance = wrapper.instance();
  wrapper.setState({
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
});
  instance.addToCart(4)
  expect(wrapper.state()).toEqual({
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
        amount: 1,
        img: '/images/chocolate.jfif'
      }
    ],
    subtotal: Number(2),
    codesApplied: 0,
    creditNotCash: true
});
});

test( 'removeFromCart Check', () => {
  let wrapper, instance;
  wrapper = mount(<App />)
  instance = wrapper.instance();
  wrapper.setState({
    storeItems: [
      {
        itemId: 1,
        name: 'Italian Coffee',
        price: 6,
        amount: 1,
        img: "images/italian-coffee.jfif"
      },
      {
        itemId: 2,
        name: 'American Coffee',
        price: 5,
        amount: 1,
        img: '/images/american-coffee.jfif'
      },
      {
        itemId: 3,
        name: 'Tea',
        price: 3,
        amount: 1,
        img: '/images/tea.jfif'
      },
      {
        itemId: 4,
        name: 'Chocolate',
        price: 2,
        amount: 1,
        img: '/images/chocolate.jfif'
      }
    ],
    subtotal: Number(16),
    codesApplied: 0,
    creditNotCash: true
});
instance.removeFromCart(3)
  expect(wrapper.state()).toEqual({
    storeItems: [
      {
        itemId: 1,
        name: 'Italian Coffee',
        price: 6,
        amount: 1,
        img: "images/italian-coffee.jfif"
      },
      {
        itemId: 2,
        name: 'American Coffee',
        price: 5,
        amount: 1,
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
        amount: 1,
        img: '/images/chocolate.jfif'
      }
    ],
    subtotal: Number(13),
    codesApplied: 0,
    creditNotCash: true
});
});
