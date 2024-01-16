import React, { useEffect, useState } from "react";
import { CreateList, GetLists } from "./API";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function ListForm(props) {
  const [listName, setListName] = useState("");
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await CreateList(listName);
    setListName("");
    getLists();
  };

  const handleSelect = (e) => {
    props.selectList(e.target.value);
  };

  const getLists = async () => {
    const response = await GetLists();
    setLists(response);
  };

  useEffect(() => {
    getLists();
  }, []);

  useEffect(() => {
    getLists();
  }, [props.rerenderKey]);

  useEffect(() => {
    setLoading(false);
  }, [lists]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="create-list-form">
        <label htmlFor="list-name-input">Create new list:</label>
        <input
          type="text"
          id="list-name-input"
          onChange={(e) => setListName(e.target.value)}
          value={listName}
          required
        />
        <button type="submit" title="New List">
          <FontAwesomeIcon icon={faPlus} />{" "}
        </button>
      </div>
      <div className="open-list-form">
        {loading ? (
          <p>Loading lists...</p>
        ) : (
          <>
            <label htmlFor="list-to-open">Select list:</label>
            <select
              name="list-to-open"
              id="list-to-open"
              onChange={handleSelect}
            >
              <option value="">--Choose option--</option>

              {lists &&
                lists.map((list) => (
                  <option key={list.listId} value={list.listId}>
                    {list.listName}
                  </option>
                ))}
            </select>
          </>
        )}
      </div>
    </form>
  );
}
