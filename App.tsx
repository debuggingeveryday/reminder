import React from 'react';
import {View, Text} from 'react-native';
import {IProps, IState} from 'types-modules';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from './Pages/HomePage';

const Drawer = createDrawerNavigator();

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomePage} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
