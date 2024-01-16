import React, { useEffect, useState } from "react";
import { DeleteListItem, GetListItemsByListId } from "./API";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ListItemDisplay(props) {
  const [listItems, setListItems] = useState([]);
  const [listId, setListId] = useState("");

  useEffect(() => {
    if (listId) {
      GetListItemsByListId(listId).then((listItems) => {
        setListItems(listItems);
      });
    }
  }, [props.rerenderKey]);

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleDeleteItemButtonClick = async (listItemId) => {
    if (listId) {
      await DeleteListItem(listItemId);
      GetListItemsByListId(listId).then((listItems) => {
        setListItems(listItems);
      });
    }
  };

  const handleListItemClick = (listItemId) => {
    props.handleOpenListItem(listItemId);
  };

  useEffect(() => {
    setListId(props.listId);
  }, [props.listId]);

  useEffect(() => {
    if (listId) {
      GetListItemsByListId(props.listId).then((listItems) => {
        setListItems(listItems);
      });
    }
  }, [listId]);

  const sortedListItems = [...listItems].sort(
    (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
  );

  return (
    <>
      <div className="item-list-wrapper">
        <div className="item-list-subheader">
          <h3>Count: {listItems.length}</h3>
          <input type="text" />
        </div>

        <div className="item-list-header">
          <h2 className="item-list-header-title">Title</h2>
          <h2 className="item-list-header-information">Information</h2>
          <h2 className="item-list-header-status">Status</h2>
          <h2 className="item-list-header-date">Created</h2>
          <h2 className="item-list-header-date">Updated</h2>
        </div>

        <div className="item-list">
          <ul>
            {sortedListItems.map((listItem) => (
              <li key={listItem.listItemId}>
                <div
                  className="delete-item-icon"
                  onClick={() =>
                    handleDeleteItemButtonClick(listItem.listItemId)
                  }
                >
                  <FontAwesomeIcon icon={faTrash} />
                </div>
                <div
                  className="item-wrapper"
                  onClick={() => handleListItemClick(listItem.listItemId)}
                >
                  <div className="item-title">
                    <p>{listItem.title}</p>
                  </div>
                  <div className="item-information">
                    <p>{listItem.information}</p>
                  </div>
                  <div className="item-status">
                    <p>{listItem.status}</p>
                  </div>
                  <div className="item-date">
                    <p>{formatDate(listItem.createdAt)}</p>
                  </div>
                  <div className="item-date">
                    <p>{formatDate(listItem.updatedAt)}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
