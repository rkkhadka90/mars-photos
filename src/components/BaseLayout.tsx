import React from 'react'
import { View } from 'react-native';

interface BaseLayoutProps {

}

export const BaseLayout: React.FC<BaseLayoutProps> = ({children}) => {
        return (
            <View
            style={{
                flex: 1,
                padding: 10,
                justifyContent: "flex-start"
            }}
            >
            {children}
            </View>

        );
}