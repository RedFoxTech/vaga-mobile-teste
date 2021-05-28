/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  AbilityContainer,
  AbilityName,
  AbilityText,
  Container,
  PokeballView,
} from './styles';

import Pokeball from '../../assets/pokeballP.svg';

interface PorpsAbilities {
  abilities: Array<PropsAbility>;
  background: string;
}

interface PropsAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: string;
  slot: number;
}

const Abilities: React.FC<PorpsAbilities> = ({abilities, background}) => {
  return (
    <Container>
      {abilities &&
        abilities.map((ability, index) => (
          <AbilityContainer
            key={index}
            style={{
              backgroundColor: background,
              shadowColor: '#7e797d',
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,
              elevation: 8,
            }}>
            {ability && <AbilityName>Name: {ability.ability.name}</AbilityName>}
            <AbilityText>
              {ability.is_hidden ? 'Hidden' : 'No Hidden'}
            </AbilityText>
            <AbilityText>Slot: {ability.slot}</AbilityText>
            <PokeballView>
              <Pokeball />
            </PokeballView>
          </AbilityContainer>
        ))}
    </Container>
  );
};

export default Abilities;
