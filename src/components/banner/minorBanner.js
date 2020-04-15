import React from 'react'
import PropTypes from 'prop-types'

const MinorBanner = ({
  body, leftPhoto, rightPhoto, subtitle, title 
}) => (
  <div className = "minor-banner">
    {
    leftPhoto && <img alt="Brown Boots" className="order-sm-0 order-md-0" src={leftPhoto} />
    }
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <p>{body}</p>
    {
    rightPhoto && <img alt="Grey Boots" className="order-sm-1 order-md-2" src={rightPhoto} />
    }
  </div>
)

MinorBanner.PropTypes = {
  body: PropTypes.string,
  leftPhoto: PropTypes.string,
  rightPhoto: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string
}

MinorBanner.defaultProps = {
  body: null,
  leftPhoto: null,
  rightPhoto: null,
  subtitle: null,
  title: null
}

export default MinorBanner