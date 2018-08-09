import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_TRAVEL = 'ADD_TRAVEL';
export const ADD_TRAVELS = 'ADD_TRAVELS';
export const DELETE_TRAVEL = 'DELETE_TRAVEL';

// Export Actions
export function addTravel(travel) {
  return {
    type: ADD_TRAVEL,
    travel,
  };
}

export function addTravelRequest(travel) {
  return (dispatch) => {
    return callApi('travels', 'post', {
      travel: {
        from: travel.from,
        to: travel.to,
        date: travel.date,
        plate: travel.plate,
        price: travel.price,
        model: travel.model,
        content: travel.content,
      },
    }).then(res => dispatch(addTravel(res.travel)));
  };
}

export function addTravels(travels) {
  return {
    type: ADD_TRAVELS,
    travels,
  };
}

export function fetchTravels() {
  return (dispatch) => {
    return callApi('travels').then(res => {
      dispatch(addTravels(res.travels));
    });
  };
}

export function fetchTravel(cuid) {
  return (dispatch) => {
    return callApi(`travels/${cuid}`).then(res => dispatch(addTravel(res.travel)));
  };
}

export function deleteTravel(cuid) {
  return {
    type: DELETE_TRAVEL,
    cuid,
  };
}

export function deleteTravelRequest(cuid) {
  return (dispatch) => {
    return callApi(`travels/${cuid}`, 'delete').then(() => dispatch(deleteTravel(cuid)));
  };
}
