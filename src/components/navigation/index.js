import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import TimelineIcon from '@material-ui/icons/Timeline';
import InfoIcon from '@material-ui/icons/Info';

const TAB_VALUES = [
  '/upload',
  '/magic',
  '/about'
];

const Navigation = ({ location }) => {
  const history = useHistory();
  const selectedTab = TAB_VALUES.indexOf(location.pathname);

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
        <Tab icon={<TimelineIcon />} label="Magic" />
        <Tab icon={<InfoIcon />} label="Why Us?" />
      </Tabs>
    );
  }
  return '';
}

export default withRouter(Navigation);
