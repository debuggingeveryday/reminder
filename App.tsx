import React from 'react';
import {View} from 'react-native';
import {IProps, IState} from 'types-modules';

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return <View></View>;
  }
}

export default App;
