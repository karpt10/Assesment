import React from "react";
import Card from "../Card";
import "./index.css";
const Column = ({items}) => {
    return (
        <div className="col">
            {items.map((item) => (
                <Card
                    id={item.id}
                    title={item.title}
                    tag={item.tag}
                    userId={item.userId}
                    status={item.status}
                    priority={item.priority}
                />
            ))}
        </div>
    );
};

export default Column;
