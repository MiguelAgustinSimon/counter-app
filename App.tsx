import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { HelloWordScreen } from './src/presentation/screens/HelloWorld.screen'
import { CounterScreen } from './src/presentation/screens/Counter.screen'
import IonIcon from 'react-native-vector-icons/Ionicons'
import Config from 'react-native-config';

export const App = () => {
  console.log(Config.API_URL);
  console.log(Config.APP_NAME);

  return (
    //To reflect Ionic Icons on screen
    <PaperProvider
      settings={{
        icon: (props) => <IonIcon {...props} />
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWordScreen name='Agustin' /> */}
        <CounterScreen />
      </SafeAreaView>
    </PaperProvider>
  )
}
