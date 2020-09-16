import React from 'react'

import { UserList } from '../components/UserList'

import GlobalStyles from '../styles/GlobalStyles'

export default {
  title: 'UserList',
  component: UserList
}

export const UserListV1 = () => (
  <>
    <UserList />
    <GlobalStyles />
  </>
)