import React from "react";
import ReactDOM from "react-dom/client";

// JSX  - it is html / xml like syntax
const jsxheading = (<h1>
    hello from jsx
    </h1>);

// components
// functional components 

const FuncComp = () =>(
    <div>
        <h1>
            hello from the functional component
        </h1>
    </div>
);

const Subfunction = () => (
    <div>
    <FuncComp />
    <h2>hello from second func</h2>
    </div>
);
const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(<Subfunction />);