import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const statusBarHeight = getStatusBarHeight();

export const Container = styled.View`
  background: #FA6555;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  width: 100%;
`;

export const Icon = styled.Image`
  height: 20px;
  width: 20px;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 18px;
`;
