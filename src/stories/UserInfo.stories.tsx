import React from 'react'

import { UserInfo } from '../components/UserInfo'

import GlobalStyles from '../styles/GlobalStyles'

export default {
  title: 'UserInfo',
  component: UserInfo
}

export const UserInfoV1 = () => (
  <>
    <UserInfo />
    <GlobalStyles />
  </>
)