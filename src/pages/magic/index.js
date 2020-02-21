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
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  formControl: {}
}));

function Magic() {
  const { state } = useContext(MainContext);
  const history = useHistory();

  const handleClickExport = () => {
    history.push("/export");
  }

  return (
    <Grid item xs={12}>
      <Grid item align="center" xs={12}>
        <Box p={2}>
          <Typography gutterBottom>
            Analyze, compare and understand how weather is affecting your data. Slice and dice the data, download it for a variety of use cases.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box p={1}>
          <Options options={state.locationOptions}/>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box p={1}>{
          <Graphs prediction={state.prediction} performance={state.performance} />
        }
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box p={1}>
          <Analysis />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box p={1}>
          <Actions handleClickExport={handleClickExport} />
        </Box>
      </Grid>
    </Grid>
  );
}

function Graphs({ prediction, performance }) {
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
          <Chart
            title={performance.title}
            subtext={performance.subtext}
            series={performance.series}
            dates={performance.dates}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

function Analysis() {
  return (
    <Grid container spacing={2}>
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

function Actions({ handleClickExport }) {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Box mt={2}>
        <Button onClick={handleClickExport} variant="outlined" color="primary">
          Export
        </Button>
      </Box>
    </Grid>
  );
}

export default Magic;
