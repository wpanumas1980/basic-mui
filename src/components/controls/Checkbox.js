import React from 'react';
import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from '@material-ui/core';


export default function Checkbox(props) {
    const { name, label, value, onChange } = props;

    const convertToDefEventPara = (name, value) => ({
        target:{
            name,
            value
        }
    })
    return (
        <FormControl>
            <FormControlLabel
                control={<MuiCheckbox
                name={name}
                checked={value}
                onChange={e => console.log(convertToDefEventPara(name, e.target.checked))}
                />}
                label={label}
            />
        </FormControl>
    )
}
