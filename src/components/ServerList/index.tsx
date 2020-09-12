import React from 'react'

import { ServerButton } from '../ServerButton'
import { Container, Separator } from './styles'

export const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome/>

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications/>
      <ServerButton mentions={12}/>
      <ServerButton />
      <ServerButton hasNotifications/>
      <ServerButton />
      <ServerButton mentions={4}/>
      <ServerButton />
      <ServerButton />
      <ServerButton />
      
    </Container>
  )
}