import callApi from '../../util/apiCaller';
// Export Constants
export const TOGGLE_ADD_TRAVEL = 'TOGGLE_ADD_TRAVEL';
export const ACTIVE_USER = 'ACTIVE_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
// Export Actions
export function toggleAddTravel() {
  return {
    type: TOGGLE_ADD_TRAVEL,
  };
}
export function activeUser(user) {
  return {
    type: ACTIVE_USER,
    user,
  };
}
export function addUser(user) {
  return (dispatch) => {
    return callApi('user', 'post', {
      user: {
        Id: user._profile.id,
        provider: user._provider,
        name: user._profile.name,
        email: user._profile.email,
        avatar: user._profile.profilePicURL,
      },
    }).then(res => dispatch(activeUser(res.op)));
  };
}
export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}
