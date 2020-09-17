import React, {useState, useEffect, useContext} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';
import {RadioButton, Text} from 'react-native-paper';
import SearchContext from '~/Context/Search/';

import {
  Container,
  ContainerRow,
  ContainerInput,
  Input,
  Type,
  TextButton,
  Color,
  TextButtonColors,
  ContainerColors,
  Header,
  Fil,
  Pokedex,
  FilterButton,
  ModalFilter,
  CenteredView,
  ContainerOption,
  ModalText,
  RadioItem,
  Center,
  ButtonClose,
  Icons,
  IconArrow,
  IconSearch,
  TextButtonClose,
  CleanModal,
  RadioItemClean,
  RadioItemD,
  ModalTextD,
  RadioItemF,
  ModalTextF,
  RadioItemDR,
  ModalTextDR,
  RadioItemI,
  ModalTextI,
  ModalTextE,
  RadioItemE,
  RadioItemG,
  ModalTextG,
  RadioItemST,
  ModalTextST,
  RadioItemRK,
  ModalTextRK,
  RadioItemFI,
  ModalTextFI,
  ModalTextPS,
  RadioItemPS,
  RadioItemGR,
  ModalTextGR,
  RadioItemNL,
  ModalTextNL,
  RadioItemFL,
  ModalTextFL,
  RadioItemWA,
  ModalTextWA,
  RadioItemBU,
  ModalTextBU,
  ModalTextFIR,
  RadioItemFIR,
  ModalTextPOI,
  RadioItemPOI,
  ModalTextGRA,
  RadioItemGRA,
  ContainerRowSUB,
  RadioItemColor,
  RadioItemCleanColor,
  ModalTextColor,
  CleanModalS,
} from './styles';

