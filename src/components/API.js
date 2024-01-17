import React, { useState } from "react";
import {
  AllListItems,
  AllLists,
  ListById,
  ListItemById,
  ListItemsByListId,
  ModifyList,
  ModifyListItem,
  RemoveList,
  RemoveListItem
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
  return ListItemById(id);
}

export async function UpdateListItem(item) {
  return ModifyListItem(item);
}

export async function DeleteListItem(id) {
  return RemoveListItem(id);
}
