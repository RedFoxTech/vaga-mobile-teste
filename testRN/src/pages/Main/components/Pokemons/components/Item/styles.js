import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;

import Icon from 'react-native-vector-icons/AntDesign';

export const ContainerItem = styled.View`
  width: ${width * 0.9};

  margin-bottom: 10px;
  display: flex;
  align-items: center;
  align-self: center;

  /* */
  background-color: ${(props) =>
    props.background && props.background == 'red'
      ? '#D42B30'
      : props.background == 'green'
      ? '#269D77'
      : props.background == 'blue'
      ? '#1E61A5'
      : props.background == 'brown'
      ? '#99633D'
      : props.background == 'purple'
      ? '#711970'
      : props.background == 'yellow'
      ? '#D2B356'
      : props.background == 'gray'
      ? '#87898C'
      : props.background == 'pink'
      ? '#DDB1B0'
      : props.background == 'white'
      ? '#f3f3f3'
      : props.background == 'black'
      ? '#323030'
      : '#D42B30'};
  /* background-color: white; */
  /* background-color: #3C3838; */

  border-radius: 8px;
`;

export const ContainerRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 5px;
  margin-top: -5px;
`;
export const ContainerEvolution = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: red;
  justify-content: flex-end;
  margin-right: 10px;
  margin-top: -5px;
`;

export const ButtonPokelis = styled(RectButton)`
  width: 100%;
  padding-top: ${width * 0.05};
  padding-bottom: ${width * 0.02};
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 1;
`;

export const NamePokemon = styled.Text`
  font-size: 28px;
  text-transform: capitalize;
  color: ${(props) =>
    props.background && props.background == 'red'
      ? '#f3f3f3'
      : props.background == 'green'
      ? '#f3f3f3'
      : props.background == 'blue'
      ? '#f3f3f3'
      : props.background == 'brown'
      ? '#f3f3f3'
      : props.background == 'purple'
      ? '#f3f3f3'
      : props.background == 'yellow'
      ? '#f3f3f3'
      : props.background == 'gray'
      ? '#f3f3f3'
      : props.background == 'pink'
      ? '#f3f3f3'
      : props.background == 'white'
      ? '#87898C'
      : props.background == 'black'
      ? '#f3f3f3'
      : '#D42B30'};
  font-weight: bold;
`;

export const Habitat = styled.Text`
  color: ${(props) =>
    props.background && props.background == 'red'
      ? '#EFBBBD'
      : props.background == 'green'
      ? '#BFE7DA'
      : props.background == 'blue'
      ? '#DEEDFC'
      : props.background == 'brown'
      ? '#F3CBAE'
      : props.background == 'purple'
      ? '#FFE4FF'
      : props.background == 'yellow'
      ? '#FFF8E4'
      : props.background == 'gray'
      ? '#D9D9D9'
      : props.background == 'pink'
      ? '#FFEFEF'
      : props.background == 'white'
      ? '#BEBEBE'
      : props.background == 'black'
      ? '#D6D6D6'
      : '#D42B30'};
  font-size: 11px;
  font-style: italic;
  margin-top: -6px;
`;

export const Bolder = styled.Text`
  font-size: 11px;

  text-transform: capitalize;
  font-weight: bold;
  color: ${(props) =>
    props.background && props.background == 'red'
      ? '#EFBBBD'
      : props.background == 'green'
      ? '#BFE7DA'
      : props.background == 'blue'
      ? '#DEEDFC'
      : props.background == 'brown'
      ? '#F3CBAE'
      : props.background == 'purple'
      ? '#FFE4FF'
      : props.background == 'yellow'
      ? '#FFF8E4'
      : props.background == 'gray'
      ? '#D9D9D9'
      : props.background == 'pink'
      ? '#FFEFEF'
      : props.background == 'white'
      ? '#BEBEBE'
      : props.background == 'black'
      ? '#D6D6D6'
      : '#D42B30'};
`;

