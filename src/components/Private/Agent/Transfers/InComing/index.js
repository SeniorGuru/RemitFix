import React from 'react' ;

import { useNavigate } from 'react-router-dom';

import SelectAgentTransferBox from '../SelectTransferBox';

import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material' ;

import  {
    Search
} from '@mui/icons-material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root : {
        background : '#F3F5F7',
        padding: 20,

        "& .MuiTableBody-root" : {
            "& .MuiTableRow-root" : {
                cursor : 'pointer',
                "&:hover" : {
                    background : 'lightgrey',
                }
            }
        },
        "& .MuiTableCell-root" : {
            paddingTop : 5,
            paddingBottom : 5
        },
        "& a" : {
            textDecoration : 'none',
            color : theme.palette.primary.main
        }
    },
    outgoingTable : {
        marginTop : 20,
        background : 'white'
    },
    circle : {
        borderRadius : '50%',
        width : 10,
        height : 10,
        marginRight : 10
    },
    id : {
        color : 'gray'
    }
})) ;

const mockList = [
    {
        transaction : "#490204920",
        date : "07/04/20 - 3:00PM",
        recipient : {
            name : 'Diego Valencia Palacios',
            id : 3057921980
        },
        country : "Somalia",
        amount : 8700,
        status : 'completed'
    },
    {
        transaction : "#490204920",
        date : "07/04/20 - 3:00PM",
        recipient : {
            name : 'Diego Valencia Palacios',
            id : 3057921980
        },
        country : "Somalia",
        amount : 8700,
        status : 'in review'
    },
    {
        transaction : "#490204920",
        date : "07/04/20 - 3:00PM",
        recipient : {
            name : 'Diego Valencia Palacios',
            id : 3057921980
        },
        country : "Somalia",
        amount : 8700,
        status : 'on hold'
    },
    {
        transaction : "#490204920",
        date : "07/04/20 - 3:00PM",
        recipient : {
            name : 'Diego Valencia Palacios',
            id : 3057921980
        },
        country : "Somalia",
        amount : 8700,
        status : 'completed'
    },
    {
        transaction : "#490204920",
        date : "07/04/20 - 3:00PM",
        recipient : {
            name : 'Diego Valencia Palacios',
            id : 3057921980
        },
        country : "Somalia",
        amount : 8700,
        status : 'rejected'
    },
    {
        transaction : "#490204920",
        date : "07/04/20 - 3:00PM",
        recipient : {
            name : 'Diego Valencia Palacios',
            id : 3057921980
        },
        country : "Somalia",
        amount : 8700,
        status : 'completed'
    }
]
const InComing = () => {
    const classes = useStyles() ;
    const navigate = useNavigate();

    const headField = [
        "Transaction",
        "Date",
        "Recipient",
        "Country",
        "Amount",
        "Status"
    ]

    const statusColors = {
        'completed' : '#1B262C' ,
        'in review' : '#4115DD',
        'on hold' : '#F28B24',
        'rejected':'#F52C71'
    }

    const Circle = (props) => {
        const {
            bgColor
        } = props ;

        return (
            <Box className={classes.circle} sx={{backgroundColor : bgColor}} >

            </Box>
        )
    }
    
    return (
        <Box className={classes.root}>
            
            <SelectAgentTransferBox/>

            <Box className={classes.outgoingTable}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {
                                    headField.map((item , index) => {
                                        return (
                                            <TableCell key={index}>
                                                {item}
                                            </TableCell>
                                        )
                                    })
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                mockList.map((item, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell>
                                                { item.transaction }
                                            </TableCell>
                                            <TableCell>
                                                { item.date }
                                            </TableCell>
                                            <TableCell>
                                                <Box className={classes.name}>
                                                    { item.recipient.name }
                                                </Box>
                                                <Box className={classes.id}>
                                                    { item.recipient.id }
                                                </Box>
                                            </TableCell>
                                            <TableCell>
                                                { item.country }
                                            </TableCell>
                                            <TableCell>
                                                { item.amount }
                                            </TableCell>
                                            <TableCell >
                                                <Box 
                                                    sx={{
                                                        textTransform : 'capitalize', 
                                                        color : statusColors[item.status],
                                                        fontWeight : 600,
                                                        display : 'flex',
                                                        alignItems : 'center'
                                                    }}
                                                >
                                                    <Circle bgColor={statusColors[item.status]}/>{ item.status }
                                                </Box>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>              
        </Box>
    )
}

export default InComing;