import Album from "./Album";
import Style from "./styles/albumslist.module.css";
function AlbumsList({ albums, deleteAlbumFormList }) {
  console.log(albums);
  return (
    <>
      <div className={Style.albumslistContainer}>
        {albums.map((album, index) => {
          return (
            <Album
              deleteAlbumFormList={deleteAlbumFormList}
              key={index}
              album={album}
              index={index}
            />
          );
        })}
      </div>
    </>
  );
}

export default AlbumsList;
