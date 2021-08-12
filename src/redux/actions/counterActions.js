import { INCREMENT, DECREMENT, RESET, FAIL_DECREMENT } from "../actionTypes";

export const increment = () => (dispatch, getState) => {
  const { counter } = getState().counter;
  if (counter === 5) {
    dispatch({
      type: RESET
    });
    return;
  }
  dispatch({
    type: INCREMENT
  });
};

export const decrement = () => (dispatch, getState) => {
  const { counter } = getState().counter;
  if (counter === -1) {
    dispatch({
      type: RESET
    });
    dispatch({
      type: FAIL_DECREMENT
    });
    return;
  }
  dispatch({
    type: DECREMENT
  });
};

export const reset = () => (dispatch) => {
  dispatch({
    type: RESET
  });
};