export const IdPokmenon = styled.Text`
  font-size: 12px;
  font-weight: bold;

  margin-bottom: -6px;

  color: ${(props) =>
    props.background && props.background == 'red'
      ? '#E7E7E7'
      : props.background == 'green'
      ? '#E7E7E7'
      : props.background == 'blue'
      ? '#E7E7E7'
      : props.background == 'brown'
      ? '#E7E7E7'
      : props.background == 'purple'
      ? '#E7E7E7'
      : props.background == 'yellow'
      ? '#E7E7E7'
      : props.background == 'gray'
      ? '#E7E7E7'
      : props.background == 'pink'
      ? '#E7E7E7'
      : props.background == 'white'
      ? '#87898C'
      : props.background == 'black'
      ? '#E7E7E7'
      : '#D42B30'};
`;
export const IdPokmenonModal = styled.Text`
  font-size: 12px;
  font-weight: bold;

  margin-bottom: -6px;

  color: ${(props) =>
    props.background && props.background == 'red'
      ? '#E7E7E7'
      : props.background == 'green'
      ? '#E7E7E7'
      : props.background == 'blue'
      ? '#E7E7E7'
      : props.background == 'brown'
      ? '#E7E7E7'
      : props.background == 'purple'
      ? '#E7E7E7'
      : props.background == 'yellow'
      ? '#E7E7E7'
      : props.background == 'gray'
      ? '#E7E7E7'
      : props.background == 'pink'
      ? '#E7E7E7'
      : props.background == 'white'
      ? '#87898C'
      : props.background == 'black'
      ? '#E7E7E7'
      : '#D42B30'};
`;

export const ContainerColumn = styled.View`
  display: flex;
`;

export const Img = styled.Image`
  width: 130px;
  height: 130px;

  margin-top: -20px;

  z-index: 10;
`;
export const ContainerInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: space-between;
`;
export const InfoRight = styled.View`
  align-items: flex-end;
`;
export const BolderW = styled.Text`
  font-weight: bold;

  color: ${(props) =>
    props.background && props.background == 'red'
      ? '#EFBBBD'
      : props.background == 'green'
      ? '#BFE7DA'
      : props.background == 'blue'
      ? '#DEEDFC'
      : props.background == 'brown'
      ? '#F3CBAE'
      : props.background == 'purple'
      ? '#FFE4FF'
      : props.background == 'yellow'
      ? '#FFF8E4'
      : props.background == 'gray'
      ? '#D9D9D9'
      : props.background == 'pink'
      ? '#FFEFEF'
      : props.background == 'white'
      ? '#BEBEBE'
      : props.background == 'black'
      ? '#D6D6D6'
      : '#D42B30'};
`;
export const TextContainer = styled.View`
  /* background-color: rgba(225, 225, 225, 0.7);
  height: 20px;
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  display: flex;
  border: 0.5px solid rgba(225, 225, 225, 0.7);
  border-radius: 6px; */
`;

export const Footer = styled.View``;
export const NamePokemonC = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Experience = styled.Text`
  font-size: 17px;
  text-transform: uppercase;
  color: #3c3838;
  font-weight: bold;
`;

export const TextContainert = styled.View`
  background-color: ${(props) =>
    props.background && props.background == 'red'
      ? '#C11B20'
      : props.background == 'green'
      ? '#24926F'
      : props.background == 'blue'
      ? '#1B5692'
      : props.background == 'brown'
      ? '#875634'
      : props.background == 'purple'
      ? '#611560'
      : props.background == 'yellow'
      ? '#BBA04E'
      : props.background == 'gray'
      ? '#76787A'
      : props.background == 'pink'
      ? '#CFA1A0'
      : props.background == 'white'
      ? '#E7E7E7'
      : props.background == 'black'
      ? '#3E3C3C'
      : '#D42B30'};
  height: 20px;
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 3px;
  display: flex;
  border-radius: 6px;
  margin-left: 5px;
