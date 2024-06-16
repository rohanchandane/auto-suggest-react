import './style.css';
import { useEffect, useState } from 'react';

interface Props {
    searchResults: any;
    setSearchResults: any;
}

function SuggestionInput(props: Props) {
    const {searchResults, setSearchResults} = props;

    const [inputValue, setInputValue] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSearchTerm(inputValue);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        }
    }, [inputValue]);

    useEffect(() => {
        if (!searchTerm) return;
        const fetchData = async () => {
            try {
                const suggestions = await fetch("http://localhost:3000/suggestions")
                const data = await suggestions.json();
                setSearchResults([...searchResults, ...data.suggestions]);

            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
        
    }, [searchTerm]);

    function handleInputValue(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    return(
        <>
            <input type='text' value={inputValue} onChange={handleInputValue}/>
        </>
    );
}   

export default SuggestionInput;