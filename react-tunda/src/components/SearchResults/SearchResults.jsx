import StoreResult from "../StoreResult/StoreResult";
import React from 'react';

// FAST API will send over this information:
// This information will be put into an array and passed as a prop "result" into StoreResult
// API call MUST happen in this component.

// [
//     {
//         "id": 1,
//         "store": "Target",
//         "product": "Nike Air Max",
//         "price": 79.99,
//         "distance": 2.1
//     },
//     {
//         "id": 2,
//         "store": "Foot Locker",
//         "product": "Nike Air Max",
//         "price": 84.99,
//         "distance": 3.4
//     }
// ]


const SearchResults = ({ results }) => {
    return (
        <div>
            {results.map((result) => (
                <StoreResult 
                    key={result.id}
                    result={result}
                />
            ))}
        </div>
    )
}

export default SearchResults;