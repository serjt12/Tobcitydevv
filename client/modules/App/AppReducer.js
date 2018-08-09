// Import Actions
import { TOGGLE_ADD_TRAVEL } from './AppActions';

// Initial State
const initialState = {
  showAddTravel: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_TRAVEL:
      return {
        showAddTravel: !state.showAddTravel,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddTravel = state => state.app.showAddTravel;

// Export Reducer
export default AppReducer;