`;

export const TypePokemon = styled.Text`
  margin-top: -3px;
  font-size: 12px;
  color: ${(props) =>
    props.background && props.background == 'red'
      ? '#FFA4A6'
      : props.background == 'green'
      ? '#7FE0C1'
      : props.background == 'blue'
      ? '#79A4CF'
      : props.background == 'brown'
      ? '#EAB087'
      : props.background == 'purple'
      ? '#FCB0FB'
      : props.background == 'yellow'
      ? '#F5E5B4'
      : props.background == 'gray'
      ? '#B4B5B6'
      : props.background == 'pink'
      ? '#F3CECD'
      : props.background == 'white'
      ? '#C5C5C5'
      : props.background == 'black'
      ? '#7B7D80'
      : '#D42B30'};
`;

export const TextContainertModal = styled.View`
  background-color: ${(props) =>
    props.background && props.background == 'red'
      ? '#C11B20'
      : props.background == 'green'
      ? '#24926F'
      : props.background == 'blue'
      ? '#1B5692'
      : props.background == 'brown'
      ? '#875634'
      : props.background == 'purple'
      ? '#611560'
      : props.background == 'yellow'
      ? '#BBA04E'
      : props.background == 'gray'
      ? '#76787A'
      : props.background == 'pink'
      ? '#CFA1A0'
      : props.background == 'white'
      ? '#E7E7E7'
      : props.background == 'black'
      ? '#3E3C3C'
      : '#D42B30'};
  height: 20px;
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 3px;
  display: flex;
  border-radius: 6px;
  margin-left: 5px;
`;

export const TypePokemonModal = styled.Text`
  margin-top: -3px;
  font-size: 12px;
  color: ${(props) =>
    props.background && props.background == 'red'
      ? '#FFA4A6'
      : props.background == 'green'
      ? '#7FE0C1'
      : props.background == 'blue'
      ? '#79A4CF'
      : props.background == 'brown'
      ? '#EAB087'
      : props.background == 'purple'
      ? '#FCB0FB'
      : props.background == 'yellow'
      ? '#F5E5B4'
      : props.background == 'gray'
      ? '#B4B5B6'
      : props.background == 'pink'
      ? '#F3CECD'
      : props.background == 'white'
      ? '#C5C5C5'
      : props.background == 'black'
      ? '#7B7D80'
      : '#D42B30'};
`;

export const ModalFilter = styled.Modal``;

export const ContainerOption = styled.View`
  background-color: ${(props) =>
    props.background && props.background == 'red'
      ? '#D42B30'
      : props.background == 'green'
      ? '#269D77'
      : props.background == 'blue'
      ? '#1E61A5'
      : props.background == 'brown'
      ? '#99633D'
      : props.background == 'purple'
      ? '#711970'
      : props.background == 'yellow'
      ? '#D2B356'
      : props.background == 'gray'
      ? '#87898C'
      : props.background == 'pink'
      ? '#DDB1B0'
      : props.background == 'white'
      ? '#f3f3f3'
      : props.background == 'black'
      ? '#323030'
      : '#D42B30'};
  width: ${width * 0.95};
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 150px;
  margin-bottom: 20px;

  border-radius: 10px;
`;

export const IConLevel = styled(Icon)`
  color: ${(props) =>
    props.background && props.background == 'red'
      ? '#EFBBBD'
      : props.background == 'green'
      ? '#BFE7DA'
      : props.background == 'blue'
      ? '#DEEDFC'
      : props.background == 'brown'
      ? '#F3CBAE'
      : props.background == 'purple'
      ? '#FFE4FF'
      : props.background == 'yellow'
      ? '#FFF8E4'
      : props.background == 'gray'
      ? '#D9D9D9'
      : props.background == 'pink'
      ? '#FFEFEF'
      : props.background == 'white'
      ? '#BEBEBE'
      : props.background == 'black'
      ? '#D6D6D6'
      : '#D42B30'};
  font-size: 15px;
  margin-top: 4px;
`;

export const PokemonModal = styled.View`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ImgModal = styled.Image`
  margin-top: -70px;
  width: ${width * 0.5};
  height: ${width * 0.5};
`;

