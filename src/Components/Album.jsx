import { NavLink } from "react-router-dom";
import Style from "./styles/album.module.css";
function Album({ album, index, deleteAlbumFormList }) {
  //   console.log(album);
  return (
    <>
      <div className={Style.albumContainer} key={index}>
        <h5 className={Style.title}>Title: {album.title}</h5>
        <h5 className={Style.heading}>User Id: {album.userId}</h5>
        <h5 className={Style.heading}>ID: {album.id}</h5>
        <div className={Style.buttonContainer}>
          <button
            className={Style.button}
            onClick={() => deleteAlbumFormList(album.id)}
          >
            Delete
          </button>
          <NavLink className={Style.button} to={`/update/${album.id}`}>
            Update
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Album;
