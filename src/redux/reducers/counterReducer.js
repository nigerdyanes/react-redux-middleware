import { INCREMENT, DECREMENT, RESET, FAIL_DECREMENT } from "../actionTypes";

const initialState = {
  counter: 0,
  alertFail: false
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case RESET:
      return {
        ...state,
        counter: 0
      };
    case FAIL_DECREMENT:
      return {
        ...state,
        alertFail: true
      };
    default:
      return state;
  }
}