export const NamePokemonFlex = styled.View`
  width: 100%;
  padding-left: 12px;
  padding-right: 12px;
`;

export const NamePokemonM = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  margin-bottom: 2px;
`;

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;

  color: ${(props) =>
    props.background && props.background == 'red'
      ? '#D42B30'
      : props.background == 'green'
      ? '#269D77'
      : props.background == 'blue'
      ? '#1E61A5'
      : props.background == 'brown'
      ? '#99633D'
      : props.background == 'purple'
      ? '#711970'
      : props.background == 'yellow'
      ? '#D2B356'
      : props.background == 'gray'
      ? '#87898C'
      : props.background == 'pink'
      ? '#DDB1B0'
      : props.background == 'white'
      ? '#E7E7E7'
      : props.background == 'black'
      ? '#323030'
      : '#D42B30'};
`;
export const TextButtonWhite = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;

  color: #3c3838;
`;

export const Title = styled.Text`
  align-self: flex-start;
  margin-bottom: 10px;
  font-size: 15px;
  color: #f3f3f3;
`;
export const TypeModal = styled.TouchableOpacity`
  width: 100%;
  height: ${width * 0.15};

  background-color: ${(props) =>
    props.background && props.background == 'red'
      ? '#ffff'
      : props.background == 'green'
      ? '#ffff'
      : props.background == 'blue'
      ? '#ffff'
      : props.background == 'brown'
      ? '#ffff'
      : props.background == 'purple'
      ? '#ffff'
      : props.background == 'yellow'
      ? '#ffff'
      : props.background == 'gray'
      ? '#ffff'
      : props.background == 'pink'
      ? '#ffff'
      : props.background == 'white'
      ? '#874CE9'
      : props.background == 'black'
      ? '#f3f3f3'
      : '#874CE9'};

  border-bottom-left-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 10px;
`;

export const StatsContainer = styled.View`
  margin-top: 2px;
`;

export const StatsHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-right: 15px;
`;

export const LabelStats = styled.Text`
  color: ${(props) =>
    props.background && props.background == 'red'
      ? '#EFBBBD'
      : props.background == 'green'
      ? '#BFE7DA'
      : props.background == 'blue'
      ? '#DEEDFC'
      : props.background == 'brown'
      ? '#F3CBAE'
      : props.background == 'purple'
      ? '#FFE4FF'
      : props.background == 'yellow'
      ? '#FFF8E4'
      : props.background == 'gray'
      ? '#D9D9D9'
      : props.background == 'pink'
      ? '#FFEFEF'
      : props.background == 'white'
      ? '#BEBEBE'
      : props.background == 'black'
      ? '#D6D6D6'
      : '#D42B30'};
`;

export const Stats = styled.Text`
  color: ${(props) =>
    props.background && props.background == 'red'
      ? '#EFBBBD'
      : props.background == 'green'
      ? '#BFE7DA'
      : props.background == 'blue'
      ? '#DEEDFC'
      : props.background == 'brown'
      ? '#F3CBAE'
      : props.background == 'purple'
      ? '#FFE4FF'
      : props.background == 'yellow'
      ? '#FFF8E4'
      : props.background == 'gray'
      ? '#D9D9D9'
      : props.background == 'pink'
      ? '#FFEFEF'
      : props.background == 'white'
      ? '#BEBEBE'
      : props.background == 'black'
      ? '#D6D6D6'
      : '#D42B30'};
  font-weight: bold;
`;

export const BarStats = styled.View`
  height: 10px;
  width: 100%;

  background-color: #cbc8c8;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding-left: 2px;
  padding-right: 2px;

  margin-top: 2px;

  border-radius: 20px;
`;
export const BarStatsInner = styled.View`
  height: 6px;
  width: ${(props) => (props.stats ? (props.stats * 100) / 100 : 0)}%;
  border-radius: 20px;

  background-color: ${(props) =>
    props.background && props.background == 'red'
      ? '#D42B30'
      : props.background == 'green'
      ? '#269D77'
      : props.background == 'blue'
      ? '#1E61A5'
      : props.background == 'brown'
      ? '#99633D'
      : props.background == 'purple'
      ? '#711970'
      : props.background == 'yellow'
      ? '#D2B356'
      : props.background == 'gray'
      ? '#87898C'
      : props.background == 'pink'
      ? '#DDB1B0'
      : props.background == 'white'
      ? '#f3f3f3'
      : props.background == 'black'
      ? '#323030'
      : '#D42B30'};

  opacity: 0.6;
`;

