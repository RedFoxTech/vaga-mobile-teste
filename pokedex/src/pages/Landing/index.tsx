import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import { Container } from './styles';

const Landing: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigatetoDashboard = useCallback(() => {
    navigate('Dashboard');
  }, [navigate]);

  return (
    <Container>
      <Button title="AVANÇAR" onPress={handleNavigatetoDashboard} />
    </Container>
  );
};

export default Landing;
