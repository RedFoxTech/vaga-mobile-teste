import styled from 'styled-components/native';

import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
import Icon from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import {RectButton} from 'react-native-gesture-handler';
import TextInput from 'react-native-material-textinput';

export const Container = styled.SafeAreaView`
  width: ${width * 0.8};
  display: flex;
  align-items: center;
`;
export const Header = styled.View`
  width: ${width * 0.8};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 12px;
`;
export const Pokedex = styled.Text`
  color: ${(props) => (props.color == 'white' ? '#434343' : '#F3F3F3')};
  font-weight: bold;
  font-size: ${width * 0.06};
  width: ${width * 0.3};
`;

export const FilterButton = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  margin-bottom: 20px;

  padding-top: ${width * 0.02};
  padding-left: 5px;
  padding-bottom: ${width * 0.02};

  border-bottom-width: 2px;
  border-bottom-color: ${(props) =>
    props.color && props.color == 'red'
      ? '#C52A2E'
      : props.color == 'green'
      ? '#259370'
      : props.color == 'blue'
      ? '#1E5B9A'
      : props.color == 'brown'
      ? '#8E5C38'
      : props.color == 'purple'
      ? '#641663'
      : props.color == 'yellow'
      ? '#C5A750'
      : props.color == 'gray'
      ? '#7C7E81'
      : props.color == 'pink'
      ? '#CDA4A3'
      : props.color == 'white'
      ? '#E5E5E5'
      : props.color == 'black'
      ? '#3C3939'
      : '#874CE9'};
`;

export const Icons = styled(Icon)`
  color: #04d361;

  font-size: ${width * 0.045};
`;

export const Fil = styled.Text`
  color: ${(props) => (props.color == 'white' ? '#434343' : '#e6e6f0')};

  font-size: ${width * 0.042};

  margin-left: 5px;
  margin-right: ${width * 0.04};

  opacity: 0.8;
`;

export const IconArrow = styled(IconMaterial)`
  /* color: #e6e6f0; */
  color: ${(props) => (props.color == 'white' ? '#434343' : '#e6e6f0')};

  font-size: ${width * 0.07};
  /* font-size: ${(props) => props.left}; */

  opacity: 0.7;
`;

export const ContainerRow = styled.View`
  width: ${width * 0.8};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 8px;
  background-color: ${(props) =>
    props.color == 'white' ? '#DBD7D7' : '#f3f3f3'};

  border-radius: 10px;
`;

export const ContainerRowSUB = styled.View`
  width: ${width * 0.8};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 12px;
  /* background-color: #e6e6f0; */
  border-radius: 10px;
`;

export const IconSearch = styled(IconMaterial)`
  /* color: #e6e6f0; */
  color: ${(props) => props.color};
  font-size: ${width * 0.055};
  /* font-size: ${(props) => props.left}; */
  margin-right: ${width * 0.05};
  margin-bottom: ${width * 0.01};
  opacity: 0.7;
`;

export const ContainerInput = styled.View`
  width: 89%;

  padding-left: 10px;
  padding-right: 13px;
  padding-bottom: 5px;
  height: 50px;

  display: flex;
  align-content: center;
  justify-content: center;
`;

export const Input = styled(TextInput).attrs(() => {})``;

export const Type = styled(RectButton)`
  width: 45%;

  padding-left: 10px;
  padding-right: 13px;
  height: 40px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${(props) =>
    props.color == 'white' ? '#DBD7D7' : '#f3f3f3'};
  border-radius: 10px;
`;

export const TextButton = styled.Text`
  font-size: 15px;

  color: ${(props) => (props.color == 'white' ? '#8E8E8E' : '#8E8E8E')};
`;

export const ModalFilter = styled.Modal``;
export const RadioItem = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  border: 1px solid #874ce9;
  border-radius: 8px;
  margin-bottom: 10px;
`;
export const RadioItemColor = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
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
      : '#874CE9'};
  border-radius: 8px;
  margin-bottom: 10px;
`;
export const RadioItemD = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  opacity: 0.8;
  background-color: ${(props) =>
    props.background === 'dark' ? '#874CE9' : 'transparent'};
  border: 1px solid #874ce9;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const ModalTextD = styled.Text`
  color: ${(props) => (props.color === 'dark' ? 'white' : '#874CE9')};
