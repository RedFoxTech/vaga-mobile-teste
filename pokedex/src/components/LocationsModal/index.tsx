import React, { useCallback } from 'react';
import { Modal, ModalBaseProps } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { PokemonDetailedProps } from 'src/pages/Details';
import colors from '../../global/styles/colors';

import {
  Container,
  Content,
  ExitButton,
  Avatar,
  Name,
  Divider,
  LocationsLabel,
  Location,
  EmptyText,
} from './styles';

interface LocationsModalProps extends ModalBaseProps {
  pokemon: PokemonDetailedProps;
  locations: Array<string>;
  closeModal(): void;
}

const LocationsModal: React.FC<LocationsModalProps> = ({
  pokemon,
  locations,
  closeModal,
  ...rest
}) => {
  const handleExit = useCallback(() => {
    closeModal();
  }, [closeModal]);

  return (
    <Modal transparent animationType="fade" {...rest}>
      <Container>
        <Content>
          <ExitButton onPress={handleExit}>
            <MaterialIcon name="clear" size={32} color={colors.title} />
          </ExitButton>

          {pokemon.avatar && (
            <Avatar
              source={{
                uri: pokemon.avatar,
              }}
            />
          )}

          <Name>{pokemon.name}</Name>

          <Divider />

          <LocationsLabel>Locais onde pode ser encontrado:</LocationsLabel>
          {(locations.length > 0 &&
            locations.map((location) => (
              <Location key={location}>{location}</Location>
            ))) || (
            <EmptyText>
              Oops... Nenhuma localização específica conhecida.
            </EmptyText>
          )}
        </Content>
      </Container>
    </Modal>
  );
};

export default LocationsModal;
