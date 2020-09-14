import React from 'react';

import { Grid } from './styles'

import { ServerName } from '../ServerName'
import { ServerList } from '../ServerList'
import { ChannelInfo} from '../ChannelInfo'

export const Layout: React.FC = () => {
  return <Grid>
    <ServerList />
    <ServerName />
    <ChannelInfo />
  </Grid>
}