`;

export const RadioItemDR = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  opacity: 0.8;
  height: 50px;

  background-color: ${(props) =>
    props.background === 'dragon' ? '#874CE9' : 'transparent'};
  border: 1px solid #874ce9;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const ModalTextDR = styled.Text`
  color: ${(props) => (props.color === 'dragon' ? 'white' : '#874CE9')};
`;
export const RadioItemF = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;

  opacity: 0.8;
  background-color: ${(props) =>
    props.background === 'fairy' ? '#874CE9' : 'transparent'};
  border: 1px solid #874ce9;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const ModalTextF = styled.Text`
  color: ${(props) => (props.color === 'fairy' ? 'white' : '#874CE9')};
`;

export const RadioItemE = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 50px;

  align-items: center;
  opacity: 0.8;
  background-color: ${(props) =>
    props.background === 'electric' ? '#874CE9' : 'transparent'};
  border: 1px solid #874ce9;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const ModalTextE = styled.Text`
  color: ${(props) => (props.color === 'electric' ? 'white' : '#874CE9')};
`;

export const RadioItemI = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;

  opacity: 0.8;
  background-color: ${(props) =>
    props.background === 'ice' ? '#874CE9' : 'transparent'};
  border: 1px solid #874ce9;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const ModalTextI = styled.Text`
  color: ${(props) => (props.color === 'ice' ? 'white' : '#874CE9')};
`;

export const RadioItemG = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;

  opacity: 0.8;
  background-color: ${(props) =>
    props.background === 'ghost' ? '#874CE9' : 'transparent'};
  border: 1px solid #874ce9;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const ModalTextG = styled.Text`
  color: ${(props) => (props.color === 'ghost' ? 'white' : '#874CE9')};
`;

export const RadioItemST = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 50px;

  align-items: center;
  opacity: 0.8;
  background-color: ${(props) =>
    props.background === 'steel' ? '#874CE9' : 'transparent'};
  border: 1px solid #874ce9;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const ModalTextST = styled.Text`
  color: ${(props) => (props.color === 'steel' ? 'white' : '#874CE9')};
`;

export const RadioItemRK = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;

  opacity: 0.8;
  background-color: ${(props) =>
    props.background === 'rock' ? '#874CE9' : 'transparent'};
  border: 1px solid #874ce9;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const ModalTextRK = styled.Text`
  color: ${(props) => (props.color === 'rock' ? 'white' : '#874CE9')};
`;

export const RadioItemFI = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;

  opacity: 0.8;
  background-color: ${(props) =>
    props.background === 'fighting' ? '#874CE9' : 'transparent'};
  border: 1px solid #874ce9;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const ModalTextFI = styled.Text`
  color: ${(props) => (props.color === 'fighting' ? 'white' : '#874CE9')};
`;
export const RadioItemPS = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  height: 50px;

  flex-direction: row;
  align-items: center;
  opacity: 0.8;
  background-color: ${(props) =>
    props.background === 'psychic' ? '#874CE9' : 'transparent'};
  border: 1px solid #874ce9;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const ModalTextPS = styled.Text`
  color: ${(props) => (props.color === 'psychic' ? 'white' : '#874CE9')};
`;

export const RadioItemGR = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  height: 50px;

  flex-direction: row;
  align-items: center;
  opacity: 0.8;
  background-color: ${(props) =>
    props.background === 'ground' ? '#874CE9' : 'transparent'};
  border: 1px solid #874ce9;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const ModalTextGR = styled.Text`
  color: ${(props) => (props.color === 'ground' ? 'white' : '#874CE9')};
`;

export const RadioItemNL = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;

  opacity: 0.8;
  background-color: ${(props) =>
    props.background === 'normal' ? '#874CE9' : 'transparent'};
  border: 1px solid #874ce9;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const ModalTextNL = styled.Text`
  color: ${(props) => (props.color === 'normal' ? 'white' : '#874CE9')};
