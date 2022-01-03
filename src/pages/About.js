import React from 'react'
import { makeStyles } from '@mui/styles'
import GalleryCard from './GalleryCard';
import hilago from '../data/hilago'
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


const About = () => {
    const classes = useStyles();
    const checked = useWindowPosition('header');
    return (
        <Box sx={{ boxShadow: 1, backgroundColor: '#fff' }}>
            <div className={classes.root}>
                <GalleryCard image={hilago[0]} checked={checked} />
                <GalleryCard image={hilago[1]} checked={checked} />
                <GalleryCard image={hilago[2]} checked={checked} />
                <GalleryCard image={hilago[3]} checked={checked} />
            </div>
        </Box>
    )
}

export default About
