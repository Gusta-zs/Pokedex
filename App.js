import { NavigationContainer, StackActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Home/';
import Detalhes from './src/Details/detalhes.jsx';
import Infos from './src/Infos/infos.jsx'

const Stack = createNativeStackNavigator();


export default function App() {
return (
  <NavigationContainer>

      <Stack.Navigator>

          <Stack.Screen options={{headerShown: false}} name='Home' component={Home}/>
          <Stack.Screen options={{headerShown: false}} name='Detalhes' component={Detalhes}/>
          <Stack.Screen options={{headerShown: false}} name='Infos' component= {Infos}/>

      </Stack.Navigator>

  </NavigationContainer>
)
}