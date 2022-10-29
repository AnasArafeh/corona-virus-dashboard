import { Grid, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import DataTable from '../../../Components/DataTable/DataTable';
import { DashboardContext } from '../../../StateManagement/Reducers/DashboardReducer';
import { columns } from '../Store/countriesListColumns';

const CountriesList = () => {

    const { state: { summary, isLoading } } = useContext(DashboardContext);

    return (
        <Grid container>
            <Grid item xs={12} lg={12}>
                <DataTable rows={summary.Countries} columns={columns} isLoading={isLoading} title={"Countries List"} subTitle="This table shows the Corona virus statistics for each country" />
            </Grid>
        </Grid>
    )

}


export default CountriesList;