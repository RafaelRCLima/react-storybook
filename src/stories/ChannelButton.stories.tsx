import React from 'react'

import { ChannelButton } from '../components/ChannelButton'

import GlobalStyles from '../styles/GlobalStyles'

export default {
  title: 'ChannelButton',
  component: ChannelButton
}

export const ChannelButtonV1 = () => (
  <>
    <ChannelButton channelName="Channel"/>
    <GlobalStyles />
  </>
)