import React from 'react'
import PropTypes from 'prop-types'

const MajorBanner = ({
  body, photo, subtitle, title
}) => (
  <div className = "major-banner" style = {{backgroundImage:`url("./${photo}")` }}>
    <div className="container-major-banner">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{body}</p>
    </div>
  </div>
)

MajorBanner.PropTypes = {
  body: PropTypes.string,
  photo: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string
}

MajorBanner.defaultProps = {
  body: null,
  photo: null,
  subtitle: null,
  title: null
}

export default MajorBanner