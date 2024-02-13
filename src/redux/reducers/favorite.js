import { ADD_TO_FAVORITE, DELETE_FAVORITE, TURN_OFF_SPINNER } from "../actions";

const initialState = {
  // list: {
  favorite: [],
  isLoading: true,
  // },
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return {
        ...state,
        // list: {
        //   ...state.list,
        favorite: [...state.favorite, action.payload],
        // },
      };

    case DELETE_FAVORITE:
      return {
        ...state,
        // list: {
        //   ...state.list,
        favorite: state.favorite.filter((book, i) => i !== action.payload),
        // },
      };

    case TURN_OFF_SPINNER:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default favoriteReducer;
