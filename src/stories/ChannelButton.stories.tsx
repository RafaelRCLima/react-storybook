import React from 'react'

import { ChannelButton } from '../components/ChannelButton'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'

import GlobalStyles from '../styles/GlobalStyles'

storiesOf('Channel | Button', module)
  .addDecorator(withInfo)
  .add('Button', () => (
    <>
      <ChannelButton channelName='Channel' />
      <GlobalStyles />
    </>
  ))

// export default {
//   title: 'ChannelButton',
//   component: ChannelButton
// }

// export const ChannelButtonV1 = () => (
//   <>
//     <ChannelButton channelName="Channel"/>
//     <GlobalStyles />
//   </>
// )