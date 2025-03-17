import React from 'react'
import { Button } from 'react-native-paper';

interface Props {
    title?: string;
    onPress?: any;
    onLongPress?: any;
}

export const PrimaryButton: React.FC<Props> = ({ title, onPress, onLongPress }) => {
    return (
        <Button mode="contained" onPress={onPress} onLongPress={onLongPress}>
            {title}
        </Button>
    )
}
