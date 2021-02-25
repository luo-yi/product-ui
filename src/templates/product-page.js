import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import LayoutWrapper from '../components/layout/LayoutWrapper';
import ProductHero from '../components/product/ProductHero';
import ProductNav from '../components/product/ProductNav';
import ProductSummary from '../components/product/ProductSummary';
import ProductSidebar from '../components/product/ProductSidebar';
import { maxWidthStyles, contentWidth, sidebarWidth } from '../constants/dimensions.js';

const useStyles = makeStyles({
  root: {
    width: '100%',
    background: 'green'
  },
  content: {
    width: contentWidth,
    float: 'left',
  },
  sidebar: {
    width: sidebarWidth,
    float: 'right',
  },
  maxWidth: maxWidthStyles,
});

// ------------------------------- Template -------------------------------- //
// ------------------------------------------------------------------------- //
export const ProductPageTemplate = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CssBaseline />

      {/* Hero */}
      <ProductHero {...props} />
      <ProductNav />

      <Box className={classes.maxWidth}>
        {/* Body */}
        <Box className={classes.content}>
          <ProductSummary activities={props.activities} {...props.summary} />
        </Box>

        {/* Sidebar */}
        <Box className={classes.sidebar}>
         <ProductSidebar />
        </Box>
      </Box>
    </Box>
  )
}

ProductPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  heroImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  summary: PropTypes.shape({
    duration: PropTypes.string,
    location: PropTypes.string,
    groupSize: PropTypes.string,
    annualLeave: PropTypes.string,
    accomodation: PropTypes.string,
    meetingPoint: PropTypes.string,
    fitnessLevel: PropTypes.string,
  }),
}


// --------------------------------- Page ---------------------------------- //
// ------------------------------------------------------------------------- //
const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <LayoutWrapper>
      <ProductPageTemplate {...frontmatter} />
      <Box pt={100} />
    </LayoutWrapper>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage


// --------------------------------- Query --------------------------------- //
// ------------------------------------------------------------------------- //
export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        activities
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        summary {
          duration
          location
          groupSize
          annualLeave
          accomodation
          meetingPoint
          fitnessLevel   
        }
      }
    }
  }
`
