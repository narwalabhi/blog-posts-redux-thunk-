import _ from "lodash";
import jsonplaceholder from "../apis/JsonPlaceHolder";

export const fetchPostsAndUsers = () => async (dispatch,getState) => {
  await dispatch(fetchPosts());
  // console.log(getState().posts);
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach(id => dispatch(fetchUser(id)));
}


export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonplaceholder.get("/posts");
    dispatch({
      type: "FETCH_POSTS",
      payload: response.data,
    });
  };
};

export const fetchUser = (userId) => {
  return async (dispatch) => {
    const response = await jsonplaceholder.get(`/users/${userId}`);
    dispatch({type:'FETCH_USER', payload: response.data})
  };
};

// MEMOIZED VERSION

// export const fetchUsers = (userId) => {
//   return dispatch => {
//     _fetchUser(userId, dispatch);
//   }
// }

// //private function
// const _fetchUser = _.memoize(async (userId, dispatch) => {
//   const response = await jsonplaceholder.get(`/users/${userId}`);
//   dispatch({
//     type:"FETCH_USER",
//     payload: response.data
//   })
// });
