import React from 'react';

import { Grid } from './styles'

import { ServerName } from '../ServerName'
import { ServerList } from '../ServerList'
import { ChannelInfo} from '../ChannelInfo'
import { ChannelList } from '../ChannelList'

export const Layout: React.FC = () => {
  return <Grid>

    <ServerList />
    <ServerName />
    <ChannelInfo />
    <ChannelList />
  
  </Grid>
}
