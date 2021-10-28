import React from 'react';
import Home from './screen/Home';
import Colorpallete from './screen/Colorpallete';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import ColorPalleteModel from './screen/ColorPalleteModal';
const RootStack=createStackNavigator();
const MainStack=createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="Colorpallete"
        component={Colorpallete}
        options={({ route }) => ({ title: route.params.palleteName })}
      />
    </MainStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="ColorPalleteModel"
          component={ColorPalleteModel}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;