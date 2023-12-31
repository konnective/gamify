import axios from 'axios';
import { updateStart, updateSuccess, updateFailure } from './userSlice';

export const updateUser = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    // const res = await axios.post("http://localhost:8800/api/users/1/update", user);
    dispatch(updateSuccess(user));
  } catch (err) {
    dispatch(updateFailure());
  }
};
