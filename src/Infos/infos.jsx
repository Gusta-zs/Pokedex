import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, FlatList, Image, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer, StackActions, TabRouter } from '@react-navigation/native';
import api from '../../src/api';
import {useState, useEffect} from 'react';
import { useRoute, useNavigation} from '@react-navigation/native';
import * as Progress from 'react-native-progress';

export default function Infos() {

    const navigation = useNavigation();
    const route = useRoute();

    const progress1 = route.params?.item.stats[0].base_stat/100
    const progress2 = route.params?.item.stats[1].base_stat/100
    const progress3 = route.params?.item.stats[2].base_stat/100
    const progress4 = route.params?.item.stats[3].base_stat/100
    const progress5 = route.params?.item.stats[4].base_stat/100
    const progress6 = route.params?.item.stats[5].base_stat/100 

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

  function getBarStyle(type){
    if(type == 'grass'){
      return '#74CB48'
    }else if(type == 'fire'){
      return '#F57D31'
    }else if(type == 'water'){
      return '#6493EB'
    }else if(type == 'rock'){
      return '#B69E31'
    }else if(type == 'ghost'){
      return '#70559B'
    }else if(type == 'steel'){
      return '#B7B9D0'
    }else if(type == 'psychic'){
      return '#FB5584'
    }else if(type == 'ice'){
      return '#9AD6DF'
    }else if(type == 'dark'){
      return '#75574C'
    }else if(type == 'fairy'){
      return '#E69EAC'
    }else if(type == 'normal'){
      return '#AAA67F'
    }else if(type == 'fighting'){
      return '#C12239'
    }else if(type == 'flying'){
      return '#A891EC'
    }else if(type == 'poison'){
      return '#A43E9E'
    }else if(type == 'ground'){
      return '#DEC16B'
    }else if(type == 'bug'){
      return '#A7B723'
    }else if(type == 'electric'){
      return '#F9CF30'
    }else if(type == 'dragon'){
      return '#7037FF'
    }
  }

  function getTextStyle(type){
    if(type == 'grass'){
      return {color: '#74CB48'}
    }else if(type == 'fire'){
      return {color: '#F57D31'}
    }else if(type == 'water'){
      return {color: '#6493EB'}
    }else if(type == 'rock'){
      return {color: '#B69E31'}
    }else if(type == 'ghost'){
      return {color: '#70559B'}
    }else if(type == 'steel'){
      return {color: '#B7B9D0'}
    }else if(type == 'psychic'){
      return {color: '#FB5584'}
    }else if(type == 'ice'){
      return {color: '#9AD6DF'}
    }else if(type == 'dark'){
      return {color: '#75574C'}
    }else if(type == 'fairy'){
      return {color: '#E69EAC'}
    }else if(type == 'normal'){
      return {color: '#AAA67F'}
    }else if(type == 'fighting'){
      return {color: '#C12239'}
    }else if(type == 'flying'){
      return {color: '#A891EC'}
    }else if(type == 'poison'){
      return {color: '#A43E9E'}
    }else if(type == 'ground'){
      return {color: '#DEC16B'}
    }else if(type == 'bug'){
      return {color: '#A7B723'}
    }else if(type == 'electric'){
      return {color: '#F9CF30'}
    }else if(type == 'dragon'){
      return {color: '#7037FF'}
    }
  }


    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center', backgroundColor: route.params?.background.backgroundColor}}>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.name}>{route.params?.item.name}</Text>
            </View>

            <View style={{flex: 1, alignItems:'center'}}>
            <Image source={{uri: route.params?.item.sprites.other.home.front_default}} style={{width: 300, height: 300, overflow: 'visible'}}></Image>
            </View>

            <View style={styles.container}>
                <View style={styles.tiposcontainer}>
                    {route.params?.item.types.map(function(item, i) {
                        return <TouchableWithoutFeedback style={[styles.types, getStyle(item.type.name)]}>
                            <Text style={{fontSize: 16, color: '#FFF', textTransform: 'capitalize', fontWeight: 'bold'}}></Text>
                        </TouchableWithoutFeedback>
                    })}
                </View>


                <Text style={[styles.about, getTextStyle(route.params?.item.types[0].type.name)]}>Informações</Text>
                <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 20}}>
                  <View style={{flexDirection: 'column', marginRight: 20}}>
                      <Text>{route.params?.item.weight/10} kg</Text>
                      <Text style={{marginTop: 20,  color: '#666666'}}>Weight</Text>
                  </View>

                  <View style={{height: '100%', width: 1, backgroundColor: '#E0E0E0'}}></View>

                  <View style={{flexDirection: 'column', marginRight: 20, marginLeft: 20}}>
                      <Text>{route.params?.item.height/10} m</Text>
                      <Text style={{marginTop: 20,  color: '#666666'}}>Height</Text>
                  </View>
                  </View>
            
            <Text style={[styles.about, getTextStyle(route.params?.item.types[0].type.name)]}>Base Status</Text>
            <View style={styles.container2}>
              <Text style={[styles.stats, getTextStyle(route.params?.item.types[0].type.name)]}> HP</Text>
             {route.params?.item.stats[0].base_stat > 100 ? <Text style={styles.textRow}>{route.params?.item.stats[0].base_stat}</Text> : <Text style={styles.textRow}>0{route.params?.item.stats[0].base_stat}</Text>}
              <Progress.Bar progress={progress1} width={200} height={20} color={ getBarStyle(route.params?.item.types[0].type.name)}/>
            </View>
            
            <View style={styles.container2}>
                    <Text style={[styles.stats, getTextStyle(route.params?.item.types[0].type.name)]}>  ATK</Text>
                    {route.params?.item.stats[1].base_stat > 100 ? <Text style={styles.textRow}>{route.params?.item.stats[1].base_stat}</Text> : <Text style={styles.textRow}>0{route.params?.item.stats[1].base_stat}</Text>}
                    <Progress.Bar progress={progress2} width={200} height={20} color={ getBarStyle(route.params?.item.types[0].type.name)}/>
                </View>

                <View style={styles.container2}>
                    <Text style={[styles.stats, getTextStyle(route.params?.item.types[0].type.name)]}>  DEF</Text>
                    {route.params?.item.stats[2].base_stat > 100 ? <Text style={styles.textRow}>{route.params?.item.stats[2].base_stat}</Text> : <Text style={styles.textRow}>0{route.params?.item.stats[1].base_stat}</Text>}
                    <Progress.Bar progress={progress3} width={200} height={20} color={ getBarStyle(route.params?.item.types[0].type.name)}/>
                </View>

                <View style={styles.container2}>
                    <Text style={[styles.stats, getTextStyle(route.params?.item.types[0].type.name)]}> SATK</Text>
                    {route.params?.item.stats[3].base_stat > 100 ? <Text style={styles.textRow}>{route.params?.item.stats[3].base_stat}</Text> : <Text style={styles.textRow}>0{route.params?.item.stats[1].base_stat}</Text>}
                    <Progress.Bar progress={progress4} width={200} height={20} color={ getBarStyle(route.params?.item.types[0].type.name)}/>
                </View>

                <View style={styles.container2}>
                    <Text style={[styles.stats, getTextStyle(route.params?.item.types[0].type.name)]}> SDEF</Text>
                    {route.params?.item.stats[4].base_stat > 100 ? <Text style={styles.textRow}>{route.params?.item.stats[4].base_stat}</Text> : <Text style={styles.textRow}>0{route.params?.item.stats[1].base_stat}</Text>}
                    <Progress.Bar progress={progress5} width={200} height={20} color={ getBarStyle(route.params?.item.types[0].type.name)}/>
                </View>

                <View style={styles.container2}>
                    <Text style={[styles.stats, getTextStyle(route.params?.item.types[0].type.name)]}> SPD</Text>
                    {route.params?.item.stats[5].base_stat > 100 ? <Text style={styles.textRow}>{route.params?.item.stats[5].base_stat}</Text> : <Text style={styles.textRow}>0{route.params?.item.stats[1].base_stat}</Text>}
                    <Progress.Bar progress={progress6} width={200} height={20} color={ getBarStyle(route.params?.item.types[0].type.name)}/>
                </View>    

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
name: {
    color: '#FFF', 
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 24, 
    marginLeft: 10,
    marginTop: 30,
},
about: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
},
container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '95%',
    height: '58%',
    alignItems: 'center',
},
tiposcontainer:{
    flexDirection: 'row',
},
types: {
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 5,
    width: 70,
    height: 20,
},
about: {
  fontSize: 18,
  marginTop: 10,
  fontWeight:'bold',
},
textRow: {
  marginLeft: 5,
  marginRight: 5
},
container2: {
  flexDirection: 'row',
  marginTop: 25,
}, 
stats: {
  fontWeight: 'bold',
}
})