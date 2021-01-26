import React from 'react';
import PageHeader from '../../components/PageHeader';
import EmployeeForm from './EmployeeForm';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';

export default function Employees() {
    return (
        <>
         <PageHeader
          title="New Employee"
          subTitle="Form design with validation"
          icon={<PeopleOutlineTwoToneIcon fontSize="large"/>}
        />
        <EmployeeForm/>
        </>
    )
}
