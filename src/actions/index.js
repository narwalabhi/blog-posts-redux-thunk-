import jsonplaceholder from "../apis/JsonPlaceHolder";

export const fetchPosts = () => {
  return async dispatch => {
    const response = await jsonplaceholder.get("/posts");
    dispatch({
      type: "FETCH_POSTS",
      payload: response.data
    });
  };

};


export const fetchUsers = (userId) => {
  return async dispatch => {
    const response = await jsonplaceholder.get(`/users/${userId}`);
    dispatch({
      type:"FETCH_USER",
      payload: response.data
    })
  }
}
