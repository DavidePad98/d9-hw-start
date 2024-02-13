import { JOB_LIST } from "../actions";

const InitialState = {
  list: [],
};
const jobListReducer = (state = InitialState, action) => {
  switch (action.type) {
    case JOB_LIST:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default jobListReducer;
