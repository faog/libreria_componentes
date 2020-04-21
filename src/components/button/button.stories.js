import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import CallToAction from './cta-button'


storiesOf('Bulding Blocks | Button', module)
.add('Call to Action', () => (
  <CallToAction label='submit' onClick={action('button-click')}/>
))
