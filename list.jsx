import React from "react";

const createList = (items) => {
  let html = [];
  for (let item in items) {
    html.push(<li key={item}>item: items[item] </li>);
  }
  return html;
};

const List = (items) => {
  return createList(items);
};
