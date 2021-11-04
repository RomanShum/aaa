import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Edit from "../components/Edit";

function Create() {
  const [teams, setTeams] = useState([]);
  const [wins, setWins] = useState([]);

  const onSave = (id, name) => {
    const newToDo = [...teams, { id: id, name: name }];
    if (!teams.find((x) => x.name == name)) {
      setTeams(newToDo);
    } else {
      alert("Эта команда уже существует");
    }
  };

  const onEdit = (id) => {
    const newToDo = teams.filter((item) => item.id !== id);
    setTeams(newToDo);
  };

  const onWin = (id, idTeams, name) => {
    const newToDo = [...wins, { id: id, idTeams: idTeams, name: name }];
    setWins(newToDo);
  };

  let params = useParams();
  return (
    <div>
      <div className="round-table round">
        <ul>
          <li className="round">
            <ul>
              <li className="round">
                <ul>
                  <li>
                    <p>
                      <Edit
                        teams={teams}
                        id={1}
                        onSave={onSave}
                        onEdit={onEdit}
                        onWin={onWin}
                      />
                    </p>
                  </li>
                  <li>
                    <p>
                      <Edit
                        teams={teams}
                        id={2}
                        onSave={onSave}
                        onEdit={onEdit}
                        onWin={onWin}
                      />
                    </p>
                  </li>
                </ul>
                <p>winner1</p>
              </li>
              <li className="round">
                <ul>
                  <li>
                    <p>
                      <Edit
                        teams={teams}
                        id={3}
                        onSave={onSave}
                        onEdit={onEdit}
                        onWin={onWin}
                      />
                    </p>
                  </li>
                  <li>
                    <p>
                      <Edit
                        teams={teams}
                        id={4}
                        onSave={onSave}
                        onEdit={onEdit}
                        onWin={onWin}
                      />
                    </p>
                  </li>
                </ul>
                <p>winner 2</p>
              </li>
            </ul>
            <p>winner 1-2</p>
          </li>
          <li className="round">
            <ul>
              <li className="round">
                <ul>
                  <li>
                    <p>
                      <Edit
                        teams={teams}
                        id={5}
                        onSave={onSave}
                        onEdit={onEdit}
                        onWin={onWin}
                      />
                    </p>
                  </li>
                  <li>
                    <p>
                      <Edit
                        teams={teams}
                        id={6}
                        onSave={onSave}
                        onEdit={onEdit}
                        onWin={onWin}
                      />
                    </p>
                  </li>
                </ul>
                <p>winner 3</p>
              </li>
              <li className="round">
                <ul>
                  <li>
                    <p>
                      <Edit
                        teams={teams}
                        id={7}
                        onSave={onSave}
                        onEdit={onEdit}
                        onWin={onWin}
                      />
                    </p>
                  </li>
                  <li>
                    <p>
                      <Edit
                        teams={teams}
                        id={8}
                        onSave={onSave}
                        onEdit={onEdit}
                        onWin={onWin}
                      />
                    </p>
                  </li>
                </ul>
                <p>winner 4</p>
              </li>
            </ul>
            <p>winner 3-4</p>
          </li>
        </ul>
        <p>CSS3 Wins!</p>
      </div>
    </div>
  );
}

export default Create;
