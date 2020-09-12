import React from 'react';

import Logo from '../../assets/Logo.svg';

import { Button } from './styles';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

export const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {
        isHome && <
          img src={
            'https://vignette.wikia.nocookie.net/streetfighter/images/b/b4/Kenrender.png/revision/latest?cb=20170728171332'
          } 
          alt="Rocketseat" 
        />
      }
    </Button>
  );
};
