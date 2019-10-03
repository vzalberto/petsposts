import React, { useState, useEffect } from "react";

import PostsList from './PostsList'

const Posts = () => {
  const [hasError, setErrors] = useState(false);
  const [posts, setPosts] = useState({});

  async function fetchData() {
    const res = await fetch("/all");
    res
      .json()
      .then(res => setPosts(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });  

  return (
    <div>

      <PostsList posts={posts} />

      <hr />
    </div>
  );
};

export default Posts;