import React from 'react';
import { Modal, ActivityIndicator } from 'react-native';

import { Container } from './styles';

interface ILoadingModalProps {
  loading: boolean;
}

const LoadingModal: React.FC<ILoadingModalProps> = ({ loading }) => {
  return (
    <Modal transparent animationType="fade" visible={loading}>
      <Container>
        <ActivityIndicator animating={loading} size="large" color="#FFF" />
      </Container>
    </Modal>
  );
};

export default LoadingModal;
