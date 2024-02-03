import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';

export default function ButtonAppBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography>Home</Typography>
                <Typography>About</Typography>
                <Typography>Blog</Typography>
                <Button variant="contained">Home</Button>
                <Button variant="contained">About</Button>
                <Button variant="contained">Blog</Button>
                <Link href="/">Home</Link>
                <Link href="about">About</Link>
            </Toolbar >
        </AppBar >
    )
}