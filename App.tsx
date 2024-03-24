/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';
import Register from './src/screens/Register';
import DataScreen from './src/screens/DataScreen';



const App = () => {
  return (
    <View>
      <Text>App</Text>
      <Register />
      {/* <DataScreen /> */}
    </View>

  )

}

export default App;