export const Evolution = styled.Text`
  font-weight: bold;
  margin-top: 12px;

  font-size: 24px;

  display: flex;

  color: ${(props) =>
    props.background && props.background == 'red'
      ? '#EFBBBD'
      : props.background == 'green'
      ? '#BFE7DA'
      : props.background == 'blue'
      ? '#DEEDFC'
      : props.background == 'brown'
      ? '#F3CBAE'
      : props.background == 'purple'
      ? '#FFE4FF'
      : props.background == 'yellow'
      ? '#FFF8E4'
      : props.background == 'gray'
      ? '#D9D9D9'
      : props.background == 'pink'
      ? '#FFEFEF'
      : props.background == 'white'
      ? '#BEBEBE'
      : props.background == 'black'
      ? '#D6D6D6'
      : '#D42B30'};
`;
export const EvolutionContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-around;
`;
export const EvolutionInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InfoEvolution = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Lvel = styled.View`
  align-items: center;
  justify-content: center;
  margin-right: 2px;
`;
export const EvolutionID = styled.Text`
  color: ${(props) =>
    props.background && props.background == 'red'
      ? '#EFBBBD'
      : props.background == 'green'
      ? '#BFE7DA'
      : props.background == 'blue'
      ? '#DEEDFC'
      : props.background == 'brown'
      ? '#F3CBAE'
      : props.background == 'purple'
      ? '#FFE4FF'
      : props.background == 'yellow'
      ? '#FFF8E4'
      : props.background == 'gray'
      ? '#D9D9D9'
      : props.background == 'pink'
      ? '#FFEFEF'
      : props.background == 'white'
      ? '#BEBEBE'
      : props.background == 'black'
      ? '#D6D6D6'
      : '#D42B30'};
  font-size: 10px;
`;
export const EvolutionLvel = styled.Text`
  color: ${(props) =>
    props.background && props.background == 'red'
      ? '#EFBBBD'
      : props.background == 'green'
      ? '#BFE7DA'
      : props.background == 'blue'
      ? '#DEEDFC'
      : props.background == 'brown'
      ? '#F3CBAE'
      : props.background == 'purple'
      ? '#FFE4FF'
      : props.background == 'yellow'
      ? '#FFF8E4'
      : props.background == 'gray'
      ? '#D9D9D9'
      : props.background == 'pink'
      ? '#FFEFEF'
      : props.background == 'white'
      ? '#BEBEBE'
      : props.background == 'black'
      ? '#D6D6D6'
      : '#D42B30'};
  font-weight: bold;
  font-size: 15px;
`;

export const EvolutionName = styled.Text`
  color: ${(props) =>
    props.background && props.background == 'red'
      ? '#EFBBBD'
      : props.background == 'green'
      ? '#BFE7DA'
      : props.background == 'blue'
      ? '#DEEDFC'
      : props.background == 'brown'
      ? '#F3CBAE'
      : props.background == 'purple'
      ? '#FFE4FF'
      : props.background == 'yellow'
      ? '#FFF8E4'
      : props.background == 'gray'
      ? '#D9D9D9'
      : props.background == 'pink'
      ? '#FFEFEF'
      : props.background == 'white'
      ? '#BEBEBE'
      : props.background == 'black'
      ? '#D6D6D6'
      : '#D42B30'};
  font-weight: bold;
`;

export const ContainerImage = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const FiChevronsRight = styled.Text``;

export const EImage = styled.Image`
  width: 90px;
  height: 90px;
`;
export const EvolutionImage = styled.Image`
  width: 50px;
  height: 50px;
`;
