import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { AppStack } from './AppStack';

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {

    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    );
    
}