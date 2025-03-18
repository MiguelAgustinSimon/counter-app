import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { PrimaryButton } from '../components/shared/PrimaryButton';
import { FabButton } from '../components/shared/FabButton';
import Icon from 'react-native-vector-icons/Ionicons';

export const CounterScreen = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 0 ? count - 1 : 0); // No permite valores negativos

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>{count}</Text>

            <View style={globalStyles.buttonContainer}>
                <PrimaryButton title="-" onPress={decrement} onLongPress={() => console.log('touched')} />
                <PrimaryButton title="+" onPress={increment} />
            </View>
            <FabButton onPress={() => setCount(0)} />

        </View>
    );
};