import * as actionTypes from "./actions/actions";

const initialState = {
  user: {
    token: null,
    accountType: null,
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
        return {
            ...state,
            user: { token: action.token, accountType: action.account },
        };
    default:
      return state;
  }
};

export default reducer;
