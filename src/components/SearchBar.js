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
         <Box className="search-bar ui segment">
            <form className="ui form" id='10'>
                <div className="field">
                    <Button onSubmit={onSubmit}>Search</Button>
                    <TextField
                        type="text"
                        value={query}
                        onChange={onInputChange}
                        sx={{
                            width: 300
                        }}
                    />
                </div>
            </form>
        </Box>
    )
}

export default SearchBar;