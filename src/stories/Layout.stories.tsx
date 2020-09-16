import React from 'react'
import GlobalStyles from '../styles/GlobalStyles'

import { Layout } from '../components/Layout'

export default {
  title: 'Layout',
  component: Layout
}

export const LayoutV1 = () => (
  <>
    <Layout />
    <GlobalStyles />
  </>
)