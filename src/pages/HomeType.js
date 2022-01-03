import React from 'react'
import { makeStyles } from '@mui/styles'
import ImageCard from './ImageCard';
import house from '../data/house'
import useWindowPosition from '../hook/useWindowPosition';
import Box from '@mui/material/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
}))

const HomeType = () => {
    const classes = useStyles();
    const checked = useWindowPosition('header');
    return (
        <Box sx={{ boxShadow: 1, backgroundColor: '#fff' }}>
            <div className={classes.root}>
                <ImageCard house={house[0]} checked={checked} />
                <ImageCard house={house[1]} checked={checked} />
            </div>
        </Box>
    )
}

export default HomeType
