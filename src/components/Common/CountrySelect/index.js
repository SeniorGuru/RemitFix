import * as React from 'react';
import Box from '@mui/material/Box';
import { useState, useEffect, } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import { makeStyles } from '@mui/styles';
import { FormControl, InputLabel } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    root: {
        "& .ReactFlagsSelect-module_selectBtn__19wW7" : {
            height : '70px',
        },
    }
}))
export default function CountrySelect(props) {

    const {
      selected, setSelected,
    } = props;
    
    const classes = useStyles();

    const onSelect = (code) => setSelected(code);

    const customLabels = Object("Custom Labels", {
      GB: "GB",
      US: "US",
    });
  
    return (
      <Box className={classes.root}>
        <ReactFlagsSelect
          selected={selected}
          onSelect={onSelect}
          customLabels={customLabels}
        />
      </Box>
    );
}