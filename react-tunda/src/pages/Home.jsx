
import {useState} from "react";
import SearchBar from '../components/SearchBar/SearchBar'
import RadiusSelector from '../components/RadiusSelector/RadiusSelector'

const Home = () => {

    const [radius, setRadius] = useState(5);

    return (
        <>

            <h2> TundaAI</h2>

            <RadiusSelector 
                radius={radius} 
                setRadius={setRadius}
            />

            <SearchBar />

        </>
    );
}