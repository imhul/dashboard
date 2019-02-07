import { types } from '../constants/action_types';

export function changeLocation(location) {
  return (dispatch) => {
    dispatch({
      type: types.CHANGE_LOCATION,
      payload: location.key,
    })
  }
};

export function dropFigure(figureArr) {
  return (dispatch, getState) => {
    const { ui } = getState();
    return dispatch({
      type: types.DROP_FIGURE,
      payload: {
        board:  `${ui.location}`,
        id:     figureArr[0],
        x:      figureArr[1],
        y:      figureArr[2],
      }
    })
  }
};
