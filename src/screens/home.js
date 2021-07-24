import React, { useEffect, useState, useRef } from 'react'
import {
  FlatList,
  ActivityIndicator,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styled from 'styled-components/native'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu'

import {
  Content
} from '../styles/global'
import Card from '../components/card'
import { pokeApi } from '../services/pokeApi'

const CardArea = styled.TouchableOpacity`
  flex: 1;
  margin: 10px;
`

export const HomeScreen = ({ navigation }) => {
  const [list, setList] = useState([])
  const [page, setPage] = useState(0)
  const [filter, setFilter] = useState(0)
  const [loading, setLoading] = useState(false)
  const _menu = useRef(null)

  useEffect(() => {
    getPokemon()
  },[])

  const getPokemon = async(newPage, type) => {
    try {
      const offset = newPage==null? page:newPage 
      const filterType = type==null? filter:type

      const res = await pokeApi.get(`/?limit=100&offset=${offset}`)
      const newList = [...list, ...res.data.results]
      if(filterType != 0){
        await newList.sort(function (a, b) {
          if(filterType == 1){
            if (a.name > b.name) {
              return 1
            }
            if (a.name < b.name) {
              return -1
            }
            return 0
          }
        })
      }
      setList(newList)
    } catch (e) {
      console.log(e)
    }finally{
      setLoading(false)
    }
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Menu
          ref={_menu}
          button={
            <TouchableOpacity 
              style={{ marginRight: 20, paddingHorizontal: 10, paddingVertical: 5 }}
              onPress={() => _menu.current.show()} 
            >
              <Icon name="filter-list" size={25} color={"#fff"}/>
            </TouchableOpacity>
          }
        >
          <MenuItem onPress={() => handleFilter(0)}>Code</MenuItem>
          <MenuDivider />
          <MenuItem onPress={() => handleFilter(1)}>Alphabetical</MenuItem>
        </Menu>
      ),
    })
  }, [navigation])

  const handleFilter = async(type) => {
    setFilter(type)
    getPokemon(null, type)
    _menu.current.hide()
  }

  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
  }

  const renderItem = ({ item }) => {
    const id = item.url.split("/")[6]
    const name = item.name.capitalize()

    return (
      <CardArea 
        key={id}
        onPress={() => navigation.navigate("Details", {title: name, id})}
      >
        <Card 
          cover={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          title={name}
          id={id}
        />
      </CardArea>
    )
  }

  const handleLoadMore = async() => {
    if (!loading) {
      setLoading(true)
      const newPage = page + 100
      setPage(newPage)
      getPokemon(newPage)
    }
  }

  const renderFooter = () => {
    if (!loading) return null
    return <ActivityIndicator size="large" color="#333" />
  }

  return (
    <Content>
      <StatusBar
        animated={true}
        barStyle='light-content'
        backgroundColor="#f00"
      />
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        showsVerticalScrollIndicator={false}
        style={{
          width: '100%',
          flexDirection: 'column'
        }}
        removeClippedSubviews={true}
        ListFooterComponent={renderFooter}
        numColumns={2}
        onEndReachedThreshold={.6}
        onEndReached={() => handleLoadMore()}
      />
    </Content>
  )
}