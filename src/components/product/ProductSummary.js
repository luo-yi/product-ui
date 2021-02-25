import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { white, paletteMain, paletteSecondary, paletteTertiary } from '../../constants/colors.js';
import mountain from './images/icons/mountain.png';


const useStyles = makeStyles({
  summaryItem: {
    fontSize: '14px',
    width: '100%',
  },
  title: {
    fontWeight: 100,
    // float: 'left',
  },
  value: {
    fontWeight: 'bold',
    // float: 'left',
  },
  activityValue: {
    fontWeight: 'bold',
    fontSize: '12px',
    padding: '4px 0',
  },
  icon: {
    height: 38,
    float: 'left',
    marginTop: 5,
    paddingRight: 19,
  },
});

// ---------------------------- Sub-Components ----------------------------- //
// ------------------------------------------------------------------------- //
function SummaryItem(props) {
  const classes = useStyles()
  const { title, value, icon } = props;

  return (
    <Box className={classes.summaryItem}>
      {icon}
      <Typography component="h4" variant="p" className={classes.title}>
        {title}
      </Typography>
      <Typography component="p" variant="p" className={classes.value}>
        {value}
      </Typography>
    </Box>
  );
}

SummaryItem.propTypes = {};


// ------------------------------- Component ------------------------------- //
// ------------------------------------------------------------------------- //
function ProductSummary(props) {
  const classes = useStyles();
  const { duration, location, groupSize, annualLeave, accomodation, meetingPoint, fitnessLevel, activities } = props;

  const icon = <img src={mountain} alt="logo" className={classes.icon} />

  const summaryItems = [
    {title: 'Duration', value: duration, icon: icon},
    {title: 'Location', value: location, icon: icon},
    {title: 'Annual Leave', value: annualLeave, icon: icon},
    {title: 'Accomodation', value: accomodation, icon: icon},
    {title: 'Group Size', value: groupSize, icon: icon},
    {title: 'Meeting Point', value: meetingPoint, icon: icon},
    {title: 'Fitness Level', value: fitnessLevel, icon: icon},
  ]

  return (
    <Box pt={6}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Grid container spacing={3}>
            {summaryItems.map((item, index) => (
              <Grid item xs={6} key={index}>
                <SummaryItem {...item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Typography component="h4" variant="p" className={classes.title}>
            Activities
          </Typography>
          {activities.map((item, index) => (
            <Typography component="p" variant="p" className={classes.activityValue}>
              {item}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Box>
  )
}

ProductSummary.propTypes = {};

export default ProductSummary;


        
        // <Grid item xs={4}>
        //   <Box>
        //     <SummaryItem title='Activities' value={activitiesValue} icon={icon}/>
        //   </Box>
        // </Grid>