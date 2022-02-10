import React from 'react';
import porpolyo from '../assets/porpolyo.jpg';
import { Link, Box } from '@mui/material';

export default function index() {
    return (

        <Box sx={style.colorer}>
            <p style={{ height: "100px" }} />
            <h1 style={style.centerer} color="textPrimary">Elinald's Portfolio</h1>
            <div style={style.centerer}>
                <Link href="/mainpageeli" underline="none">
                    <button style={style.button}>
                        <img alt="forpolfio" src={porpolyo} style={style.imageporpolyo} />
                    </button>
                </Link>
            </div>
            <p style={style.centerer} color="textPrimary">(Click the image)</p>
        </Box>

    )
}

const style = {
    centerer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "SpaceMono",
    },
    imageporpolyo: {
        height: "250px",
        width: "250px",
    },
    button: {
        backgroundColor: "black",
    }
}
