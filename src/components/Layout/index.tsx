import React from 'react';

import { Grid } from './styles'

import { ServerName } from '../ServerName'
import { ServerList } from '../ServerList'

export const Layout: React.FC = () => {
  return <Grid>
    <ServerList />
    <ServerName />
  </Grid>
}
