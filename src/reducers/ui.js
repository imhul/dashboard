import { initState } from './initState';
import { types } from '../constants/action_types';

export default (state = initState, action) => {
  switch (action.type) {
    case types.CHANGE_LOCATION:
      return { 
        ...state,
        location: `board${action.payload}`, 
      };

    case types.DROP_FIGURE:
      const { payload } = action;
      return {
        ...state,
        boards: [...state.boards, payload],
      };

    default:
      return state;
    }
};
