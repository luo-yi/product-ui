import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import Footer from './Footer';

function TemplateWrapper(props) {
  const { children } = props;
  console.log(children);
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <div>{children}</div>
      <Footer />
    </React.Fragment>
  );
}


export default TemplateWrapper;