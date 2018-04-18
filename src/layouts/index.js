import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Grid from 'react-bootstrap/lib/Grid'
import Header from '../components/Header'

import '../../static/bootstrap.css'

require('../styles/main.scss')


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
      <Grid fluid={true}>
        {children()}
      </Grid>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
