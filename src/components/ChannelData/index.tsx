import React, { useRef, useEffect} from 'react';

import { ChannelMessage, Mention } from '../ChannelMessage'

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

export const ChannelData: React.FC = () => {

  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current

    if (div) {
      div.scrollTop = div.scrollHeight
    }
  }, [messagesRef])

  return (
    <Container>

      <Messages ref={messagesRef}>
      {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Usuario Utilizando"
            date="15/11/2020"
            content="Existe um padrão, não sei qual é, mas existe!"
          />
        ))}

        <ChannelMessage 
          author="Simple Reploid"
          date="15/11/2020"
          content={
            <>
              <Mention>@Usuario Utilizando</Mention> até agora o único padrão que vi foi a repetição das suas mensagens"
            </>
        }
        hasMention
        isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>

    </Container>
  )
}
