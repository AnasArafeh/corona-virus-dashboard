// @mui material components
import Grid from "@mui/material/Grid";
import { useContext, useEffect, useState } from "react";
import { SharedContext } from "../../../StateManagement/Reducers/SharedReducer";
import { Box } from "@mui/material";
import breakpoints from "../../../Assets/breakpoints";
import { getAvailableCountries, getCovidSummary } from "../../../Services/Dashboard";
import { AvailableRoutes } from "../../../Store/APIRoutes";
import { DashboardContext } from "../../../StateManagement/Reducers/DashboardReducer";
import GlobalSummary from "../Components/GlobalSummary";

const DashboardScreen = () => {
  const { values } = breakpoints;
  const [show, setShow] = useState(false);

  // //add this delay in case the globe was adding a lag or delay to the dashboard page
  // useEffect(() => {
  //   setShow(false);

  //   // show globe after the screen renders
  //   const intervalId = setTimeout(() => {
  //     setShow(true);
  //   }, 50);

  //   return () => clearTimeout(intervalId);
  // }, [])

  const { state: { apiRoutes } } = useContext(SharedContext);
  const { SetSummary, SetAvailableCountries } = useContext(DashboardContext);

  useEffect(() => {
    if (apiRoutes && Object.keys(apiRoutes).length > 0) {
      fetchSummary();
      fetchCountries();
    }
  }, [apiRoutes])

  const fetchSummary = async () => {
    let path = apiRoutes[AvailableRoutes.summaryRoute].Path;
    if (path) {
      let result = await getCovidSummary(path);
      if (result)
        SetSummary(result.data);
    }
  }

  const fetchCountries = async () => {
    let path = apiRoutes[AvailableRoutes.countriesRoute].Path;
    if (path) {
      let result = await getAvailableCountries(path);
      if (result)
        SetAvailableCountries(result.data);
    }
  }

  return (
    <Box style={{ margin: "2.5% 5%" }}>
      <Grid container>
        <Grid item xs={12} lg={12}>
          <GlobalSummary />
        </Grid>
        <Grid item xs={12} lg={12}>
          {/* <Grid container>
            <Grid item xs={12}>
              {show &&
                <></>
                // <Globe
                //   display={{ xs: "none", md: "block" }}
                //   position="absolute"
                //   top="10%"
                //   right={0}
                //   mt={{ xs: -12, lg: 1 }}
                //   mr={{ xs: 0, lg: 10 }}
                //   canvasStyle={{ marginTop: "3rem" }}
                // />
              }
            </Grid>
          </Grid> */}
        </Grid>
      </Grid>
    </Box>
  );
}

export default DashboardScreen;
