import React from 'react';
import {View, Text} from 'react-native';
import {IProps, IState} from 'types-modules';

class HomePage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const backgroundStyle = 'bg-neutral-300 dark:bg-slate-900';

    return (
      <View className={backgroundStyle}>
        <Text className="text-2xl text-black dark:text-white">Test</Text>
      </View>
    );
  }
}

export default HomePage;
