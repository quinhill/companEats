import { isLoading, hasErrored, signUp } from '../actions';

const signUpThunk = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url);
        if (!response.ok) {
          throw Error (response.statusText)
        }
      dispatch(isLoading(false))
      const result = await response.json();
      dispatch(signUp(result))
    }
    catch (error) {
      dispatch(hasErrored(true))
    }
  }
}

export default signUpThunk;