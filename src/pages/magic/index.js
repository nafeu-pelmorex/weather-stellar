import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
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
          <Configuration options={
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

function Configuration({ options }) {
  const classes = useStyles();
  const { state, dispatch } = useContext(MainContext);

  const handleChangeLocation = event => {
    dispatch({ type: 'SELECT_LOCATION', payload: event.target.value });
  }

  const handleChangeWeatherVariable = event => {
    dispatch({ type: 'SELECT_WEATHER_VARIABLE', payload: event.target.value });
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Box p={2}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="location-native-simple">Location</InputLabel>
            <Select
              native
              autoWidth={true}
              value={state.location}
              onChange={handleChangeLocation}
              placeholder="Select Location"
              inputProps={{
                name: 'location',
                id: 'location-native-simple',
              }}
            >
              <option value="" />
              {_.map(options, ({ value, label }) => {
                return (
                  <option value={value}>{label}</option>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box p={2}>
          <FormControl className={classes.formControl}>
            <FormLabel component="legend">Weather Variable</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={state.weatherVariable} onChange={handleChangeWeatherVariable}>
              <FormControlLabel value="temperature" control={<Radio />} label="Temperature" />
              <FormControlLabel value="precipitation" control={<Radio />} label="Precipitation" />
            </RadioGroup>
          </FormControl>
        </Box>
      </Grid>
    </Grid>
  );
}

function Prediction() {
  return (
    <div>[PREDICTION]</div>
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
