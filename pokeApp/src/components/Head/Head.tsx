import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import {Title} from './Head.styles'

import Icon from 'react-native-vector-icons/Fontisto'

interface HeadProps {
    onPress: () => void
}

const Head: React.FC<HeadProps> = (props: HeadProps) => {
    const { onPress } = props
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#E74233', borderBottomWidth: 1, borderBottomColor: '#FFF', padding: 2, }}>
            <TouchableOpacity onPress={onPress}>
                <Icon name="nav-icon" color="#FFF" size={20} />
            </TouchableOpacity>
            <Title> Pokemon </Title>
            <Image source={require('../../assets/img/trainer.png')} style={{width:25, height:25}} />
        </View>
    )
}

export default Head
