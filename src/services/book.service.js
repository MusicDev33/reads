import axios from 'axios';
import { BACKEND } from 'env';

export const createOneBook = async (postBody) => {
  let returnData;

  try {
    const res = await axios.post(`${BACKEND}/books/create`, postBody);
    returnData = res.data;
  } catch (err) {

    returnData = { success: false };
  }

  return returnData;
}

export const getLatestBooks = async (limit) => {
  let returnData;

  try {
    const res = await fetch(`${BACKEND}/books?limit=${limit}`);
    returnData = res.json();
  } catch (e) {
    returnData = { success: false };
  }

  return returnData;
}
