import {ADDING_TO_CART, REMOVE_FROM_CART} from '../actions/actions';

const initialState={
  cartItems: [],
  totalFavCount: 0,
}

// const cartReducer = (state=initialState, action) =>{
//   switch(action.tye) {
//     case ADDING_TO_CART:
//   }
// }

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDING_TO_CART:
      const country = action.payload;
      const index = state.cartItems.findIndex((x) => x.country === country);
      if (index >= 0) {
        state.cartItems[index].countFav += 1;
      } else {
        state.cartItems.push({ country, countFav: 1 });
      }

      const total = state.favCountry.reduce(
        (count,cartItems) => count + cartItems.countFav,
        0,
      );
      state.totalFavCount = total;
      return state;

    case REMOVE_FROM_CART:
      const countryToRemove = action.payload;
      state.countFav.cartItems= state.countFav.cartItems.filter(
        (x) => x.name !== countryToRemove,
      );
      break;
     default:
      return state;
  }
};

export default cartReducer;