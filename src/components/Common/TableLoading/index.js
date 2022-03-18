import React from "react";

import {
    CircularProgress,
    Table,
    TableBody,
    TableCell, TableRow
} from '@mui/material' ;

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    loading : {
        textAlign : 'center !important',
        width : '100%',
        border : '1px solid red',
    }
}));

const TableLoading = (props) => {

    const classes = useStyles() ;

    const {
        colSpan
    } = props ;

    return (
                <TableRow>
                    <TableCell colSpan={colSpan} className={classes.loading}>
                        <CircularProgress 
                            size={30}
                        />
                    </TableCell>
                </TableRow>
    )
}
export default TableLoading ;