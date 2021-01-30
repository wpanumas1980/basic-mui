import React from 'react';
import Button from '@material-ui/core/Button';

export default function Button(props) {
    const {text, size, color, variant, onClick } = props;
    return (
        <Button variant="contained" color="secondary"></Button>
    )
}
