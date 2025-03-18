import React from 'react'
import { FAB } from 'react-native-paper'
import { globalStyles } from '../../../styles/globalStyles'

interface Props {
    onPress?: any;
}

export const FabButton: React.FC<Props> = ({ onPress }) => {
    return (
        <FAB
            icon='refresh-outline'
            style={globalStyles.fab}
            onPress={onPress}
        />
    )
}
