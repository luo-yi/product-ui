import React from 'react';
import PropTypes from 'prop-types';
import Img from "gatsby-image"
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { maxWidthStyles } from '../../constants/dimensions.js';
import { white, paletteMain } from '../../constants/colors.js';

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '40vw',
  },
  mask: {
    width: '100%',
    background: paletteMain.concat('99'),
    position: 'absolute',
    top: 0,
    height: '40vw',
  },
  maxWidth: maxWidthStyles,
  contentContainer: {
    position: 'relative',
    height: '40vw',
  },
  content: {
    position: 'absolute',
    color: white,
    bottom: 12,
  },
  title: {
    textTransform: 'uppercase',
  },
  subtitle: {
    textTransform: 'uppercase',
    fontStyle: 'italic'
  },
});

function ProductHero(props) {
  const classes = useStyles();
  const { title, subtitle, image } = props;

  return (
    <Card className={classes.root}>
      <Img className={classes.image} fluid={image.childImageSharp.fluid} />

      <Box className={classes.mask}>
        <Box className={classes.maxWidth}>
          <Box className={classes.contentContainer}>

            <Box className={classes.content}>
              <Typography className={classes.title} variant={'h3'} component={'h1'}>
                {title}
              </Typography>

              <Typography className={classes.subtitle} variant={'p'} component={'p'}>
                {subtitle}
              </Typography>
            </Box>

          </Box>
        </Box>
      </Box>
    </Card>
  );
}


ProductHero.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
};

export default ProductHero;