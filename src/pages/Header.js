import React, { useEffect, useState } from 'react';
import { AppBar, IconButton, Toolbar, Collapse } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import image from '../assets/bsb-head.jpg';
import { makeStyles } from '@mui/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Roboto',
    },
    appbar: {
        background: 'transparent',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto'
    },
    appbarTitle: {
        flexGrow: '1',
        color: '#fff'
    },
    icon: {
        color: '#fff',
        fontSize: '2rem'
    },
    colorText: {
        color: '#ffc320',
    },
    container: {
        textAlign: 'center',
    },
    title: {
        fontSize: '4rem',
        color: '#fff'
    },
    learnMore: {
        color: '#fff',
        fontSize: '3rem'

    },
}))

export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false)
    useEffect(() => {
        setChecked(true)
    }, [])
    return (
        <div className={classes.root} id='header'>
            <AppBar className={classes.appbar} elevation={0} color='transparent'>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}><span className={classes.colorText}>BSB</span>SEMARANG</h1>
                    <IconButton>
                        <SortIcon className={classes.icon} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}>
                <div className={classes.container}>
                    <h1 className={classes.title}>WELCOME TO<br />#KOTA<span color=''>SERIBU</span>PELUANG</h1>
                    <IconButton>
                        <ExpandMoreIcon className={classes.learnMore} />
                    </IconButton>
                </div>
            </Collapse>
        </div>
    )
}