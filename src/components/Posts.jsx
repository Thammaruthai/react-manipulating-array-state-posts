import { PostData } from "./PostData";
import { useState } from "react";

function Posts() {
  const [post, setPost] = useState(PostData);
  const dislike = (id) => {
    const newPost = [...post];
    if (post[id - 1].likes > 0) {
      newPost[id - 1].likes -= 1;
    }
    setPost(newPost);
  };
  const like = (id) => {
    const newPost = [...post];
    newPost[id - 1].likes += 1;
    setPost(newPost);
  };

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {post.map((item) => {
          return (
            <div class="post-item">
              <div class="post-header">
                <h2>Post Title #{item.id}</h2>
                <div class="post-social-media-stats">
                  <span class="stats-topic">Likes: </span>
                  <span class="post-likes">{item.likes}</span>
                </div>
              </div>
              <p class="post-content">{item.content}</p>
              <div class="post-actions">
                <button class="like-button" onClick={() => like(item.id)}>Like</button>
                <button class="dislike-button" onClick={() => dislike(item.id)}>
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
