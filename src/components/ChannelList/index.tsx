import React from 'react';

import { ChannelButton } from '../ChannelButton'

import { Container, Category, AddCategoryIcon } from './styles'

export const ChannelList: React.FC = () => {
  return (
    <Container>
      
      <Category>

        <span>Canais de texto</span>
        <AddCategoryIcon />
      
      </Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="megaman-x" />
      <ChannelButton channelName="street-fighter-v" />
      <ChannelButton channelName="dragon-ball-fighterz" />
      <ChannelButton channelName="mortal-kombat-11" />
    
    </Container>
  )
}
