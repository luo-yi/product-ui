import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { maxWidthStyles } from '../../constants/dimensions.js';
import { white, paletteMain } from '../../constants/colors.js';

import mountains from './images/mountains.png';
import tree from './images/tree.png';


const useStyles = makeStyles({
  heading: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  link: {
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});


// ---------------------------- Sub-Components ----------------------------- //
// ------------------------------------------------------------------------- //
function StatementBlock(props) {
  const classes = useStyles();
  const { icon, heading, body, link } = props;

  return (
    <Box>
      {icon}
      <Typography  variant={'h6'} component={'h6'} className={classes.heading}>{heading}</Typography>
      <Box pb={4}>
        <Typography  variant={'p'} component={'p'} className={classes.body}>{body}</Typography>
      </Box>
      <Typography  variant={'p'} component={'p'} className={classes.link}>{link}</Typography>
    </Box>
  );
}

// function MenuBlock(props) {
//   return (
//   );
// }


// ------------------------------- Component ------------------------------- //
// ------------------------------------------------------------------------- //
const styles = {
  maxWidth: maxWidthStyles,
  image: {
    width: '100%',
    height: '20vw',
  },
  footer: {
    height: '240px',
    background: '#010103',
    color: white,
  },
  tree: {
    height: 48,
  }
};


function ProductFooter(props) {
  const { classes } = props;

  const icon = (
    <img 
      src={tree}
      alt="tree-shadow"
      className={classes.tree}
    />
  );

  const statementBlocks = [
    { icon: icon, heading: 'test', body: 'text', link: 'text' },
    { icon: icon, heading: 'test', body: 'text', link: 'text' },
    { icon: icon, heading: 'test', body: 'text', link: 'text' },
    { icon: icon, heading: 'test', body: 'text', link: 'text' },
  ];

  const renderStatementBlock = (item, index) => (
    <Grid item lg={3} xs={6} key={index}>
      <StatementBlock {...item} />
    </Grid>
  );

  return (
    <Box mt={12}>
      <img 
        src={mountains}
        alt="mountains-shadow"
        className={classes.image}
      />

      <Box mt={-2} className={classes.footer}>
        <Box className={classes.maxWidth}>
        <Grid container spacing={3}>
          {statementBlocks.map((item, index) => renderStatementBlock(item, index))}
        </Grid>
        </Box>
      </Box>
    </Box>
  );
}

ProductFooter.propTypes = {};

export default withStyles(styles)(ProductFooter);
