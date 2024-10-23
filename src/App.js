import { useEffect, useState } from "react";
import Categories from "./Components/Categories";
// import axios from "axios";
import Column from "./Components/Column";
import Header from "./Components/Header";
import "./App.css";
function App() {
    const priorityMap = ["No priority", "Low", "Medium", "High", "Urgent"];
    const [groups, setGroups] = useState({
        status: ["Backlog", "Todo", "In progress", "Done", "Cancelled"],
        priority: [0, 1, 2, 3, 4],
        userId: ["", "", "", "", ""],
        userName: ["", "", "", "", ""],
    });
    const [data, setData] = useState({ tickets: [], users: [] });
    useEffect(() => {
        fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
  .then((response) => response.json())
  .then((data) => {
    setData(data);
    const temp = { ...groups };
    for (let i = 0; i < 5; ++i) {
      temp["userId"][i] = data["users"][i]["id"]; // Update based on requirement if userId is no longer needed
      temp["userName"][i] = data["users"][i]["name"];
    }
    setGroups(temp);
  })
  .catch((e) => console.log(e));

    }, []);
    const [grouping, setGrouping] = useState(localStorage.getItem("grouping")? localStorage.getItem("grouping"): "status"); //status, userId, priority
    const [ordering, setOrdering] = useState(localStorage.getItem("ordering")? localStorage.getItem("ordering"):"priority"); //priority, title
    const [currentCategories, setCurrentCategories] = useState(
        groups["status"]
    );
    const [columns, setColumns] = useState([[], [], [], [], []]);

    useEffect(() => {
        const temp = [[], [], [], [], []];
        for (const item of data["tickets"]) {
            for (let i = 0; i < 5; ++i) {
                if (item[grouping] === groups[grouping][i]) {
                    temp[i].push(item);
                    break;
                }
            }
        }
        if (grouping === "status") {
            setCurrentCategories(groups[grouping]);
        } else if (grouping === "userId") {
            setCurrentCategories(groups["userName"]);
        } else if (grouping === "priority") {
            setCurrentCategories(priorityMap);
        }
        //sorting temp for order
        if (ordering === "title") {
            for (let i = 0; i < temp.length; ++i) {
                temp[i].sort((a, b) => a["title"].localeCompare(b["title"]));
            }
        } else if (ordering === "priority") {
            for (let i = 0; i < temp.length; ++i) {
                temp[i].sort((a, b) => a["priority"] - b["priority"]);
            }
        }
        setColumns(temp);

        //localstorage setting
        localStorage.setItem("grouping", grouping)
        localStorage.setItem("ordering", ordering)
    }, [data, grouping, ordering]);

    const handleGroupingChange = (event) => {
        setGrouping(event.target.value);
    };
    const handleOrderingChange = (event) => {
        setOrdering(event.target.value);
    };

    return (
        <>
            <Header grouping={grouping} handleGroupingChange={handleGroupingChange} ordering={ordering} handleOrderingChange={handleOrderingChange}/>
            <Categories titles={currentCategories} />
            <div className="container">
                {columns.map((items) => (
                    <Column items={items} />
                ))}
            </div>
        </>
    );
}

export default App;
