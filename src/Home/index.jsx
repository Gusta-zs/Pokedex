import { StatusBar } from 'expo-status-bar';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import pokemon from '../../pokemon.json';

export default function Home() {

  const navigation = useNavigation()
  
    function iniciar (){
      navigation.navigate('Detalhes');
    }

    return (

      <View> 
      <View style={styles.container}>
      </View>  
      <AnimatedLottieView style={styles.animation} autoPlay source={pokemon} loop={true}></AnimatedLottieView>
      <View style={styles.barra}>
      <TouchableOpacity style={styles.botao} onPress={()=> iniciar()}>
              <Text style={{color: 'white'}}>Iniciar</Text>
        </TouchableOpacity>
      </View>
        <StatusBar style="auto" />  
      </View>    
     );
  
  } 
  
  const styles = StyleSheet.create({
    barra: {
      height: '42%',
    },
    container: {
      borderTopRightRadius: 25,
      borderTopLeftRadius:25,
      height:'58%',
      backgroundColor: '#fe0000',
    },
    animation: {
      zIndex:2,
      marginBottom: 180,
    },
    botao: {
      backgroundColor: '#000000',
      marginTop: 150,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 120,
      marginRight: 120,
      padding: 18,
      borderRadius: 15,
    },
  }); 