const Filter = (props) => {
  const {namePokemon, color, togleColor, typePokemonClean} = useContext(
    SearchContext,
  );

  const [open, setOpen] = useState(null);
  const [modalVisible, setModalVisible] = useState(null);
  const [modalVisibleColor, setModalVisibleColor] = useState(null);
  const [value, setValue] = React.useState('');
  const [colorPok, setCOlorPokemon] = React.useState('');

  useEffect(() => {
    async function type() {
      const nameR = 'types';
      namePokemon(value, nameR);
    }
    type();
  }, [value]);

  function PokemonClean() {
    setValue('');
    typePokemonClean();
  }

  useEffect(() => {
    async function colorPokm() {
      const nameR = 'color';
      togleColor(colorPok);
      namePokemon(colorPok, nameR);
    }
    colorPokm();
  }, [colorPok]);

  return (
    <Container>
      <ModalFilter
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <CenteredView>
          <ContainerOption>
            <RadioButton.Group
              onValueChange={(value) => setValue(value)}
              value={value}>
              <Center
                contentContainerStyle={{
                  alignItems: 'center',
                }}
                showsHorizontalScrollIndicator={false}>
                <RadioItemClean onPress={PokemonClean}>
                  <CleanModal>Limpar</CleanModal>
                </RadioItemClean>
                <RadioItemD
                  background={value}
                  color={color}
                  onPress={() => {
                    setValue('dark');
                  }}>
                  <RadioButton value="dark" />
                  <ModalTextD color={value}>dark</ModalTextD>
                </RadioItemD>
                <RadioItemF
                  background={value}
                  onPress={() => {
                    setValue('fairy');
                  }}>
                  <RadioButton value="fairy" />
                  <ModalTextF color={value}>fairy</ModalTextF>
                </RadioItemF>
                <RadioItemDR
                  background={value}
                  onPress={() => {
                    setValue('dragon');
                  }}>
                  <RadioButton value="dragon" />
                  <ModalTextDR color={value}>dragon</ModalTextDR>
                </RadioItemDR>
                <RadioItemE
                  background={value}
                  onPress={() => {
                    setValue('electric');
                  }}>
                  <RadioButton value="electric" />
                  <ModalTextE color={value}>electric</ModalTextE>
                </RadioItemE>
                <RadioItemI
                  background={value}
                  onPress={() => {
                    setValue('ice');
                  }}>
                  <RadioButton value="ice" />
                  <ModalTextI color={value}>ice</ModalTextI>
                </RadioItemI>
                <RadioItemG
                  background={value}
                  onPress={() => {
                    setValue('ghost');
                  }}>
                  <RadioButton value="ghost" />
                  <ModalTextG color={value}>ghost</ModalTextG>
                </RadioItemG>
                <RadioItemST
                  background={value}
                  onPress={() => {
                    setValue('steel');
                  }}>
                  <RadioButton value="steel" />
                  <ModalTextST color={value}>steel</ModalTextST>
                </RadioItemST>
                <RadioItemRK
                  background={value}
                  onPress={() => {
                    setValue('rock');
                  }}>
                  <RadioButton value="rock" />
                  <ModalTextRK color={value}>rock</ModalTextRK>
                </RadioItemRK>
                <RadioItemFI
                  background={value}
                  onPress={() => {
                    setValue('fighting');
                  }}>
                  <RadioButton value="fighting" />
                  <ModalTextFI color={value}>fighting</ModalTextFI>
                </RadioItemFI>
                <RadioItemPS
                  background={value}
                  onPress={() => {
                    setValue('psychic');
                  }}>
                  <RadioButton value="psychic" />
                  <ModalTextPS color={value}>psychic</ModalTextPS>
                </RadioItemPS>
                <RadioItemGR
                  background={value}
                  onPress={() => {
                    setValue('ground');
                  }}>
                  <RadioButton value="ground" />
                  <ModalTextGR color={value}>ground</ModalTextGR>
                </RadioItemGR>
                <RadioItemNL
                  background={value}
                  onPress={() => {
                    setValue('normal');
                  }}>
                  <RadioButton value="normal" />
                  <ModalTextNL color={value}>normal</ModalTextNL>
                </RadioItemNL>
                <RadioItemFL
                  background={value}
                  onPress={() => {
                    setValue('flying');
                  }}>
                  <RadioButton value="flying" />
                  <ModalTextFL color={value}>flying</ModalTextFL>
                </RadioItemFL>
                <RadioItemBU
                  background={value}
                  onPress={() => {
                    setValue('bug');
                  }}>
                  <RadioButton value="bug" />
                  <ModalTextBU color={value}>bug</ModalTextBU>
                </RadioItemBU>
                <RadioItemWA
                  background={value}
                  onPress={() => {
                    setValue('water');
                  }}>
                  <RadioButton value="water" />
                  <ModalTextWA color={value}>water</ModalTextWA>
                </RadioItemWA>
                <RadioItemFIR
                  background={value}
                  onPress={() => {
                    setValue('fire');
                  }}>
                  <RadioButton value="fire" />
                  <ModalTextFIR color={value}>fire</ModalTextFIR>
                </RadioItemFIR>
                <RadioItemPOI
                  background={value}
                  onPress={() => {
                    setValue('poison');
                  }}>
                  <RadioButton value="poison" />
                  <ModalTextPOI color={value}>poison</ModalTextPOI>
                </RadioItemPOI>
                <RadioItemGRA
                  background={value}
                  onPress={() => {
                    setValue('grass');
                  }}>
                  <RadioButton value="grass" />
                  <ModalTextGRA color={value}>grass</ModalTextGRA>
                </RadioItemGRA>
              </Center>
            </RadioButton.Group>

            <ButtonClose
              background={color}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <TextButtonClose color={color}>Fechar</TextButtonClose>
            </ButtonClose>
          </ContainerOption>
        </CenteredView>
      </ModalFilter>
      <ModalFilter
        animationType="fade"
        transparent={true}
        visible={modalVisibleColor}
        onRequestClose={() => {
          setModalVisibleColor(!modalVisibleColor);
        }}>
        <CenteredView>
          <ContainerOption>
            <RadioButton.Group
              onValueChange={(colorPok) => setCOlorPokemon(colorPok)}
              value={colorPok}>
              <Center
                contentContainerStyle={{
                  alignItems: 'center',
                }}
                showsHorizontalScrollIndicator={false}>
                <RadioItemCleanColor
                  onPress={() => {
                    setCOlorPokemon('');
                  }}>
                  <CleanModalS>Limpar</CleanModalS>
                </RadioItemCleanColor>
                <RadioItemColor
                  background="red"
                  onPress={() => {
                    setCOlorPokemon('red');
                  }}>
                  <RadioButton
                    value="red"
                    uncheckedColor="#CDCDCD"
                    color="white"
                  />
                  <ModalTextColor color={value}>Red</ModalTextColor>
                </RadioItemColor>
                <RadioItemColor
                  background="green"
                  onPress={() => {
                    setCOlorPokemon('green');
                  }}>
                  <RadioButton
                    value="green"
                    uncheckedColor="#CDCDCD"
                    color="white"
                  />
                  <ModalTextColor color={value}>Green</ModalTextColor>
                </RadioItemColor>
                <RadioItemColor
                  background="blue"
                  onPress={() => {
                    setCOlorPokemon('blue');
                  }}>
                  <RadioButton
                    value="blue"
                    uncheckedColor="#CDCDCD"
                    color="white"
                  />
                  <ModalTextColor color={value}>Blue</ModalTextColor>
                </RadioItemColor>
                <RadioItemColor
                  background="brown"
                  onPress={() => {
                    setCOlorPokemon('brown');
                  }}>
                  <RadioButton
                    value="brown"
                    uncheckedColor="#CDCDCD"
                    color="white"
                  />
                  <ModalTextColor color={value}>Brown</ModalTextColor>
                </RadioItemColor>
                <RadioItemColor
                  background="purple"
                  onPress={() => {
                    setCOlorPokemon('purple');
                  }}>
                  <RadioButton
                    value="purple"
                    uncheckedColor="#CDCDCD"
                    color="white"
                  />
                  <ModalTextColor color={value}>Purple</ModalTextColor>
                </RadioItemColor>
                <RadioItemColor
                  background="yellow"
                  onPress={() => {
                    setCOlorPokemon('yellow');
                  }}>
                  <RadioButton
                    value="yellow"
                    uncheckedColor="white"
                    color="white"
                  />
                  <ModalTextColor color={value}>Yellow</ModalTextColor>
                </RadioItemColor>
                <RadioItemColor
                  background="gray"
                  onPress={() => {
                    setCOlorPokemon('gray');
                  }}>
                  <RadioButton
                    value="gray"
                    uncheckedColor="#CDCDCD"
                    color="white"
                  />
                  <ModalTextColor color={value}>Gray</ModalTextColor>
                </RadioItemColor>
                <RadioItemColor
                  background="pink"
                  onPress={() => {
                    setCOlorPokemon('pink');
                  }}>
                  <RadioButton
                    value="pink"
                    uncheckedColor="white"
                    color="white"
                  />
                  <ModalTextColor color={value}>Pink</ModalTextColor>
                </RadioItemColor>
                <RadioItemColor
                  background="white"
                  onPress={() => {
                    setCOlorPokemon('white');
                  }}>
                  <RadioButton
                    value="white"
                    uncheckedColor="#838181"
                    color="#838181"
                  />
                  <ModalTextColor color="white">White</ModalTextColor>
                </RadioItemColor>
                <RadioItemColor
                  background="black"
                  onPress={() => {
                    setCOlorPokemon('black');
                  }}>
                  <RadioButton
                    uncheckedColor="#CDCDCD"
                    color="white"
                    value="black"
                  />
                  <ModalTextColor color={value}>Black</ModalTextColor>
                </RadioItemColor>
              </Center>
            </RadioButton.Group>
            <ButtonClose
              background={color}
              onPress={() => {
                setModalVisibleColor(!modalVisibleColor);
              }}>
              <TextButtonClose background={color}>Fechar</TextButtonClose>
            </ButtonClose>
          </ContainerOption>
        </CenteredView>
      </ModalFilter>

      <Header>
        <Pokedex color={color}>Minha Pokefox</Pokedex>
      </Header>
      <FilterButton color={color} isOpen={open} onPress={() => setOpen(!open)}>
        <Icons color={color} name="filter" />

        <Fil color={color}> Filtrar por nome, tipo ou cor</Fil>
        {open ? (
          <IconArrow color={color} name="keyboard-arrow-up" />
        ) : (
          <IconArrow color={color} name="keyboard-arrow-down" />
        )}
      </FilterButton>

      {open && (
        <>
          <ContainerRow color={color}>
            <ContainerInput>
              <Input
                label="Digite o nome de um pokémon"
                labelColor="#A3A2A5"
                underlineColor="transparent"
                color="#A3A2A5"
                labelActiveColor="#C1BCCC"
                underlineActiveColor="transparent"
                fontSize={15}
                height={50}
                labelActiveTop={-17}
                labelActiveScale={0.7}
                autoCapitalize="none"
                placeholderColor="#DAD3D3"
                onChangeText={(name) => {
                  const nameR = 'name';
                  namePokemon(name, nameR);
                }}
              />
            </ContainerInput>
            <IconSearch color={'#A3A2A5'} name="search" />
          </ContainerRow>
          <ContainerRowSUB>
            <Type
              color={color}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <TextButton color={color}>tipo</TextButton>
            </Type>
            <Type
              color={color}
              onPress={() => {
                setModalVisibleColor(!modalVisibleColor);
              }}>
              <TextButton color={color}>cor</TextButton>
            </Type>
          </ContainerRowSUB>
        </>
      )}
    </Container>
  );
};

export default Filter;
