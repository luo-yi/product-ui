import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { maxWidthStyles } from '../../constants/dimensions.js';
import { white, paletteMain, paletteSecondary, paletteTertiary } from '../../constants/colors.js';


const styles = {
  root: {
    height: 36,
    lineHeight: '36px',
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: 600,
    color: white,
    background: paletteTertiary,
  },
  link: {
    marginRight: 36,
  },
  maxWidth: maxWidthStyles,
};

function HeroNav(props) {
  const { classes } = props;

  return (
    <Card className={classes.root}>
      <Box className={classes.maxWidth} my={2}>
        <Link className={classes.link}>Itinerary</Link>
        <Link className={classes.link}>Reviews</Link>
        <Link className={classes.link}>FAQ</Link>
      </Box>
    </Card>
  );
}

HeroNav.propTypes = {};

export default withStyles(styles)(HeroNav);
