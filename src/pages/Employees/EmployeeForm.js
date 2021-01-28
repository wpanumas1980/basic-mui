import React, { useState } from 'react';
import { Grid, makeStyles, TextField } from '@material-ui/core';
import {useForm, Form} from '../../components/useForm';

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}

export default function EmployeeForm() {
   
    const { values, setValues, handleInputChange } = useForm(initialFValues)


    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        variant="outlined"
                        label="Full Name"
                        name="fullname"
                        value={values.fullname}
                        onChange={handleInputChange}
                    />
                    <TextField
                        variant="outlined"
                        label="email"
                        value={values.email}
                    />
                </Grid>
                <Grid item xs={6}></Grid>
            </Grid>
        </Form>
    )
}
