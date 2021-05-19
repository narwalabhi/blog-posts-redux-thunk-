import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts, fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

const PostList = (props) => {
  const { posts } = props;

  const renderePosts = () => {
    return posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    // props.fetchPosts();
    props.fetchPostsAndUsers();
  }, []);

  return <div className="ui relaxed divided list">{renderePosts()}</div>;
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPosts, fetchPostsAndUsers })(PostList);
