import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import _ from 'lodash';
import { MainContext } from '../../context/main';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  formControl: {
    width: '100%'
  }
})

function LocationSelection({ handleChange, selection, options }) {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="location-native-simple">Location</InputLabel>
      <Select
        native
        autoWidth={true}
        value={selection}
        onChange={handleChange}
        placeholder="Select Location"
        inputProps={{
          name: 'location',
          id: 'location-native-simple',
        }}
      >
        {_.map(options, ({ value, label }) => {
          return (
            <option value={value}>{label}</option>
          );
        })}
      </Select>
    </FormControl>
  );
}

function WeatherVariableSelection({ handleChange, selection }) {
  return (
    <React.Fragment>
      <FormControlLabel
        value="temperature"
        control={
          <Radio
            checked={selection === 'temperature'}
            onChange={handleChange}
            value="temperature"
            color="primary"
            size="small"
          />
        }
        label="Temperature"
        labelPlacement="top"
      />
      <FormControlLabel
        value="precipitation"
        control={
          <Radio
            checked={selection === 'precipitation'}
            onChange={handleChange}
            value="precipitation"
            color="primary"
            size="small"
          />
        }
        label="Precipitation"
        labelPlacement="top"
      />
    </React.Fragment>
  );
}

function Options({ options }) {
  const { state, dispatch } = useContext(MainContext);

  const handleChangeLocation = event => {
    dispatch({ type: 'SELECT_LOCATION', payload: event.target.value });
  }

  const handleChangeWeatherVariable = event => {
    dispatch({ type: 'SELECT_WEATHER_VARIABLE', payload: event.target.value });
  }

  return (
    <Grid container spacing={2} xs={6}>
      <Grid item xs={6}>
        <Box p={1}>
          <LocationSelection
            handleChange={handleChangeLocation}
            selection={state.location}
            options={options}
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box p={1}>
          <WeatherVariableSelection
            handleChange={handleChangeWeatherVariable}
            selection={state.weatherVariable}
          />
        </Box>
      </Grid>
      <Divider />
    </Grid>
  );
}

export default Options;