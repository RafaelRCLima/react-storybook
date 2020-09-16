import React from 'react'

import { ChannelList } from '../components/ChannelList'

import GlobalStyles from '../styles/GlobalStyles'

export default {
  title: 'ChannelList',
  component: ChannelList
}

export const ChannelListV1 = () => (
  <>
    <ChannelList />
    <GlobalStyles />
  </>
)