import SuggestionInput from '../suggestion-input';
import SuggestionPanel from '../suggestion-panel';
import { useState } from 'react';
import './style.css';

function SuggestionBox() {
    const [searchResults, setSearchResults] = useState([]);
    const [selectedSuggestion, setSelectedSuggestion] = useState("");

    return(
        <>
            {selectedSuggestion && <div>You selected: {selectedSuggestion}</div>}
            <SuggestionInput searchResults={searchResults} setSearchResults={setSearchResults}/>
            <SuggestionPanel searchResults={searchResults} setSearchResults={setSearchResults} setSelectedSuggestion={setSelectedSuggestion}/>
        </>
    );
}

export default SuggestionBox;
