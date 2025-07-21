import React from "react";
import ReactDOM from "react-dom/client";




const hello = React.createElement("div", {}, "hello i am new here");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(hello); 