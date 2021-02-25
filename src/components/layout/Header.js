import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { maxWidthStyles } from '../../constants/dimensions.js';
import { paletteMain } from '../../constants/colors';
import logo from './images/logo.png';

// -------------------------------- Helpers -------------------------------- //
// ------------------------------------------------------------------------- //
function ScrollWrapper(props) {
  const { children, threshold } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      background: trigger ? paletteMain.concat('F2') : 'none',
    },
  });
}


ScrollWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  threshold: PropTypes.number.isRequired,
};



// ------------------------------- Component ------------------------------- //
// ------------------------------------------------------------------------- //
const styles = (theme) => ({
  root: {
    height: 60,
    transition: 'background-color 0.25s linear',
  },
  logo: {
    objectFit: 'contain',
    display: 'block',
    height: '100%',
    width: 'auto',
  },
  toolbar: {
    ...maxWidthStyles,
    width: '100%',
    minHeight: 54,
    height: 54,
  },
});

function Header(props) {
  const { classes } = props;

  return (
    <ScrollWrapper threshold={96}>
      <AppBar className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <img src={logo} alt="logo" className={classes.logo} />
        </Toolbar>
      </AppBar>
    </ScrollWrapper> 
  );
}

export default withStyles(styles)(Header);