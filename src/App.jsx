import { useEffect, useState } from "react";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NavBar from "./Components/Navbar";

import AlbumsList from "./Components/AlbumsList";
import AddAlbum from "./Components/AddAlbum";
import UpdateAlbum from "./Components/UpdateAlbum";

function App() {
  const [albums, setAlbums] = useState([]);
  const [newAlbum, setNewAlbum] = useState({});
  const [updatedAlbum, setUpdatedAlbum] = useState({});

  //Fetch the albums from the api
  useEffect(() => {
    async function logAlbums() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
      );
      const albums = await response.json();
      setAlbums(albums);
    }
    logAlbums();
  }, []);

  //Delete the albums in local state
  const deleteAlbumFormList = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: "DELETE",
    });
    const newAlbums = albums.filter((album) => album.id !== id);
    setAlbums(newAlbums);
    alert("Album Deleted successfully ");
  };

  //Add new Album to the list
  const addAlbumToList = async (userId, title) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/albums",
      {
        method: "POST",
        body: JSON.stringify({
          userId: userId,
          title: title,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    // .then((response) => response.json())
    // .then(async (json) => {
    //   console.log(json);
    //   await setNewAlbum(json);
    // });
    if (!response.ok) {
      throw new Error("Failed to add album");
    }

    const json = await response.json();
    console.log(json);

    // setNewAlbum(json);
    // console.log(newAlbum);

    // making changes in local state
    // const newAlbum = {
    //   userId: userId,
    //   title: title,
    //   id: 1,
    // };

    // console.log(newAlbum);

    setAlbums([json, ...albums]);
    alert("New Album added successfully");
    console.log(albums);
  };

  // Update the Albums in the list

  const updateAlbumInList = async (id, updateTitle, updateUserid) => {
    console.log(typeof id);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            userId: updateUserid,
            id: id,
            title: updateTitle,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update album");
      }

      //Getting updated response in json format
      const updatedAlbum = await response.json();

      // updating in the localState
      const updatedAlbums = albums.map((album) =>
        album.id === id ? updatedAlbum : album
      );
      setAlbums(updatedAlbums);
      console.log(updatedAlbums);
      alert("Update Successfully done");
    } catch (error) {
      console.error("Error updating album:", error.message);
      // Handle error appropriately, e.g., show an error message to the user
    }
  };
  //Routing
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,

      children: [
        {
          index: true,
          element: (
            <AlbumsList
              albums={albums}
              deleteAlbumFormList={deleteAlbumFormList}
            />
          ),
        },
        {
          path: "add",
          element: <AddAlbum addAlbumToList={addAlbumToList} />,
        },
        {
          path: "update/:id",
          element: <UpdateAlbum updateAlbumInList={updateAlbumInList} />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
