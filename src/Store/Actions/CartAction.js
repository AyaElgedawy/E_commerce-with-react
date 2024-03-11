    
    

export const addToCart = (payload) => {
  return { // product object
    type: 'addCart',
    payload
    
   
  }}

  
  export const removeFromCart = (payload) => {  // product id
    return {
      type: 'removeCart',
      payload
      
    };
  };

  export const increaseCart = (payload) => ({ // product id
    type: 'increaseToCart',
    payload

  })

  export const decrease_Cart = (payload) => ({ // product 
    type: 'decreaseCart',
    payload

  })