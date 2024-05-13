const heading = React.createElement("h1", {id:"heading"}, "Hellow World From React");


console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));

// Nestead React Structure
/* 
        <div id = "parent">
                <div id = "child">
                <h1> I'm h1 tag</h1>
                </div>

        </div>
*/

// const parent = React.createElement("div", {id : "parent"},
// React.createElement("div", {id : "child"},
// React.createElement("h1", {id : "parent"},"I'm h1 tag"
// ))
// );

// Nestead React Structure
/* 
        <div id = "parent">
                <div id = "child">
                <h1> I'm h1 tag</h1>
                <h2> I'm h2 tag</h2>
                </div>

        </div>
*/

const parent = React.createElement("div", {id : "parent"},
React.createElement("div", {id : "child"},
[React.createElement("h1", {id : "parent"},"I'm h1 tag"),React.createElement("h2", {id : "parent"},"I'm h2 tag")]
));


root.render(parent);