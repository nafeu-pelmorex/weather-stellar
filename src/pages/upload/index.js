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
      <Typography gutterBottom>
        {/*Upload Section*/}
      </Typography>
      <DropZone />
      {state.file.path ? (
        <React.Fragment>
          <Grow in={state.file.path}>
            <Box mt={2}>
              <DenseTable />
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
