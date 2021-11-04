import React, { useState } from "react";
import "../App.css";

function Edit({ teams, id, onSave, onEdit, onWin }) {
  const [name, setName] = useState("");
  const onChange = (e) => {
    setName(e.target.value);
  };

  const Save = () => {
    onSave(id, name);
  };

  const Edit = () => {
    onEdit(id);
  };

  const Win = () => {
    onWin(id, name);
  };

  let icons;

  if (!teams.find((x) => x.id == id)) {
    icons = (
      <>
        <input type="text" onChange={onChange} />
        <span className="material-icons" onClick={Save}>
          save
        </span>
      </>
    );
  } else {
    icons = teams.map((item, i) =>
      item.id === id ? (
        <>
          <div key={i}>
            {item.name}
            <span className="material-icons" onClick={Edit}>
              edit
            </span>
            <span className="material-icons" onClick={Win}>
              emoji_events
            </span>
          </div>
        </>
      ) : (
        ""
      )
    );
  }

  return <>{icons}</>;
}

export default Edit;
