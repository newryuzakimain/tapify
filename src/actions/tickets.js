import { SET_TICKETS } from './types';

export const setTickets = tickets => async dispatch => {
  dispatch({
    type: SET_TICKETS,
    payload: tickets
  });
};

