import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

function HeroImage(props) {
  const { classes, title, subtitle, image } = props;

  const imageProps = {
    image: image,
    title: 'Hero Image',
  };

  const titleProps = {
    variant: 'h1',
    component: 'h1',
    className: classes.title,
  };

  const subtitleProps = {
    variant: 'p',
    component: 'p',
    className: classes.subtitle,   
  }

  return (
    <Card className={classes.root}>
      <CardMedia {...imageProps}/>

      <Box className={classes.maxWidth}>
        <Typography {...titleProps}>
          {title}
        </Typography>
        <Typography {...subtitleProps}>
          {subtitle}
        </Typography>
      </Box>
    </Card>
  );
}


HeroImage.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
};

export default HeroImage;