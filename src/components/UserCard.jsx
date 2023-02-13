import React from "react";

const UserCard = ({ user, deleteUserById, setUpdateInfo, handleOpen }) => {
  const handleDelete = () => {
    deleteUserById(user.id);
  };

  const handleUpdate = () => {
    setUpdateInfo(user);
    handleOpen();
  };

  return (
    <article className="card">
      <h2 className="card_name">{`${user.first_name} ${user.last_name}`}</h2>
      <ul className="card_list">
        <li className="card_mail">
          <span>📧</span> {user.email}
        </li>
        <li className="card_Birthday">
          <span>📆</span>
          {user.birthday}
        </li>
      </ul>
      <div className="card_btn">
        <button className="card_btn_delete" onClick={handleDelete}>
          🗑️
        </button>
      
        <button className="card_btn_update" onClick={handleUpdate}>
        ✏️
        </button>
      </div>
    </article>
  );
};
export default UserCard;
