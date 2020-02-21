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

function createData(locationId, lat, long, timestamp) {
  return { locationId, lat, long, timestamp };
}

const rows = [
  createData('6e54b5b3-34c0-4887-bb42-39379704ec47', 1.321, 1.821, "2020-02-21"),
  createData('6e12d9c3-8c42-41f2-a729-f9697b8df6fb', 1.851, 1.932, "2020-02-22"),
  createData('0118b484-5cee-426e-96bb-a42a334a7d54', 1.132, 0.513, "2020-02-23"),
  createData('977762e3-2868-4740-b7ac-1f747e6eaa6d', 1.974, 1.103, "2020-02-24"),
  createData('6393e810-1a17-43e6-b92a-2b8d8655d3d9', 2.124, 1.994, "2020-02-25"),
];

export default function DenseTable({ industry }) {
  const classes = useStyles();

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