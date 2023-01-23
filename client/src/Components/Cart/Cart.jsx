import React from 'react'

export default function Cart() {
  

  
    return (
      <div>
        {cart.items.length === 0 ? (
          <div >Cart is empty</div>
        ) : (
          <>
            <h3 >Your Products</h3>
            <div>
              {/* {cart.items.map((item) => (
                <Product
                  key={item.id}
                  item={item}
                  showAs="ListItem"
                  qty={item.qty}
                />
              ))} */}
            </div>
            <div>Total: ${}</div>
          </>
        )}
        <button  >
          Close
        </button>
      </div>
    );
  }
  