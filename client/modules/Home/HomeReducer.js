// Import Actions
import { ACTIVE_USER, LOGOUT_USER, TOGGLE_ADD_TRAVEL } from './HomeActions';
// Initial State
const initialState = {
  showAddTravel: false,
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_TRAVEL:
      return {
        ...state, showAddTravel: !state.showAddTravel,
      };
    case ACTIVE_USER :
      return {
        ...state, user: action.user,
      };
    case LOGOUT_USER :
      return {
        ...state, user: {},
      };
    default:
      return state;
  }
};

// Get showAddPost
export const getShowAddTravel = state => state.showAddTravel;

export default HomeReducer;
