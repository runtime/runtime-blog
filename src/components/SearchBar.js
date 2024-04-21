import {
    TextField,
    Button,
    Typography,
    Box
} from '@mui/material';
import React, {useState} from 'react';


const SearchBar = ({onSearchSubmit}) => {
    const [query, setQuery] = useState('');
    const onInputChange = (e) => {
        setQuery(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        onSearchSubmit(query);
    }

    return (
         <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form" id='10'>
                <div className="field">
                    <Button>Search</Button>
                    <TextField
                        type="text"
                        value={query}
                        onChange={onInputChange}
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;