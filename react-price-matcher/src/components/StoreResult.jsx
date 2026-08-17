import React from "react";

const StoreResult = ({ result }) => {
    return (
        <div className="store-result-card">
            <h3>{result.store}</h3>
            <p>{result.product}</p>
            <p>{result.price}</p>
            <p>{result.distance} miles away</p>
            <button> View Store </button>
        </div>
    );
};

export default StoreResult;

