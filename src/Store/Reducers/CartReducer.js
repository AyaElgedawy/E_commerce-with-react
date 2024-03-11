const INITIAL_VALUE = {
    Cart: [],
    
  }
  export default function CartReducer(state=INITIAL_VALUE, action){
    switch (action.type) {
      case 'addCart':
        const findProduct = state.Cart.find((product) => product.id === action.payload.id);
        if(findProduct){
          findProduct.quantity += 1;
        }
        else{
          const productClone = {...action.payload,quantity:1}
          state.Cart.push(productClone)
        }
        return {
          Cart: [...state.Cart ] ,
         
          
        }
        case 'removeCart':
          
            const updatedCart = state.Cart.filter(
              (item) => item.id !== action.payload
            );
            return {
              
              Cart: updatedCart,
            };

        case 'decreaseCart':
          const deProduct = state.Cart.find((product) => product.id === action.payload.id);
        if(deProduct){
          deProduct.quantity -= 1;
        }
        
        return {
          Cart: [...state.Cart ] ,
         
          
        }

          
    
    
      default:
        return state;
    }
  }