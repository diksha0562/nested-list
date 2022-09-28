import React from "react";

// const createList = (items) => {
//   console.log("items--", items);
//   let html = [];
//   for (let item in items) {
//     console.log(item);
//     html.push(<li>{`${item}: ${items[item]}`}</li>);
//   }
//   return html;
// };

const List = (items) => {
  return <div />;
  // return createList(items);

  // for (let d in items) {
  //   let val = items[d];
  //   if (typeof val === "object" && val != null) {
  //     return (
  //       <ul
  //       // className={expandState ? "dispBlock" : "dispNone"}
  //       // onClick={handleClick}
  //       >
  //         {/* {createLists(val, html)} */}
  //         <List items={val} />
  //       </ul>
  //     );
  //   } else {
  //     console.log("val---", val);
  //     return <li>{`${d} : ${val}`}</li>;
  //     // html.push(<li>{`${d} : ${val}`}</li>);
  //   }
  // }
};

export default List;
