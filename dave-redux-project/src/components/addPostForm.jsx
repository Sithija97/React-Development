import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../store/features/posts/postSlice";
import { selectAllUsers } from "../store/features/users/userSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChange = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
    }
    setTitle("");
    setContent("");
  };

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const enableSave = Boolean(title) && Boolean(content) && Boolean(userId);

  return (
    <div>
      <h2>AddPostForm</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChange}
        />

        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChange}>
          <option value="">-select author-</option>
          {userOptions}
        </select>

        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChange}
        />

        <button
          type="button"
          onClick={onSavePostClicked}
          disabled={!enableSave}
        >
          Save Post
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
