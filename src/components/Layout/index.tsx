import React from 'react';

import { Grid } from './styles'

import { ServerList } from '../ServerList'

export const Layout: React.FC = () => {
  return <Grid>
    <ServerList />
  </Grid>
}
