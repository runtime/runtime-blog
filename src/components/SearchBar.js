import './SearchBar.css';

import {
    TextField,
    Button,
    Typography,
    Box,
    Toolbar,
    InputBase,
    IconButton,
    styled,
    alpha
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, {useState} from 'react';


const SearchBar = ({onSearchSubmit}) => {
    const [query, setQuery] = useState('3');
    const onInputChange = (e) => {
        setQuery(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        onSearchSubmit(query);
    }

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));

    const blogTitle = "{Code} & Culture"
   // const subTitle = 'the missing .docs'



    return (
      <Box>
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    {blogTitle}
                </Typography>
                {/*<Typography*/}
                {/*    variant="p"*/}
                {/*    noWrap*/}
                {/*    component="div"*/}
                {/*    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}*/}
                {/*>*/}
                {/*    {subTitle}*/}
                {/*</Typography>*/}
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </Toolbar>
        </Box>
    );
}

export default SearchBar;