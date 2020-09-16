import React from 'react'

import { ChannelMessage } from '../components/ChannelMessage'

import GlobalStyles from '../styles/GlobalStyles'

export default {
  title: 'ChannelMessage',
  component: ChannelMessage
}

export const ChannelMessageV1 = () => (
  <>
    <ChannelMessage />
    <GlobalStyles />
  </>
)