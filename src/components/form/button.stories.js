import React from 'react'
import {storiesOf} from '@storybook/react'
import CallToAction from './cta-button'
import {action} from '@storybook/addon-actions'

storiesOf("Button", module)
.add("Call to Action", () => (
  <CallToAction label="submit" onClick={action("button-click")}/>
))
