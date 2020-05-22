import { SET_TICKETS } from '../actions/types';

const initialState = {
  tickets: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TICKETS:
      return {
        ...state,
        tickets: action.payload
      };
    default:
      return state;
  }
}
