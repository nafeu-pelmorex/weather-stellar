import React, { useContext } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import TimelineIcon from '@material-ui/icons/Timeline';
import InfoIcon from '@material-ui/icons/Info';
import { MainContext } from '../../context/main';

const TAB_VALUES = [
  '/upload',
  '/magic',
  '/about'
];

const Navigation = ({ location }) => {
  const history = useHistory();
  const selectedTab = TAB_VALUES.indexOf(location.pathname);
  const { state } = useContext(MainContext);

  const handleChange = (event, newValue) => {
    history.push(TAB_VALUES[newValue]);
  };

  if (location.pathname !== '/') {
    return (
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab icon={<CloudUploadIcon />} label="Upload" />
        <Tab icon={<TimelineIcon />} label="Magic" disabled={!state.file.path} />
        <Tab icon={<InfoIcon />} label="Why Us?" disabled={!state.file.path} />
      </Tabs>
    );
  }
  return '';
}

export default withRouter(Navigation);
