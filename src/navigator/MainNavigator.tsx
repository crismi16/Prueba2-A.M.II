import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SingInScreen from '../screens/SingInScreen';
import Operaciones from '../screens/Operaciones';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Operaciones' 
    screenOptions={{headerShown:false, tabBarStyle: {backgroundColor:'black'}}}>
      <Tab.Screen name="Operaciones" component={Operaciones} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerTintColor: 'white',headerStyle: { backgroundColor: 'black' },}}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen name="SingIn" component={SingInScreen} options={{headerShown: false}}/>
      <Stack.Screen name="BottomTab" component={MyTabs} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default function Navigator(){
    return(
        <NavigationContainer>
          <MyStack/>
        </NavigationContainer>
    )
  }