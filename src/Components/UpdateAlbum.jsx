import { Link, NavLink, useParams } from "react-router-dom";

import { useState } from "react";
import Style from "./styles/albumupdate.module.css";

const UpdateAlbum = ({ updateAlbumInList }) => {
  const [userId, setUserId] = useState(0);
  const [updateid, setUpdateId] = useState(1);
  const [title, setTitle] = useState("");

  const { id } = useParams();
  // console.log(Number(id));

  const handleUserChange = (e) => {
    setUserId(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  //this function get all the input like userid and title then call add album function for add it on the album list.
  const getAlbumFormData = (e) => {
    e.preventDefault();
    //pass id , title , userid

    // console.log(typeof id);
    updateAlbumInList(Number(id), title, Number(userId));
    console.log(updateAlbumInList);
  };

  return (
    <>
      <h2>Update Album</h2>
      <form className={Style.form} onSubmit={getAlbumFormData}>
        <h3>UserId</h3>
        <input
          onChange={handleUserChange}
          id="addform-userID"
          type="number"
          value={userId}
          placeholder="UserId"
          name="userId"
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
          Update
        </button>
        <NavLink className={Style.button} to="/">
          Go Back
        </NavLink>
      </form>
    </>
  );
};

export default UpdateAlbum;
