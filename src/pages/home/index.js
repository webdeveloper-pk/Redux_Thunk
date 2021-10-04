import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../redux/action";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer.posts);
  console.log(posts, "data");

  useEffect(() => {
    dispatch(allActions.fetchPosts());
  }, []);

  return (
    <div>
      hello
      {posts && posts.map((data) => {
        return <div>{data.title}</div>;
      })}
    </div>
  );
};

export default Home;
