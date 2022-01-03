import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Collapse from '@mui/material/Collapse'

const useStyles = makeStyles({
    title: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: '2rem',
        color: '#fff'
    },
    desc: {
        fontFamily: 'Roboto',
        fontSize: '1.1rem',
        color: '#ddd',
        wordWrap: 'break-word'
    }
})

export default function ImageCard({ house, checked }) {
    const classes = useStyles();
    return (
        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
            <Card sx={{ maxWidth: 600, background: 'rgba(0,0,0,0.5)', margin: '20px' }}>
                <CardMedia
                    component="img"
                    height="440"
                    image={house.imageUrl}
                />
                <CardContent>
                    <Typography className={classes.title} gutterBottom variant="h5" component="div">
                        {house.title}
                    </Typography>
                    <Typography variant="body2" className={classes.desc}>
                        {house.desc}
                    </Typography>
                </CardContent>
            </Card>
        </Collapse >
    );
}