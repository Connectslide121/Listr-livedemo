import axios from "axios";

export async function CreateList(listName) {
  const response = await axios
    .post(`api/List/create`, { listName: listName })
    .catch(function (error) {
      alert("Error creating list");
      console.log("Error creating list:", error);
    });
}

export async function GetLists() {
  const response = await axios.get(`api/List/all`).catch(function (error) {
    alert("Error fetching lists");
    console.log("Error fetching lists:", error);
  });
  return response.data;
}

export async function GetListById(id) {
  const response = await axios
    .get(`api/List/List/${id}`)
    .catch(function (error) {
      alert("Error fetching list by id");
      console.log("Error fetching list by id:", error);
    });
  return response.data;
}

export async function UpdateList(list) {
  const response = await axios
    .put(`api/List/update`, {
      listId: list.listId,
      listName: list.listName,
      createdAt: list.createdAt
    })
    .catch(function (error) {
      alert("Error updating list");
      console.log("Error updating list:", error);
    });
  return response.data;
}

export async function DeleteList(id) {
  const response = await axios
    .delete(`api/List/delete/${id}`)
    .catch(function (error) {
      alert("Error deleting list");
      console.log("Error deleting list:", error);
    });
  return response.data;
}

export async function CreateListItem(item) {
  const response = await axios
    .post("api/ListItem/create", {
      title: item.title,
      information: item.information,
      status: item.status,
      listId: item.listId
    })
    .catch(function (error) {
      alert("Error creating list item");
      console.log("Error creating list item:", error);
    });
}

export async function GetListItemsByListId(id) {
  const response = await axios
    .get(`api/ListItem/List/${id}`)
    .catch(function (error) {
      alert("Error fetching list items");
      console.log("Error fetching list items:", error);
    });
  return response.data;
}

export async function GetListItemById(id) {
  const response = await axios
    .get(`api/ListItem/ListItem/${id}`)
    .catch(function (error) {
      alert("Error fetching list item by id");
      console.log("Error fetching list item by id:", error);
    });
  return response.data;
}

export async function UpdateListItem(item) {
  const response = await axios.put(`api/ListItem/update`, {
    listItemId: item.listItemId,
    listId: item.listId,
    title: item.title,
    information: item.information,
    status: item.status,
    createdAt: item.createdAt
  });
}

export async function DeleteListItem(id) {
  const response = await axios
    .delete(`api/ListItem/Delete/${id}`)
    .catch(function (error) {
      alert("Error deteling item");
      console.log("Error deleting item:", error);
    });
  return response.data;
}
