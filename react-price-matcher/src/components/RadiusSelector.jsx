import React from "react";

// Purpose: Look for stores with product X miles near me

// Parent component will handle the radius, and setRadius state variable intialization.
// Radius and setRadius are props past from parent element Home.jsx
// Component used a radius slider where user clicks a thumb to drag in increments of 5


// Use Framer Notion for animations where when you click search radius buttion, the radius slider will drop down smoothly. good animation.
const RadiusSelector = ({radius, setRadius}) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleRadiusChange = (e) => {
        setRadius(Number(e.target.value));
    }

    const handleSelect = (miles) => {
        setRadius(miles);
        setIsOpen(false);
    };


    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>
                Search Radius: {radius} miles {isOpen ? "▴" : "▾"}
            </button>

            {isOpen && (
                <div>
                    <input
                        type="range"
                        min="5"
                        max="100"
                        step="5"
                        value={radius}
                        onChange={handleRadiusChange}
                    />

                    <div>
                        5 miles
                        <span>{radius} miles</span>
                        100 miles
                    </div>
                </div>
            )}
        </div>
    );
};

export default RadiusSelector;