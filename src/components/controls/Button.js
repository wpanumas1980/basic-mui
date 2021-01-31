import React from 'react';
import { Button as MuiButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme =>({
    root:{
        margin:theme.spacing(0.5)
    },
    label:{
        textTransform:'none'
    }
}))
export default function Button(props) {
    const classes = useStyles();
    const { text, size, color, variant, onClick,...other } = props;
    return (
        <MuiButton
            variant={variant || "contained"}
            color={color||"primary"}
            size={size||"large"}
            onClick={onClick}
            {...other}
            classes={{root:classes.root,label:classes.label}}
            >    
            {text}
        </MuiButton>
    )
}
