import React from 'react';


//just a simple header
function Header() {
  return (
    <header style={headerStyle}>
      <h1>CoreStore</h1>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

export default Header;