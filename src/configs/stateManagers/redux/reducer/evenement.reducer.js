import { ADD_EVENT, DELETE_EVENT, GET_EVENT } from "../action/evenement.action";

const initialState = {};

export default function eventReducers(state = initialState, action) {
  switch (action.type) {
    case GET_EVENT:
      return action.payLoad;

    case DELETE_EVENT:
      return state.filter((event) => event.id !== action.payLoad.id);

    case ADD_EVENT:
      return [action.payLoad, ...state];
    default:
      return state;
  }
}
