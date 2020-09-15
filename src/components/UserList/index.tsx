import React from 'react';

import { Container, User, Avatar, Role } from './styles'

export interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({
  nickname,
  isBot
}) => {
  return (
    <User>
      <Avatar className={ isBot ? 'bot' : '' }/>

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}

export const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Usuario Utilizando" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Simple Reploid" isBot />
      <UserRow nickname="Teste" />
      <UserRow nickname="Teste" />
      <UserRow nickname="Teste" />
      <UserRow nickname="Teste" />
      <UserRow nickname="Teste" />
      <UserRow nickname="Teste" />
      <UserRow nickname="Teste" />
      <UserRow nickname="Teste" />
      <UserRow nickname="Teste" />
      <UserRow nickname="Teste" />
      <UserRow nickname="Teste" />
      <UserRow nickname="Teste" />
      <UserRow nickname="Teste" />
      <UserRow nickname="Teste" />
      <UserRow nickname="Teste" />
      <UserRow nickname="Teste" />
      
    </Container>
  )
}
