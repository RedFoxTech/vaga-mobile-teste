import styled from 'styled-components/native'
 
export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`

export const Divider = styled.View`
  width: ${props => `${props.width}px` || '90%'};
  height: 2px;
  background-color: #e3e3e3;
  align-self: center;
  margin: 16px 16px;
`

export const Chip = styled.View`
  height: 30px;
  padding: 0px 16px;
  background-color: ${props => props.color || '#c3c3c3'};
  border-radius: 16px;
  margin: 0px 8px 0px 0px;
  justify-content: center;
  align-items: center;
`

export const ChipText = styled.Text`
  font-size: 16px;
  color: ${props => props.color || '#000'};
  border: 1px solid rgba(0,0,0,0);
`