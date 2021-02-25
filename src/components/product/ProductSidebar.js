import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { white, paletteMain, paletteSecondary, paletteTertiary } from '../../constants/colors.js';

const useStyles = makeStyles({
  root: {
    background: paletteMain,
    color: white,
    background: paletteMain,

  },
  title: {
    fontWeight: 400,
  },
  value: {
    fontWeight: 'bold',
  },
  button: {
    fontSize: '12px', 
    padding: '6px 24px',
    width: '100%'
  }
});


function ProductSidebar(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>
      <Box p={6} pt={4}>
        <Typography component="h4" variant="p" className={classes.title}>
          {"FROM"}
        </Typography>
        <Typography component="h2" variant="p" className={classes.value}>
          {'£300'}
        </Typography>

        <Box mt={4}>
          <Button 
            color="secondary"
            variant="contained"
            className={classes.button}
          >
            <b>View Dates</b>
          </Button>
        </Box>
        <Box mt={4}>
          <Button 
            color="secondary"
            variant="contained"
            className={classes.button}
          >
            <b>Request Private Trip</b>
          </Button>
        </Box>
      </Box>
    </Card>
  );
}

export default ProductSidebar;
