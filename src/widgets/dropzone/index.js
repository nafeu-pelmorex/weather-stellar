import React, { useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { MainContext } from '../../context/main';

function DropZone(props) {
  const { state, dispatch } = useContext(MainContext);
  const onDrop = async ([file]) => {
    const reader = new FileReader();
    reader.onload = function(e) {
      const contents = e.target.result;
      console.log(contents);
    };
    reader.readAsText(file);
    dispatch({ type: 'UPLOAD_FILE', payload: file });
  }

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Paper {...getRootProps({className: 'dropzone'})} variant="outlined" elevation={0}>
      <input {...getInputProps()} />
      <Box p={3}>
        <Typography align="center" color="textSecondary">
          {state.file.path ? state.file.name : "Drag 'n' drop a file here, or click to select a file."}
        </Typography>
      </Box>
    </Paper>
  );
}

export default DropZone;