import React from 'react'

import { ServerList } from '../components/ServerList'

import GlobalStyles from '../styles/GlobalStyles'

export default {
  title: 'ServerList',
  component: ServerList
}

export const ServerListV1 = () => (
  <>
    <ServerList />
    <GlobalStyles />
  </>
)