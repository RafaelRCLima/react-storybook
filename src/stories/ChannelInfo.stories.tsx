import React from 'react'

import { ChannelInfo } from '../components/ChannelInfo'

import GlobalStyles from '../styles/GlobalStyles'

export default {
  title: 'ChannelInfo',
  component: ChannelInfo
}

export const ChannelInfoV1 = () => (
  <>
    <ChannelInfo />
    <GlobalStyles />
  </>
)