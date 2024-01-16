import ListForm from "./ListForm";
import ListItemInputForm from "./ListItemInputForm";
import ListItemDisplay from "./ListItemDisplay";
import "../styles.css";
import { useState } from "react";
import logo from "./favicon.jpg";

function App() {
  const [rerenderKey, setRerenderKey] = useState(0);
  const [openListItemId, setOpenListItemId] = useState("");
  const [listId, setListId] = useState("");

  const selectList = (listIdToOpen) => {
    setListId(listIdToOpen);
  };

  const refreshList = () => {
    setRerenderKey((prevKey) => prevKey + 1);
  };

  const handleOpenListItem = (listItemId) => {
    setOpenListItemId(listItemId);
  };

  const handleUpdate = () => {
    setOpenListItemId("");
  };

  return (
    <>
      <div className="container">
        <div className="left-pane">
          <div className="site-header">
            <img src={logo} alt="logo" />
            <h1>Listr</h1>
          </div>
          <div className="list-form-wrapper">
            <ListForm selectList={selectList} />
          </div>
          <div className="input-form-wrapper">
            <ListItemInputForm
              refreshList={refreshList}
              openListItemId={openListItemId}
              handleUpdate={handleUpdate}
              listId={listId}
            />
          </div>
        </div>
        <div className="right-pane">
          <ListItemDisplay
            rerenderKey={rerenderKey}
            handleOpenListItem={handleOpenListItem}
            listId={listId}
          />
        </div>
      </div>
    </>
  );
}

export default App;
