import React from 'react'

import { ServerName } from '../components/ServerName'

import GlobalStyles from '../styles/GlobalStyles'

export default {
  title: 'ServerName',
  component: ServerName
}

export const ServerNameV1 = () => (
  <>
    <ServerName />
    <GlobalStyles />
  </>
)