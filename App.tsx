import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { HelloWordScreen } from './src/presentation/screens/HelloWorld.screen'
import { CounterScreen } from './src/presentation/screens/Counter.screen'
import IonIcon from 'react-native-vector-icons/Ionicons'

export const App = () => {
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
