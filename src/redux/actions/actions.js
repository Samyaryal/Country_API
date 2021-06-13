export const ITEMS_HAS_ERRORED = "ITEMS_HAS_ERRORED";
export const ITEMS_IS_LOADING = "ITEMS_IS_LOADING";
export const ITEMS_FETCH_DATA_SUCCESS = "ITEMS_FETCH_DATA_SUCCESS";
export const ADDING_TO_CART = "ADDING_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export function itemsHasErrored(error) {
  return {
      type: 'ITEMS_HAS_ERRORED',
      payload: error
  };
}
export function itemsIsLoading(loading) {
  return {
      type: 'ITEMS_IS_LOADING',
      payload: loading
  };
}
export function itemsFetchDataSuccess(countries) {
  return {
      type: 'ITEMS_FETCH_DATA_SUCCESS',
      payload: countries
  };
}

export function itemsFetchData (url) {
  return async (dispatch) => {
    try {
      dispatch(itemsIsLoading());
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Something weent wrong');
      }
      const data = await response.json();
      dispatch(itemsFetchDataSuccess(data));
    } catch (error) {
      dispatch(itemsHasErrored(error.message));
    }
  };
};


export function addToCart (country){
  return {
    type: "ADDING_TO_CART",
    payload: country
  }
}

export function removeFromCart (country){
  return {
    type: "REMOVE_FROM_CART",
    payload: country
  }
}
