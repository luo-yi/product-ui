import React from 'react'
import PropTypes from 'prop-types'
import { ProductPageTemplate } from '../../templates/product-page'

const ProductPagePreview = ({ entry, getAsset }) => {
  // const entryTitle = ;
  // const title = entryTitle ? entryTitle.toJS() : "";

  // const entrySubtitle = entry.getIn(['data', 'subtitle']);
  // const subtitle = entrySubtitle ? entryTestimonials.toJS() : "";

  // const entryHeroImage = entry.getIn(['data', 'heroImage']);
  // const heroImage = entryHeroImage ? entryHeroImage.toJS() : "";

  const props = {
    title: entry.getIn(['data', 'title']),
    subtitle: entry.getIn(['data', 'subtitle']),
    heroImage: entry.getIn(['data', 'heroImage']),    
  };

  return <ProductPageTemplate {...props} />
  // return (
  //   <ProductPageTemplate
  //     image={getAsset(entry.getIn(['data', 'image']))}
  //     title={entry.getIn(['data', 'title'])}
  //     heading={entry.getIn(['data', 'heading'])}
  //     description={entry.getIn(['data', 'description'])}
  //     intro={{ blurbs }}
  //     main={{
  //       heading: entry.getIn(['data', 'main', 'heading']),
  //       description: entry.getIn(['data', 'main', 'description']),
  //       image1: {
  //         image: getAsset(entry.getIn(['data', 'main', 'image1', 'image'])),
  //         alt: entry.getIn(['data', 'main', 'image1', 'alt']),
  //       },
  //       image2: {
  //         image: getAsset(entry.getIn(['data', 'main', 'image2', 'image'])),
  //         alt: entry.getIn(['data', 'main', 'image2', 'alt']),
  //       },
  //       image3: {
  //         image: getAsset(entry.getIn(['data', 'main', 'image3', 'image'])),
  //         alt: entry.getIn(['data', 'main', 'image3', 'alt']),
  //       },
  //     }}
  //     fullImage={entry.getIn(['data', 'full_image'])}
  //     testimonials={testimonials}
  //     pricing={{
  //       heading: entry.getIn(['data', 'pricing', 'heading']),
  //       description: entry.getIn(['data', 'pricing', 'description']),
  //       plans: pricingPlans,
  //     }}
  //   />
  // )
}

// ProductPagePreview.propTypes = {
//   entry: PropTypes.shape({
//     getIn: PropTypes.func,
//   }),
//   getAsset: PropTypes.func,
// }

export default ProductPagePreview
