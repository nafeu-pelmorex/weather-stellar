import React, { useContext } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import InfoIcon from '@material-ui/icons/Info';
import { MainContext } from '../../context/main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload, faMagic, faFileExport } from '@fortawesome/free-solid-svg-icons';

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
        <Tab icon={<FontAwesomeIcon icon={faFileUpload} color={'#2980b9'} size="3x"/>} label="Upload" />
        <Tab icon={<FontAwesomeIcon icon={faMagic} color={'#8e44ad'} size="3x"/>} label="Magic" disabled={!state.file.path} />
        <Tab icon={<FontAwesomeIcon icon={faFileExport} color={'#d35400'} size="3x"/>} label="Export" disabled={!state.file.path} />
      </Tabs>
    );
  }
  return '';
}

export default withRouter(Navigation);
