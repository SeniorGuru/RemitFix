import React from 'react' ;

import WhiteLogo from '../../../../assets/white_logo.png' ;

import {
    Box,
    InputAdornment, 
    TextField, 
    Button,
    Grid
} from '@mui/material' ;

import ShareIcon from '@mui/icons-material/Share';
import LinkIcon from '@mui/icons-material/Link';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';

import { makeStyles }  from '@mui/styles' ;

const useStyles = makeStyles(() => ({
    root : {
        height : 800
    },
    gradient : {
        background : 'linear-gradient(to right, #5F42F0 3%, #8F5FDD 90%)',

        height : 300,

        position : 'relative',

        padding : 30
    },
    logo : {
        paddingLeft : '15%'
    },
    description : {
        paddingLeft : '30%',
        paddingRight : '30%',

        color : 'white',

        fontSize : 30,
        fontWeight : 600,

        textAlign : 'center'
    },
    copyForm : {
        position : 'absolute',

        background : 'white',
        padding : 20,

        width : '40%',

        marginLeft : '30%',

        bottom : -120,

        border : '1px solid lightgray'
    },
    btGp : {
        marginTop : 30,

        "& .MuiGrid-item" : {
            textAlign : 'center'
        }
    }
})) ;

const Invite = () => {
    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
            <Box className={classes.gradient}>
                <Box className={classes.logo}>
                    <Box component={'img'} src={WhiteLogo} />
                </Box>
                <Box className={classes.description}>
                    Refer friends to RemitFix and get a 200 NOK for every friend of yours who sends at least 2,000 NOK
                </Box>
                <Box className={classes.copyForm}>
                    <Box sx={{textAlign : 'center', mb : 2}}>
                        Copy and share your personal invite link...
                    </Box>
                    <TextField
                        fullWidth
                        value={'MOHAMMED221'}
                        size={'small'}
                        InputProps={{
                            endAdornment : <InputAdornment>
                                <Button variant={'contained'} size={'small'}>Copy</Button>
                            </InputAdornment>
                        }}
                    />
                    <Box className={classes.btGp}>
                        <Grid container>
                            <Grid item xs={3}>
                                <Button variant={'contained'} size={'small'} color={'success'}>
                                    <PhoneInTalkIcon />
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant={'contained'} size={'small'} color={'primary'}>
                                    <OfflineBoltIcon />
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant={'contained'} size={'small'} color={'info'}>
                                    <LinkIcon />
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant={'contained'} size={'small'} color={'inherit'}>
                                    <ShareIcon/>
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Invite ;