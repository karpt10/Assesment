import React, { useState } from "react";
import "./index.css";
const Header = ({
    grouping,
    handleGroupingChange,
    ordering,
    handleOrderingChange,
}) => {
    const [choosing, setChoosing] = useState(false);

    return (
        <div className="header">
            <div className="inner-header">
                <div
                    className="display"
                    onClick={() => {
                        setChoosing(!choosing);
                    }}>
                    Display
                </div>
                {choosing ? (
                    <div className="display2">
                        <div className="options">
                            <div className="selection">
                                Grouping:{" "}
                                <select
                                    value={grouping}
                                    onChange={handleGroupingChange}>
                                    <option value="status">Status</option>
                                    <option value="userId">User</option>
                                    <option value="priority">Priority</option>
                                </select>
                            </div>
                            <div className="selection">
                                Ordering:
                                <select
                                    value={ordering}
                                    onChange={handleOrderingChange}>
                                    <option value="priority">Priority</option>
                                    <option value="title">Title</option>
                                </select>
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default Header;
