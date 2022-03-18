import React, {useState} from 'react';

import { Box, Input} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { FormControl, TextField } from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme)=> ({
    
    search1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "& .MuiTextField-root": {
            width: '100%',
        },
        "& .MuiOutlinedInput-input" : {
            border : '1px solid lightgray',
        }
    },
}))

const SearchBar = (props) => {

    const classes = useStyles();

    const {
        searchText,
        onSearch,
    } = props;
    return (
            <Box className={classes.search1}>
                <TextField 
                    size={'small'}
                    placeholder={'SEARCH'}
                    InputProps={{
                        endAdornment : <InputAdornment position='end'>
                            <SearchRoundedIcon />
                        </InputAdornment>,
                        inputProps : {
                            min : 0
                        }
                    }}
                    value={searchText}
                    onChange={onSearch}
                />
            </Box>
    );
};


export default SearchBar;