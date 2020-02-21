import React, { useContext } from 'react';
import Chart from '../../widgets/chart';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { MainContext } from '../../context/main';
import Options from '../../widgets/options';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DataService from '../../data';


const useStyles = makeStyles(theme => ({
  formControl: {}
}));

function Magic() {
  const { state } = useContext(MainContext);
  return (
    <Grid item xs={12}>
      <Grid item xs={12}>
        <Box p={1}>
          <Options options={state.locationOptions}/>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box p={1}>{
          <Prediction prediction={state.prediction} />
        }
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box p={1}>
          <Performance performance={state.performance} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box p={1}>
          <Actions />
        </Box>
      </Grid>
    </Grid>
  );
}

function Prediction({ prediction }) {
  return (
    <Grid container spacing={2}>
      <Grid xs={6}>
        <Box p={2}>
          <Chart
            title={prediction.title}
            subtext={prediction.subtext}
            series={prediction.series}
            dates={prediction.dates}
          />
        </Box>
      </Grid>
      <Grid xs={6}>
        <Box p={2}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                What does this mean?
              </Typography>
              <Typography variant="h5" component="h2">
                be
              </Typography>
              <Typography color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}

function Performance({ performance }) {
  return (
    <Grid container spacing={2}>
      <Grid xs={6}>
        <Box p={2}>
          <Chart
            title={performance.title}
            subtext={performance.subtext}
            series={performance.series}
            dates={performance.dates}
          />
        </Box>
      </Grid>
      <Grid xs={6}>
        <Box p={2}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                What does this mean?
              </Typography>
              <Typography variant="h5" component="h2">
                be
              </Typography>
              <Typography color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}

function Actions() {
  return (
    <div>[ACTIONS]</div>
  );
}

export default Magic;
