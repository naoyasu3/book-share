import { SEARCH_BOOKS, ERROR_SEARCH_BOOK } from '../actions/types';

const initialState = {
  books: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_BOOKS:
      return {
        ...state,
        books: payload,
        loading: false,
      };
    case ERROR_SEARCH_BOOK:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
