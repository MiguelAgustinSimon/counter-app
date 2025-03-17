import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { HelloWordScreen } from './src/presentation/screens/HelloWorld.screen'
import { CounterScreen } from './src/presentation/screens/Counter.screen'

export const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWordScreen name='Agustin' /> */}
        <CounterScreen />
      </SafeAreaView>
    </PaperProvider>
  )
}
