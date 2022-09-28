import "./styles.css";
import data from "./data";
import { useState } from "react";
import List from "./list";

// import List from "./list";

// const html = [];

export default function App() {
  // const [html, updateHtml] = useState([]);
  const html = [];
  const [expandState, updateExpand] = useState(true);

  const handleClick = (e) => {
    updateExpand(!expandState);
  };

  // const createLists = (localData, html) => {
  //   for (let d in localData) {
  //     let val = localData[d];
  //     if (typeof val === "object" && val != null) {
  //       return (
  //         <ul
  //           className={expandState ? "dispBlock" : "dispNone"}
  //           onClick={handleClick}
  //         >
  //           {createLists(val, html)}
  //         </ul>
  //       );
  //     } else {
  //       console.log("val---", val);

  //       html.push(<li>{`${d} : ${val}`}</li>);
  //     }
  //   }
  //   return html;
  // };

  return (
    <div className="App">
      <List items={data} />
      {/* <h1>Hello CodeSandbox</h1>

      {createLists(data, html)} */}
      {/* {html} */}
    </div>
  );
}
