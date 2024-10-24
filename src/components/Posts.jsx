import { useState } from "react";
import "../App.css";

function Posts({ title, content, likes }) {
  const [likeTotal, setLiketotal] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(0);

  const handlingDislike = ()=>{
    const newDislike = dislikeCount+1;
    setDislikeCount(newDislike);
    setLiketotal(likeTotal-1);
  }

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        <div className="post-item">
          <div className="post-header">
            <h2>{title}</h2>
            <div className="post-social-media-stats">
              <span className="stats-topic">Likes: </span>
              <span className="post-likes">{likeTotal}</span>
            </div>
          </div>
          <p className="post-content">{content}</p>
          {dislikeCount > 3 ? (
            <div className="gif-container">
              <img
                src="https://media.tenor.com/sDKilcw8078AAAAM/rock-one.gif"
                alt="Rock GIF"
              />
            </div>
          ) : <></>}

          <div className="post-actions">
            <button
              className="like-button"
              onClick={() => setLiketotal(likeTotal + 1)}
            >
              Like
            </button>
            <button className="dislike-button" onClick={handlingDislike}>
              Dislike
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
