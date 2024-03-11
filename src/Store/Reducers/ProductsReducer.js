const INITIAL_VALUE = {
    products: [],
    categories: []
  }
  export default function ProductsReducer(state=INITIAL_VALUE, action){
    switch (action.type) {
      case 'Get_Products':
        return {
            ...state,
            products: action.payload ,
         
          
        }
        case 'Get_Categories':
          return {
            ...state,
            categories: action.payload
          }

        case 'category':
        
          const updatedProducts = state.products.filter(
            (item) => item.category === action.payload.category
          );
          return {
            
            products: updatedProducts,
          };  
        
      default:
        return state;
    }

  }