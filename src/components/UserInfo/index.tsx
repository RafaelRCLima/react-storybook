import React from 'react';

import { 

  Container, 
  Profile, 
  Avatar, 
  UserData, 
  Icons, 
  MicIcon, 
  HeadphoneIcon, 
  SettingsIcon 
  
} from './styles'

export const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Usuario Utilizando</strong>
          <span>#1234</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>

    </Container>
  )
}
