import styled from 'styled-components/native';
import fonts from '../../global/styles/fonts';
import colors from '../../global/styles/colors';

export const Container = styled.View`
  flex: 1;
  background: ${colors.primary};
`;

export const EmptyView = styled.View`
  flex: 1;
  background: #fff;
  border-width: 1px;
  border-color: #e6e6f0;
  border-radius: 8px;
  margin: -40px 16px 16px 16px;
  overflow: hidden;
  padding: 16px;
`;

export const EmptyText = styled.Text`
  font-family: ${fonts.Medium};
  font-size: 16px;
  color: ${colors.primaryVariant};
  text-align: center;
`;
