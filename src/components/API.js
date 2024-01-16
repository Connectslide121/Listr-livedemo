import React, { useState } from "react";
import {
  AllListItems,
  AllLists,
  ListById,
  ListItemsByListId,
  ModifyList,
  RemoveList
} from "./Database";

export async function CreateList(listName) {
  AllLists(listName);
}

export function GetLists() {
  return AllLists();
}

export async function GetListById(id) {
  return ListById(id);
}

export async function UpdateList(list) {
  ModifyList(list);
}

export async function DeleteList(id) {
  return RemoveList(id);
}

export async function CreateListItem(item) {
  console.log(item);
  AllListItems(item);
}

export async function GetListItemsByListId(id) {
  return ListItemsByListId(id);
}

export async function GetListItemById(id) {
  // const response = await axios
  //   .get(`api/ListItem/ListItem/${id}`)
  //   .catch(function (error) {
  //     alert("Error fetching list item by id");
  //     console.log("Error fetching list item by id:", error);
  //   });
  // return response.data;
}

export async function UpdateListItem(item) {
  // const response = await axios.put(`api/ListItem/update`, {
  //   listItemId: item.listItemId,
  //   listId: item.listId,
  //   title: item.title,
  //   information: item.information,
  //   status: item.status,
  //   createdAt: item.createdAt
  // });
}

export async function DeleteListItem(id) {
  // const response = await axios
  //   .delete(`api/ListItem/Delete/${id}`)
  //   .catch(function (error) {
  //     alert("Error deteling item");
  //     console.log("Error deleting item:", error);
  //   });
  // return response.data;
}
