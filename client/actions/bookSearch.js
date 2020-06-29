import axios from 'axios';
import { SEARCH_BOOKS, ERROR_SEARCH_BOOK } from './types';

//Get books
export const getBooks = (searchWord) => async (dispatch) => {
  try {
    const res = await axios.get(
      'https://www.googleapis.com/books/v1/volumes?q=' + searchWord
    );

    dispatch({
      type: SEARCH_BOOKS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_SEARCH_BOOK,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
