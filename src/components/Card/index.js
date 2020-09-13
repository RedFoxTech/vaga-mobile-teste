import React from 'react';

import PokemonType from '../../helpers/PokemonType';
import PokemonImg from '../../helpers/PokemonImg';

import { Wrapper, ImageBox, Img, Title, CardTypes, Type, CardInfo, CardData, CardTitle, Info } from './styles';

function Card({ pokemon }) {
    return (
        <Wrapper>
            <ImageBox>
                <Img source={PokemonImg[pokemon.name]} />
            </ImageBox>
            <Title>{pokemon.name}</Title>
            <CardTypes>{pokemon.types.map(type => {
                return (
                    <Type style={{ backgroundColor: PokemonType[type.type.name] }}>{type.type.name}</Type>
                )
            })}</CardTypes>
            <CardInfo>
                <CardData>
                    <CardTitle>Weight</CardTitle>
                    <Info>{pokemon.weight}</Info>
                </CardData>
                <CardData>
                    <CardTitle>Height</CardTitle>
                    <Info>{pokemon.height}</Info>
                </CardData>
                <CardData>
                    <CardTitle>Ability</CardTitle>
                    <Info>{pokemon.abilities[0].ability.name}</Info>
                </CardData>
                <CardData>
                    <CardTitle>Main Move</CardTitle>
                    <Info>{pokemon.moves[0].move.name}</Info>
                </CardData>
            </CardInfo>
        </Wrapper>
    )
}

export default Card;