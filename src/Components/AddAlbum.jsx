import { Link, NavLink } from "react-router-dom";

import { useState } from "react";
import Style from "./styles/albumupdate.module.css";

const AddAlbum = ({ addAlbumToList }) => {
  const [userId, setUserId] = useState(0);
  const [title, setTitle] = useState("");

  const handleUserChange = (e) => {
    setUserId(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  //this function get all the input like userid and title then call add album function for add it on the album list.
  const getAlbumFormData = (e) => {
    e.preventDefault();
    addAlbumToList(Number(userId), title);
  };

  return (
    <>
      <form className={Style.form} onSubmit={getAlbumFormData}>
        <h1>Create Album</h1>

        <h3>UserId</h3>
        <input
          onChange={handleUserChange}
          id="addform-userID"
          type="number"
          value={userId}
          placeholder="UserId"
          required
        />

        <h3>Title</h3>
        <input
          onChange={handleTitleChange}
          id="addform-title"
          type="text"
          value={title}
          placeholder="Title"
          required
        />
        <button className={Style.button} type="submit">
          Create
        </button>
        <NavLink className={Style.button} to="/">
          Go Back
        </NavLink>
      </form>
    </>
  );
};

export default AddAlbum;
