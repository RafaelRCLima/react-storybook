import React from 'react'

import { ServerButton } from '../components/ServerButton'

import GlobalStyles from '../styles/GlobalStyles'

export default {
  title: 'ServerButton',
  component: ServerButton
}

export const ServerButtonV1 = () => (
  <>
    <ServerButton />
    <GlobalStyles />
  </>
)