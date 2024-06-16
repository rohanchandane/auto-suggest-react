import './style.css';

interface Props {
    searchResults: any;
    setSearchResults: any;
    setSelectedSuggestion: any;
}

function SuggestionPanel(props: Props) {
    const {searchResults, setSearchResults, setSelectedSuggestion} = props;

    function handleSelection(value: any) {
        return () => {
            setSelectedSuggestion(value);
            setSearchResults([]);
        }
    }

    console.log("searchResults: ", searchResults);
    return(
        <>
            {
                searchResults.length > 0 && 
                <div className='suggestions'>
                    {searchResults.map( (result: any, index: any) => {
                            return <div key={index} className='suggestion' onClick={handleSelection(result.value)}> {result.value} </div>
                    })}
                </div>
            }
            
        </>
        
    );
}

export default SuggestionPanel;