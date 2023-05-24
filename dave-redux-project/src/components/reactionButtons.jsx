import React from "react";
import { useDispatch } from "react-redux";
import { reactAdded } from "../store/features/posts/postSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButtons = ({ post }) => {
  const disptch = useDispatch();
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() => disptch(reactAdded({ postId: post.id, reaction: name }))}
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });
  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
