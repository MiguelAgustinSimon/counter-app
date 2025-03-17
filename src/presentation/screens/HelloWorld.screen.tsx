import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../../styles/globalStyles';
interface Props {
  name?: string;
}
export const HelloWordScreen = ({ name = 'World' }: Props) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Hello, {name}</Text>
    </View>
  )
}