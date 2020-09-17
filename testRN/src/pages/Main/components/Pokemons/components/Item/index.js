import React, {useContext, useState, useEffect} from 'react';

import {Viewm, Text, View, ScrollView, StatusBar} from 'react-native';

import {
  ContainerItem,
  Habitat,
  ButtonPokelis,
  Img,
  NamePokemon,
  TypePokemon,
  IdPokmenon,
  Bolder,
  TextButton,
  ModalFilter,
  CenteredView,
  ContainerOption,
  InfoRight,
  TypeModal,
  TextContainer,
  TextContainert,
  Footer,
  ImgModal,
  PokemonModal,
  TextButtonWhite,
  NamePokemonM,
  BolderW,
  NamePokemonFlex,
  StatsContainer,
  LabelStats,
  Stats,
  BarStats,
  StatsHeader,
  BarStatsInner,
  Evolution,
  EvolutionInfo,
  EvolutionContainer,
  EvolutionID,
  EvolutionName,
  ContainerImage,
  EvolutionImage,
  EImage,
  InfoEvolution,
  Lvel,
  EvolutionLvel,
  IConLevel,
  ContainerColumn,
  ContainerRow,
  ContainerEvolution,
  IdPokmenonModal,
} from './styles';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

const Item = (
  {
    name,
    img,
    habitat,
    type,
    id,
    color,
    experience,
    weight,
    height,
    stats,
    evolution,
  },
  props,
) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [ID, setID] = useState(null);

  const pad = (num, size) => {
    const s = `000${num}`;
    return s.substr(s.length - size);
  };
  // changeNavigationBarColor(`${color}`);

  return (
    <>
      {name && (
        <>
          <ContainerItem background={color}>
            <ButtonPokelis
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <ContainerColumn>
                <TextContainer>
                  <IdPokmenon background={color}>#{id}</IdPokmenon>
                </TextContainer>
                <NamePokemon background={color}>{name}</NamePokemon>
                <Habitat background={color}>
                  vive em <Bolder background={color}>{habitat}</Bolder>
                </Habitat>

                {/* <Habitat>
                  xp base <Bolder>{experience}</Bolder>
                </Habitat> */}
                <EvolutionContainer>
                  {evolution &&
                    evolution.map((e) => (
                      <EvolutionInfo
                        key={`evolution-${e.id}`}
                        id={`evolution-${e.id}`}>
                        <InfoEvolution>
                          <ContainerImage>
                            <EvolutionImage source={{uri: e.img}} />
                          </ContainerImage>
                        </InfoEvolution>
                      </EvolutionInfo>
                    ))}
                </EvolutionContainer>
              </ContainerColumn>

              <View>
                <Img
                  source={{
                    uri: img,
                  }}
                />
                <ContainerRow>
                  {type.split(',').map((t) => (
                    <TextContainert background={color}>
                      <TypePokemon key={t} background={color}>
                        {t}
                      </TypePokemon>
                    </TextContainert>
                  ))}
                </ContainerRow>
              </View>
            </ButtonPokelis>
          </ContainerItem>

          <ModalFilter
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <StatusBar
              backgroundColor={
                color && color == 'red'
                  ? '#D42B30'
                  : color == 'green'
                  ? '#269D77'
                  : color == 'blue'
                  ? '#1E61A5'
                  : color == 'brown'
                  ? '#99633D'
                  : color == 'purple'
                  ? '#711970'
                  : color == 'yellow'
                  ? '#D2B356'
                  : color == 'gray'
                  ? '#87898C'
                  : color == 'pink'
                  ? '#DDB1B0'
                  : color == 'white'
                  ? '#f3f3f3'
                  : color == 'black'
                  ? '#323030'
                  : '#874CE9'
              }
              // barStyle="light-content"
              // barStyle="dark-content"
              barStyle={color == 'white' ? 'dark-content' : 'light-content'}
            />
            <CenteredView>
              <ScrollView
                contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
                <ContainerOption background={color}>
                  <PokemonModal>
                    <TextContainer>
                      <IdPokmenonModal background={color}>{id}</IdPokmenonModal>
                    </TextContainer>
                    <ImgModal
                      source={{
                        uri: img,
                      }}
                    />
                    <InfoRight>
                      {type.split(',').map((t) => (
                        <TextContainert background={color}>
                          <TypePokemon key={t} background={color}>
                            {t}
                          </TypePokemon>
                        </TextContainert>
                      ))}
                    </InfoRight>
                  </PokemonModal>
                  <NamePokemonFlex>
                    <NamePokemonM>
                      <Footer>
                        <NamePokemon background={color}>{name}</NamePokemon>
                        <Habitat background={color}>
                          Vive em <Bolder background={color}>{habitat}</Bolder>
                        </Habitat>
                      </Footer>
                      <InfoRight>
                        <Habitat background={color}>
                          Peso: <BolderW background={color}> {weight}</BolderW>
                        </Habitat>
                        <Habitat background={color}>
                          Altura: <Bolder background={color}>{height}</Bolder>
                        </Habitat>
                      </InfoRight>
                    </NamePokemonM>
                    {stats.map((s) => {
                      return (
                        <StatsContainer key={s.stat.name}>
                          <StatsHeader>
                            <LabelStats background={color}>
                              {s.stat.name}
                            </LabelStats>
                            <Stats background={color}>{s.base_stat}</Stats>
                          </StatsHeader>
                          <BarStats base_stat={s.base_stat} color={color}>
                            <BarStatsInner
                              stats={s.base_stat}
                              background={color}
                            />
                          </BarStats>
                        </StatsContainer>
                      );
                    })}

                    <Evolution background={color}>Evoluções</Evolution>

                    <EvolutionContainer>
                      {evolution &&
                        evolution.map((e) => (
                          <EvolutionInfo
                            key={`evolution-${e.id}`}
                            id={`evolution-${e.id}`}>
                            {e.minLevel && (
                              <Lvel>
                                <EvolutionLvel background={color}>
                                  {e.minLevel}
                                </EvolutionLvel>
                                <IConLevel
                                  name="doubleright"
                                  background={color}
                                />
                              </Lvel>
                            )}
                            <InfoEvolution>
                              <EvolutionID background={color}>
                                #{pad(e.id, 3)}
                              </EvolutionID>
                              <EvolutionName background={color}>
                                {e.name}
                              </EvolutionName>

                              <ContainerImage>
                                <EImage source={{uri: e.img}} />
                              </ContainerImage>
                            </InfoEvolution>
                          </EvolutionInfo>
                        ))}
                    </EvolutionContainer>
                  </NamePokemonFlex>
                  <TypeModal
                    background={color}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}>
                    <TextButton background={color}>Fechar</TextButton>
                  </TypeModal>
                </ContainerOption>
              </ScrollView>
            </CenteredView>
          </ModalFilter>
        </>
      )}
    </>
  );
};

export default Item;
