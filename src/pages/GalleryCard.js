import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { makeStyles } from '@mui/styles';
import Collapse from '@mui/material/Collapse'

/*const useStyles = makeStyles({

})*/

export default function GalleryCard({ image, checked }) {
    /* const classes = useStyles();*/
    return (
        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
            <Card sx={{ maxWidth: 600, background: 'rgba(0,0,0,0.5)', margin: '20px' }}>
                <CardMedia
                    component="img"
                    height="440"
                    width='250'
                    image={image.imageUrl}
                />
            </Card>
        </Collapse >
    );
}