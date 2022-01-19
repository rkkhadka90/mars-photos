import React from 'react'
import { View, Text } from 'react-native';

interface ImageDetailProps {

}

export const ImageDetail: React.FC<ImageDetailProps> = ({children}) => {
        return (
            <View>
                <Text>Image details</Text>
                
                {children}
            </View>
        );
}