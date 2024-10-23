import React from "react";
import "./index.css";
const Categories = ({ titles }) => {
    while (titles.length<5) titles.push("")
    return (
        <div className="category-name">
        {titles.map(title => 
            <div className="category">{title}</div>
        )}
            
            
        </div>
    );
};

export default Categories;
