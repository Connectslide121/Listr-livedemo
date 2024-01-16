import React, { useState } from "react";

export let allLists = [
  {
    listId: 1,
    listName: "🐱 Animals",
    createdAt: "2024-01-16 01:16:33.480090"
  },
  {
    listId: 2,
    listName: "🍣 Recipes",
    createdAt: "2024-01-16 01:16:33.480090"
  },
  { listId: 3, listName: "📖 Books", createdAt: "2024-01-16 01:16:33.480090" }
];

export let allListItems = [
  {
    listId: 2,
    listItemId: 1,
    title: "Swedish Meatballs",
    information: "https://www.allrecipes.com/recipe/235034/swedish-meatballs/",
    status: "Created",
    createdAt: "2024-01-16 01:16:33.480090",
    updatedAt: "2024-01-16 01:16:33.480090"
  },
  {
    listId: 2,
    listItemId: 2,
    title: "Mushroom Risotto",
    information:
      "https://www.foodnetwork.com/recipes/tyler-florence/mushroom-risotto-recipe-1945263",
    status: "Created",
    createdAt: "2024-01-16 01:16:33.480090",
    updatedAt: "2024-01-16 01:16:33.480090"
  },
  {
    listId: 2,
    listItemId: 3,
    title: "Grilled Salmon with Lemon-Dill Sauce",
    information:
      "https://www.eatingwell.com/recipe/250355/grilled-salmon-with-lemon-dill-sauce/",
    status: "Created",
    createdAt: "2024-01-16 01:16:33.480090",
    updatedAt: "2024-01-16 01:16:33.480090"
  },
  {
    listId: 2,
    listItemId: 4,
    title: "Chicken Tikka Masala",
    information: "https://www.bbcgoodfood.com/recipes/chicken-tikka-masala",
    status: "Created",
    createdAt: "2024-01-16 01:16:33.480090",
    updatedAt: "2024-01-16 01:16:33.480090"
  },
  {
    listId: 2,
    listItemId: 5,
    title: "Chocolate Chip Cookies",
    information:
      "https://www.allrecipes.com/recipe/10813/best-chocolate-chip-cookies/",
    status: "Created",
    createdAt: "2024-01-16 01:16:33.480090",
    updatedAt: "2024-01-16 01:16:33.480090"
  },
  {
    listId: 1,
    listItemId: 6,
    title: "Lion",
    information: "Grasslands",
    status: "Created",
    createdAt: "2024-01-16 01:16:33.480090",
    updatedAt: "2024-01-16 01:16:33.480090"
  },
  {
    listId: 1,
    listItemId: 7,
    title: "Dolphin",
    information: "Oceans",
    status: "Created",
    createdAt: "2024-01-16 01:16:33.480090",
    updatedAt: "2024-01-16 01:16:33.480090"
  },
  {
    listId: 1,
    listItemId: 8,
    title: "Elephant",
    information: "Savannah",
    status: "Created",
    createdAt: "2024-01-16 01:16:33.480090",
    updatedAt: "2024-01-16 01:16:33.480090"
  },
  {
    listId: 1,
    listItemId: 9,
    title: "Penguin",
    information: "Antarctica",
    status: "Created",
    createdAt: "2024-01-16 01:16:33.480090",
    updatedAt: "2024-01-16 01:16:33.480090"
  },
  {
    listId: 1,
    listItemId: 10,
    title: "Butterfly",
    information: "Gardens",
    status: "Created",
    createdAt: "2024-01-16 01:16:33.480090",
    updatedAt: "2024-01-16 01:16:33.480090"
  },
  {
    listId: 3,
    listItemId: 11,
    title: "To Kill a Mockingbird",
    information: "Harper Lee, 1960",
    status: "Created",
    createdAt: "2024-01-16 01:16:33.480090",
    updatedAt: "2024-01-16 01:16:33.480090"
  },
  {
    listId: 3,
    listItemId: 12,
    title: "1984",
    information: "George Orwell, 1949",
    status: "Created",
    createdAt: "2024-01-16 01:16:33.480090",
    updatedAt: "2024-01-16 01:16:33.480090"
  },
  {
    listId: 3,
    listItemId: 13,
    title: "The Great Gatsby",
    information: "F. Scott Fitzgerald, 1925",
    status: "Created",
    createdAt: "2024-01-16 01:16:33.480090",
    updatedAt: "2024-01-16 01:16:33.480090"
  },
  {
    listId: 3,
    listItemId: 14,
    title: "The Hobbit",
    information: "J.R.R. Tolkien, 1937",
    status: "Created",
    createdAt: "2024-01-16 01:16:33.480090",
    updatedAt: "2024-01-16 01:16:33.480090"
  },
  {
    listId: 3,
    listItemId: 15,
    title: "Harry Potter and the Philosopher's Stone",
    information: "J.K. Rowling, 1997",
    status: "Created",
    createdAt: "2024-01-16 01:16:33.480090",
    updatedAt: "2024-01-16 01:16:33.480090"
  }
];

export function AllLists(props) {
  if (props && typeof props === "string") {
    const nextId =
      allLists.length > 0
        ? Math.max(...allLists.map((item) => item.listId)) + 1
        : 1;
    const newObject = {
      listId: nextId,
      listName: props,
      createdAt: new Date().toISOString()
    };
    allLists = [...allLists, newObject];
  }
  return allLists;
}

export function ListById(id) {
  const list = allLists.find((list) => list.listId == id);
  return list;
}

export function ModifyList(updatedList) {
  const listIndex = allLists.findIndex(
    (list) => list.listId === updatedList.listId
  );
  allLists[listIndex].listName = updatedList.listName;
  console.log(allLists);
  return allLists;
}

export function RemoveList(id) {
  allLists = allLists.filter((list) => list.listId !== id);
  allListItems = allListItems.filter((listItem) => listItem.listId !== id);

  return { allLists, allListItems };
}

export function AllListItems(props) {
  if (props && typeof props === "object" && Object.keys(props).length > 0) {
    const nextItemId =
      allListItems.length > 0
        ? Math.max(...allListItems.map((item) => item.listItemId)) + 1
        : 1;

    const newListItem = {
      listId: props.listId,
      listItemId: nextItemId,
      title: props.title,
      information: props.information,
      status: props.status,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    allListItems = [...allListItems, newListItem];
  }

  return allListItems;
}
export function ListItemsByListId(id) {
  const matchingListItems = allListItems.filter(
    (listItem) => listItem.listId == id
  );
  return matchingListItems;
}
