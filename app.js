const heading = React.createElement("div",
                {id:"parent"},[ React.createElement("div",{id:"child1"},
                    [React.createElement("h1",{},"h1 element from inside"),React.createElement("h1",{},"h1 element from inside")]),
                    React.createElement("div",{id:"child1"},
                    [React.createElement("h1",{},"h1 element from inside"),React.createElement("h1",{},"h1 element from inside")])
                ])
                
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);