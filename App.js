import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import List from './components/List';
import AddList from './components/AddItem';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="AddList" component={AddList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
