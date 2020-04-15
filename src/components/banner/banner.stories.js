import React from 'react'
import { storiesOf } from '@storybook/react'
import MajorBanner from './majorBanner'
import MinorBanner from './minorBanner'

storiesOf('Components | Banners/Major', module)
  .add('With Only Title', () => (
    <MajorBanner title="Banner Title" photo="People Outdoors/shutterstock_116403520.jpg" />
  ))
  .add('With All Text Options', () => (
    <MajorBanner
      body = "Banner Body"
      photo= "People Outdoors/shutterstock_116403520.jpg"
      title = "Banner Title"
      subtitle= "Banner Subtitle"
    />
  ))

storiesOf('Components | Banners/Minor', module)
  .add('No Pictures', () => (
    <MinorBanner title= "Banner Title" subtitle="Banner Subtitle" body="Banner Body" />
  ))
  .add('With Pictures', () => (
    <MinorBanner
      body="Banner Body"
      subtitle="Banner Subtitle"
      title="Banner Title"
    />
  ))