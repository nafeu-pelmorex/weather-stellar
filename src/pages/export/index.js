import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faFileCsv, faSalesForce, faFileExcel, faFileExport } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '1em'
  },
  paper: {}
}));

function Export() {
  const classes = useStyles();
  const history = useHistory();

  const tileData = [
    {
      title: 'PDF',
      icon: <FontAwesomeIcon icon={faFilePdf} size="3x"/>,
    },
    {
      title: 'CSV',
      icon: <FontAwesomeIcon icon={faFileCsv} size="3x"/>,
    },
    {
      title: 'Excel',
      icon: <FontAwesomeIcon icon={faFileExcel} size="3x"/>,
    },
    {
      title: 'Salesforce',
      icon: <FontAwesomeIcon icon={faFileExport} size="3x"/>,
    },
    {
      title: 'Netsuite',
      icon: <FontAwesomeIcon icon={faFileExport} size="3x"/>,
    },
    {
      title: 'Looker',
      icon: <FontAwesomeIcon icon={faFileExport} size="3x"/>,
    },
    {
      title: 'Shopify',
      icon: <FontAwesomeIcon icon={faFileExport} size="3x"/>,
    }
  ]

  return (
    <React.Fragment>
      <Grid item xs={12} align="center">
        <Box p={4}>
          <Typography variant="h5" gutterBottom>
            Congrats! You have successfully seen the future 🙂
          </Typography>
          <Typography gutterBottom color="textSecondary">
            Why stop here? We're integrated into several tools in the market.
          </Typography>
          <Typography gutterBottom variant="body2" component="p">
            Choose from a direct PDF, csv or excel download to further analyze and play with the data the way you want, or we can even share your data to a destination of your choice be it any major CRM (Salesforce, Netsuite etc.) or App store (Shopify etc.). You can even visualize the data in your native data visualization tool (eg. Looker). Click on one of the destination icons below to get going.
          </Typography>
        </Box>
      </Grid>
      <GridList align="center" cellHeight={70} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.title} cols={1}>
            <Box p={1}>
              <Button
                variant="outlined"
                fullWidth={true}
                color="primary"
                size="large"
                className={classes.button}
                startIcon={tile.icon}
              >
                {tile.title}
              </Button>
            </Box>
          </GridListTile>
        ))}
      </GridList>
    </React.Fragment>
  );
}

export default Export;
