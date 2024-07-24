import { ACTION_TYPES } from "../actions";

const initialValues = {
  data: "",
  loading: false,
  error: false
};

export const INITIAL_STATE = {
  quote: {
    ...initialValues
  },
  time: {
    ...initialValues
  },
  ipNumber: {
    ...initialValues
  },
  locationInfo: {
    ...initialValues
  }
};

export const infoReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START:
      return {
        ...state,
        [action.payload.name]: {
          ...state[action.payload.name],
          loading: true,
          error: false
        }
      };
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.name]: {
          data: action.payload.data,
          loading: false,
          error: false
        }
      };
    case ACTION_TYPES.FETCH_ERROR:
      return {
        ...state,
        [action.payload.name]: {
          data: {},
          loading: false,
          error: true
        }
      };
    default:
      throw new Error();
  }
};
