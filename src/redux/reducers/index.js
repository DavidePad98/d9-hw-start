const initialState = {
  list: {
    favorite: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        list: {
          ...state.list,
          favorite: [...state.list.favorite, action.payload],
        },
      };

    case "DELETE_FAVORITE":
      return {
        ...state,
        list: {
          ...state.list,
          favorite: state.list.favorite.filter(
            (book, i) => i !== action.payload
          ),
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
