import React from 'react'

import { ChannelData } from '../components/ChannelData'

import GlobalStyles from '../styles/GlobalStyles'

export default {
  title: 'ChannelData',
  component: ChannelData
}

export const ChannelDataV1 = () => (
  <>
    <ChannelData />
    <GlobalStyles />
  </>
)
