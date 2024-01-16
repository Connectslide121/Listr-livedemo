import React, { useEffect, useState } from "react";
import {
  CreateListItem,
  GetListById,
  GetListItemById,
  UpdateListItem
} from "./API";

export default function ListItemInputForm(props) {
  const [listItemId, setListItemId] = useState("");
  const [title, setTitle] = useState("");
  const [information, setInformation] = useState("");
  const [status, setStatus] = useState("Created");
  const [createdAt, setCreatedAt] = useState("");
  const [listItemToOpen, setListItemToOpen] = useState({});
  const [isNewListItem, setIsNewListItem] = useState(true);
  const [list, setList] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isNewListItem === true) {
      const item = {
        title: title,
        information: information,
        status: status,
        listId: list.listId
      };
      await CreateListItem(item);
    } else {
      const item = {
        listItemId: listItemId,
        listId: list.listId,
        title: title,
        information: information,
        status: status,
        createdAt: createdAt
      };
      await UpdateListItem(item);
    }

    setListItemId("");
    setTitle("");
    setInformation("");
    setStatus("Created");
    setCreatedAt("");
    setIsNewListItem(true);
    setListItemToOpen({});
    props.refreshList();
    props.handleUpdate();
  };

  useEffect(() => {
    if (props.openListItemId) {
      openListItem(props.openListItemId);
    }
  }, [props.openListItemId]);

  const openListItem = async (listItemId) => {
    const listItem = await GetListItemById(listItemId);
    setListItemToOpen(listItem);
    setIsNewListItem(false);
  };

  const handleOpenList = async (id) => {
    if (id) {
      const listToOpen = await GetListById(id);
      setList(listToOpen);
      setListItemId("");
      setTitle("");
      setInformation("");
      setStatus("Created");
      setCreatedAt("");
      setIsNewListItem(true);
      setListItemToOpen({});
      props.refreshList();
      props.handleUpdate();
    }
  };

  useEffect(() => {
    if (listItemToOpen) {
      setListItemId(listItemToOpen.listItemId);
      setTitle(listItemToOpen.title);
      setInformation(listItemToOpen.information);
      setStatus(listItemToOpen.status || "Created");
      setCreatedAt(listItemToOpen.createdAt);
    }
  }, [listItemToOpen]);

  useEffect(() => {
    handleOpenList(props.listId);
  }, [props.listId]);

  return (
    <>
      <header>
        <h1>{list.listName}</h1>
      </header>

      <form onSubmit={handleSubmit}>
        <label htmlFor="itemTitleInput">Title</label>
        <input
          type="text"
          id="itemTitleInput"
          value={title || ""}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="description">Information</label>
        <textarea
          id="information"
          rows={12}
          value={information}
          onChange={(e) => setInformation(e.target.value)}
          required
        />
        <label htmlFor="status">Status</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Created">Created</option>
          <option value="Completed">Completed</option>
        </select>
        <button typeof="submit">Save</button>
      </form>
    </>
  );
}
