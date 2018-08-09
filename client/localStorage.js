import { GLOBAL_WINDOW } from './util/constants/Constants';


export const loadState = () => {
  try {
    const serializedState = GLOBAL_WINDOW.localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    GLOBAL_WINDOW.localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log('ERR', err);
  }
};
