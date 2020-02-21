import React, { useContext } from 'react';
import Chart from '../../widgets/chart';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles } from '@material-ui/core/styles';
import { MainContext } from '../../context/main';
import _ from 'lodash';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Options from '../../widgets/options';

const useStyles = makeStyles(theme => ({
  formControl: {
    width: '100%'
  }
}));

function Magic() {
  return (
    <Grid item xs={12}>
      <Grid item xs={12}>
        <Box p={1}>
          <Options options={
            [
              {
                label: 'Toronto',
                value: 'toronto',
              },
              {
                label: 'Ottawa',
                value: 'ottawa',
              },
              {
                label: 'Montreal',
                value: 'montreal',
              }
            ]
          }/>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box p={1}>
          <Prediction />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box p={1}>
          <Performance />
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

function Prediction() {
  return (
    <Grid container spacing={2}>
      <Grid xs={6}>
        <Box p={2}>
          <Chart />
        </Box>
      </Grid>
      <Grid xs={6}>
        <Box p={2}>
          Information
        </Box>
      </Grid>
    </Grid>
  );
}

function Performance() {
  return (
    <div>[PERFORMANCE]</div>
  );
}

function Actions() {
  return (
    <div>[ACTIONS]</div>
  );
}

export default Magic;
