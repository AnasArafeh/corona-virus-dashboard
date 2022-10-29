import { Box, Grid } from '@mui/material';
import { useContext } from 'react';
import Card from '../../../Components/Card/Card';
import { DashboardContext } from '../../../StateManagement/Reducers/DashboardReducer';

const CountriesList = () => {

    const { state: { summary } } = useContext(DashboardContext);

    return (
        <Grid container>
            <Grid item xs={12} lg={7}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4} lg={6} xl={5}>
                        <Box mb={3}>
                            <Card name="Total Confirmed" value={summary.Global.TotalConfirmed} icon="" />
                        </Box>
                        <Card name="New Confirmed" value={summary.Global.NewConfirmed} icon="" />

                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={6} xl={5}>
                        <Box mb={3}>
                            <Card name="Total Deaths" value={summary.Global.TotalDeaths} icon="" />
                        </Box>
                        <Card name="New Deaths" value={summary.Global.NewDeaths} icon="" />
                    </Grid>

                </Grid>
            </Grid>

        </Grid>

    )

}


export default CountriesList;