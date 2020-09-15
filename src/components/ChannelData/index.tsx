import React from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

export const ChannelData: React.FC = () => {
  return (
    <Container>

      <Messages />

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>

    </Container>
  )
}
