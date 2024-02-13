export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const TURN_OFF_SPINNER = "TURN_OFF_SPINNER";
export const JOB_LIST = "JOB_LIST";

export const addToFavoriteAction = (data) => {
  return {
    type: ADD_TO_FAVORITE,
    payload: data,
  };
};

export const deleteFavoriteFromAction = (i) => {
  return {
    type: DELETE_FAVORITE,
    payload: i,
  };
};

export const getJobsActionCreator = (query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?search=" +
          query +
          "&limit=20"
      );
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: JOB_LIST,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({
        type: TURN_OFF_SPINNER,
      });
    }
  };
};
