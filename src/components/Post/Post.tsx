import React from "react";
import "./Post.scss";

interface PostProps {
  title: string;
  description: string;
  tags: string[];
  authorId: string;
  comments: string[];
}

const Post: React.FC<PostProps> = ({
  title,
  description,
  tags,
  authorId,
  comments,
}) => {
  return (
    <div className="post">
      <div className="post__info">
        <h3 className="post__title">{title}</h3>
        <span>{authorId}</span>
      </div>

      <p className="post__description">{description}</p>

      <div className="post__tags">
        {tags.map((tag) => {
          return <div className="tag">#{tag}</div>;
        })}
      </div>

      <p className="post__comments">There are {comments.length} comments</p>
    </div>
  );
};

export default Post;
