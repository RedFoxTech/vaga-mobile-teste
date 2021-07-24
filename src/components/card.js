import React from 'react'
import {
  ImageBackground 
} from 'react-native'
import styled from 'styled-components/native'

import pokeball from '../assets/img/pokeball.jpg'

const ContentCard = styled.View`
  width: 100%;
  height: 200px
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid rgba(0,0,0,0);
`
const LegendArea = styled.View`
  z-index: 999;
  height: 50px;
  width: 100%;
  background-color: rgba(0,0,0,.5);
  position: absolute;
  bottom: 0;
  justify-content: center;
  padding: 8px;
`
const LegendText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px
`
const LegendTextSub = styled.Text`
  color: #fff;
  font-size: 12px
`
const Card = ({cover, title, id}) => (
  <ContentCard>
    <ImageBackground 
      source={pokeball}
      resizeMode='cover'
      style={{ height: '100%', width: '100%', zIndex: -10}}
    >
        <ImageBackground 
        source={{uri: cover}}
        resizeMode='contain'
        style={{ height: '100%', width: '100%' }}
      />
    </ImageBackground>
    <LegendArea>
      <LegendText>{title}</LegendText>
      <LegendTextSub>Pokédex cod. {id}</LegendTextSub>
    </LegendArea>
  </ContentCard>
)

export default Card