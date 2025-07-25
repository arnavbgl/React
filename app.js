import React from "react";
import ReactDOM from "react-dom/client";

// JSX  - it is html / xml like syntax
const jsxheading = (<h1>
    hello from jsx
    </h1>);

// components


const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);