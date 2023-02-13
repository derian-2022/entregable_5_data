import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import FormUser from "./components/FormUser";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState();
  const [updateInfo, setUpdateInfo] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const getAlltUsers = () => {
    const url = "https://users-crud.academlo.tech/users/";
    axios
      .get(url)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAlltUsers();
  }, []);

  const createNewUser = (data) => {
    const url = "https://users-crud.academlo.tech/users/";
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
        getAlltUsers();
      })
      .catch((err) => console.log(err));
  };

  const deleteUserById = (id) => {
    const url = `https://users-crud.academlo.tech/users/${id}/`;
    axios
      .delete(url)
      .then((res) => {
        console.log(res.data);
        getAlltUsers();
        setUpdateInfo();
      })
      .catch((err) => console.log(err));
  };

  const updateUserById = (id, data) => {
    const url = `https://users-crud.academlo.tech/users/${id}/`;
    axios
      .put(url, data)
      .then((res) => {
        console.log(res.data);
        getAlltUsers();
        setUpdateInfo();
      })
      .catch((err) => console.log(err));
  };
  /*----este es el MODEL de OPEN y CLOSE de un FORMULARIO----*/
  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  return (
    <div className="app">
      <div className="app_h1_btn">
        <h1 className="app_title">Users</h1>
        <button className="app_btn-form" onClick={handleOpen} >
          Open Form
        </button>
      </div>
      <div className={`app_form ${isOpen && "app_form-visible"}`}>
        <FormUser
          createNewUser={createNewUser}
          updateInfo={updateInfo} /*--- Estas son las PROPS---*/
          updateUserById={updateUserById}
          handleClose={handleClose}
          setUpdateInfo={setUpdateInfo}
        />
      </div>
      <div className="app_card">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo} /*--- Estas son las PROPS---*/
            handleOpen={handleOpen}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
