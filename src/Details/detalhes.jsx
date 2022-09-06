import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../src/api';
import { useState, useEffect } from 'react'


export default function Detalhes() {

  const [pokemonList, setPokemonList] = useState([])
  const navigation = useNavigation();
  const [ordererList, setOrdererList] = useState([])
  const [shouldRender, setShouldRender] = useState(true)
  const [initialDex, setInitialDex] = useState(1)
  const[finalDex, setFinalDex] = useState(20)
      
  const onEnd = () => {
    const initial = initialDex+20
    const final = finalDex + 20
    setInitialDex(initial)
    setFinalDex(final)
    setShouldRender(true)
  }

  function getStyle(type){
    if(type == 'grass'){
      return { backgroundColor: '#74CB48'}
    }else if(type == 'fire'){
      return {backgroundColor: '#F57D31'}
    }else if(type == 'water'){
      return {backgroundColor: '#6493EB'}
    }else if(type == 'rock'){
      return {backgroundColor: '#B69E31'}
    }else if(type == 'ghost'){
      return {backgroundColor: '#70559B'}
    }else if(type == 'steel'){
      return {backgroundColor: '#B7B9D0'}
    }else if(type == 'psychic'){
      return {backgroundColor: '#FB5584'}
    }else if(type == 'ice'){
      return {backgroundColor: '#9AD6DF'}
    }else if(type == 'dark'){
      return {backgroundColor: '#75574C'}
    }else if(type == 'fairy'){
      return {backgroundColor: '#E69EAC'}
    }else if(type == 'normal'){
      return {backgroundColor: '#AAA67F'}
    }else if(type == 'fighting'){
      return {backgroundColor: '#C12239'}
    }else if(type == 'flying'){
      return {backgroundColor: '#A891EC'}
    }else if(type == 'poison'){
      return {backgroundColor: '#A43E9E'}
    }else if(type == 'ground'){
      return {backgroundColor: '#DEC16B'}
    }else if(type == 'bug'){
      return {backgroundColor: '#A7B723'}
    }else if(type == 'electric'){
      return {backgroundColor: '#F9CF30'}
    }else if(type == 'dragon'){
      return {backgroundColor: '#7037FF'}
    }
  }

  function getBorderStyle(type){
    if(type == 'grass'){
      return { borderColor: '#74CB48'}
    }else if(type == 'fire'){
      return {borderColor: '#F57D31'}
    }else if(type == 'water'){
      return {borderColor: '#6493EB'}
    }else if(type == 'rock'){
      return {borderColor: '#B69E31'}
    }else if(type == 'ghost'){
      return {borderColor: '#70559B'}
    }else if(type == 'steel'){
      return {borderColor: '#B7B9D0'}
    }else if(type == 'psychic'){
      return {borderColor: '#FB5584'}
    }else if(type == 'ice'){
      return {borderColor: '#9AD6DF'}
    }else if(type == 'dark'){
      return {borderColor: '#75574C'}
    }else if(type == 'fairy'){
      return {borderColor: '#E69EAC'}
    }else if(type == 'normal'){
      return {borderColor: '#AAA67F'}
    }else if(type == 'fighting'){
      return {borderColor: '#C12239'}
    }else if(type == 'flying'){
      return {borderColor: '#A891EC'}
    }else if(type == 'poison'){
      return {borderColor: '#A43E9E'}
    }else if(type == 'ground'){
      return {borderColor: '#DEC16B'}
    }else if(type == 'bug'){
      return {borderColor: '#A7B723'}
    }else if(type == 'electric'){
      return {borderColor: '#F9CF30'}
    }else if(type == 'dragon'){
      return {borderColor: '#7037FF'}
    }
  }

  useEffect(() => {
    for( let i = initialDex; i< finalDex; i++) {
      const url = `/pokemon/${i}`
      api.get(url)
      .then(response => setPokemonList(oldArray => [...oldArray, response.data]))
    }
    if(pokemonList){
      console.log(pokemonList)
    } 
  },[initialDex])



  String.prototype.capitalize= function () {
    return this.charAt(0).toUpperCase() + this.substring(1);
  }


  useEffect(() => {
      if(pokemonList) {
        const ordered = pokemonList.sort(function(a,b) {
         return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
        });

       setOrdererList(ordered) 
      }
      
  },[pokemonList])


  return(
    <FlatList
    data={pokemonList}
    idExtractor={item => item.id}
    renderItem={({item}) => (
      <TouchableOpacity onPress={()=> navigation.navigate('Infos', {item: item, background: getStyle(item.types[0].type.name)})}>
      <SafeAreaView style={[styles.name, getBorderStyle(item.types[0].type.name)]}>
          <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.texto}>{item.name.capitalize()}</Text>
                <Image source={{uri: item.sprites.front_default}} style={{width: 250, height: 250}}></Image>
            </View>
        </View>
      </SafeAreaView>
      </TouchableOpacity>
  )}
  onEndReached={onEnd} />
  )

  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 5
  },
  card: {
    flexDirection: 'row',
  },
  name: {
    borderWidth: 3,
    marginTop: 30,
    width:380,
    height: 270,
    borderRadius: 8,
    marginLeft: 12
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
  }
}); 



