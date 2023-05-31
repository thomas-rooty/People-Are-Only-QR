import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/home/Home'
import AddPeople from './screens/addpeople/AddPeople'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddPeople" component={AddPeople} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
