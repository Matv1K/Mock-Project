import React from "react";
import "./Home.scss";

import { Post } from "../../components";

const Home: React.FC = () => {
  return (
    <main>
      <h1>Home</h1>

      <div className="posts">
        <Post
          title="post title"
          description="asasdfas dfasd fasdfasdfas dfasfd df asdf"
          authorId="asdf"
          tags={["a", "d"]}
          comments={["a"]}
        />

        <Post
          title="post title"
          description="asdf asdf"
          authorId="asdf"
          tags={["a", "d"]}
          comments={["a"]}
        />
      </div>
    </main>
  );
};

export default Home;
