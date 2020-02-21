import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import DropZone from '../../widgets/dropzone';
import DenseTable from '../../widgets/table';
import Box from '@material-ui/core/Box';
import Grow from '@material-ui/core/Grow';
import { MainContext } from '../../context/main';
import Button from '@material-ui/core/Button';
import Skeleton from '@material-ui/lab/Skeleton';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';

function Upload() {
  const { state } = useContext(MainContext);
  const history = useHistory();

  const handleClickAnalyze = () => {
    history.push("/magic");
  }

  return (
    <React.Fragment>
      <Box p={4}>
        <Typography gutterBottom>
          Simply upload your data to the platform. The data can include any metric with a timestamp and location attached to it. If you are a visual learner (like us), check out the template below for the data set format we accept :)
        </Typography>
      </Box>
      <DropZone />
      {state.file.path ? (
        <React.Fragment>
          <Grow in={state.file.path}>
            <Box mt={2}>
              <DenseTable industry={state.industry} />
            </Box>
          </Grow>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Box mt={2}>
              <Button onClick={handleClickAnalyze} variant="outlined" color="primary" disabled={!state.file.path}>
                Analyze
              </Button>
            </Box>
          </Grid>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Skeleton animation="pulse" height={50} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default Upload;
