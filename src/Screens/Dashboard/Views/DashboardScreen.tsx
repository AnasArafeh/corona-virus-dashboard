// @mui material components
import Grid from "@mui/material/Grid";
import { useContext, useEffect, useState } from "react";
import { SharedContext } from "../../../StateManagement/Reducers/SharedReducer";
import { Box, Typography } from "@mui/material";
import breakpoints from "../../../Assets/breakpoints";
import { getCovidSummary } from "../../../Services/Dashboard";
import { AvailableRoutes } from "../../../Store/APIRoutes";
import { DashboardContext } from "../../../StateManagement/Reducers/DashboardReducer";
import GlobalSummary from "../Components/GlobalSummary";
import CountriesList from "../Components/CountriesList";
import { dashboardStyles } from "../Style/Dashboard";

const DashboardScreen = () => {
  const { state: { apiRoutes } } = useContext(SharedContext);
  const { SetSummary, SetIsLoading } = useContext(DashboardContext);

  useEffect(() => {
    if (apiRoutes && Object.keys(apiRoutes).length > 0) {
      SetIsLoading(true);
      fetchSummary();
    }
  }, [apiRoutes])

  const fetchSummary = async () => {
    let path = apiRoutes[AvailableRoutes.summaryRoute].Path;
    if (path) {
      let result = await getCovidSummary(path);
      if (result) {
        SetSummary(result.data);
        SetIsLoading(false);
      }
    }
  }

  return (
    <Box style={{ margin: "2.5% 5%" }}>
      <Grid container>
        <Grid item xs={12} md={4} lg={4}>
          <Box component="div" sx={dashboardStyles.titleContainer}>
            <Typography sx={dashboardStyles.title}>
              Gloabl statistics
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} lg={12}>
          <GlobalSummary />
        </Grid>
        <Grid item xs={12} lg={12}>
          <CountriesList />
        </Grid>
      </Grid>
    </Box>
  );
}

export default DashboardScreen;