`;

export const RadioItemFL = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 50px;

  align-items: center;
  opacity: 0.8;
  background-color: ${(props) =>
    props.background === 'flying' ? '#874CE9' : 'transparent'};
  border: 1px solid #874ce9;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const ModalTextFL = styled.Text`
  color: ${(props) => (props.color === 'flying' ? 'white' : '#874CE9')};
`;

export const RadioItemBU = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  height: 50px;

  flex-direction: row;
  align-items: center;
  opacity: 0.8;
  background-color: ${(props) =>
    props.background === 'bug' ? '#874CE9' : 'transparent'};
  border: 1px solid #874ce9;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const ModalTextBU = styled.Text`
  color: ${(props) => (props.color === 'bug' ? 'white' : '#874CE9')};
`;

export const RadioItemWA = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 50px;

  align-items: center;
  opacity: 0.8;
  background-color: ${(props) =>
    props.background === 'water' ? '#874CE9' : 'transparent'};
  border: 1px solid #874ce9;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const RadioItemFIR = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  height: 50px;

  flex-direction: row;
  align-items: center;
  opacity: 0.8;
  background-color: ${(props) =>
    props.background === 'fire' ? '#874CE9' : 'transparent'};
  border: 1px solid #874ce9;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const ModalTextFIR = styled.Text`
  color: ${(props) => (props.color === 'fire' ? 'white' : '#874CE9')};
`;

export const RadioItemPOI = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  height: 50px;
  flex-direction: row;
  align-items: center;
  opacity: 0.8;
  background-color: ${(props) =>
    props.background === 'poison' ? '#874CE9' : 'transparent'};
  border: 1px solid #874ce9;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const ModalTextPOI = styled.Text`
  color: ${(props) => (props.color === 'poison' ? 'white' : '#874CE9')};
`;
export const RadioItemGRA = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  height: 50px;
  flex-direction: row;
  align-items: center;
  opacity: 0.8;
  background-color: ${(props) =>
    props.background === 'grass' ? '#874CE9' : 'transparent'};
  border: 1px solid #874ce9;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const ModalTextGRA = styled.Text`
  color: ${(props) => (props.color === 'grass' ? 'white' : '#874CE9')};
`;

export const ModalTextWA = styled.Text`
  color: ${(props) => (props.color === 'water' ? 'white' : '#874CE9')};
`;

export const RadioItemClean = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  border: 1px solid #874ce9;
  border-radius: 8px;
  margin-bottom: 10px;

  margin-top: 10px;
`;

export const RadioItemCleanColor = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  border: 1px solid #874ce9;
  border-radius: 8px;
  margin-bottom: 10px;

  margin-top: 10px;
`;
export const ModalText = styled.Text`
  color: #a3a3a3;
  font-weight: bold;
`;
export const ModalTextColor = styled.Text`
  color: ${(props) => (props.color == 'white' ? '#87898C' : '#f3f3f3')};
`;
export const CleanModal = styled.Text`
  color: #874ce9;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-weight: bold;
`;

export const CleanModalS = styled.Text`
  color: #d42b30;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-weight: bold;
`;

export const Center = styled.ScrollView`
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
`;

export const ContainerOption = styled.View`
  background-color: white;
  width: ${width * 0.8};
  max-height: ${width * 1.2};
  display: flex;
  align-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ButtonClose = styled.TouchableOpacity`
  width: 100%;

  padding-left: 10px;
  padding-right: 13px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

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
      : '#874CE9'};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const TextButtonClose = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;

  color: ${(props) =>
    props.background && props.background == 'white' ? '#3E3C3C' : '#f3f3f3'};
`;

export const ContainerColors = styled.ScrollView`
  width: ${width * 1};
  padding-left: 10px;
  padding-bottom: 10px;
`;
export const TextButtonColors = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;

  color: #f3f3f3;
`;

export const Color = styled.TouchableOpacity`
  padding-top: ${width * 0.01};
  padding-bottom: ${width * 0.012};
  padding-left: ${width * 0.05};
  padding-right: ${width * 0.05};
  margin-right: 15px;
  border-radius: 6px;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid white;
`;

export const Title = styled.Text`
  align-self: flex-start;
  margin-bottom: 10px;
  font-size: 15px;
  color: #f3f3f3;
`;
