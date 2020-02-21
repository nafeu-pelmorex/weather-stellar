import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function generateId() {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
  }
  const guid = () => {
      let s4 = () => {
          return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
      }
      //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
  return guid();
};

function createData(lat, long, timestamp) {
  return {
    locationId: generateId(),
    lat,
    long,
    timestamp
  };
}

function createLastData() {
  return {
    locationId: '...',
    lat: '...',
    long: '...',
    timestamp: '...'
  };
}

export default function DenseTable({ industry }) {
  const classes = useStyles();

  const rows = [
    createData(1.321, 1.821, "2020-02-21"),
    createData(1.851, 1.932, "2020-02-22"),
    createData(1.132, 0.513, "2020-02-23"),
    createData(1.974, 1.103, "2020-02-24"),
    createData(2.124, 1.994, "2020-02-25"),
    createLastData(),
  ];

  const getLabelByIndustry = (industry) => {
    if (industry === 'pageviews') {
      return 'Number of Page Views';
    }
    if (industry === 'restaurant') {
      return 'Restaurant Sales';
    }
    return 'Electricity Consumption';
  }

  return (
    <React.Fragment>
      <Box p={2}>
        <Typography variant="h5" gutterBottom color="primary">
          {getLabelByIndustry(industry)}
        </Typography>
        <Typography variant="body2" component="p" gutterBottom color="textSecondary">
          Preview Of Uploaded Data:
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Location ID</TableCell>
              <TableCell align="right">Lat</TableCell>
              <TableCell align="right">Long</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.locationId}>
                <TableCell component="th" scope="row">{row.locationId}</TableCell>
                <TableCell align="right">{row.lat}</TableCell>
                <TableCell align="right">{row.long}</TableCell>
                <TableCell align="right">{row.timestamp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}