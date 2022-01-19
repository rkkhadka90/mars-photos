import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { AppNavProps, AppParamsList } from './AppParamsList';
import { BaseLayout } from './components/BaseLayout';
import { ImageListContainer } from './components/ImageListContainer';
import { ImageDetail } from './screens/ImageDetail';
import { ImageListing } from './screens/ImageListing';

interface AppStackProps {}

const Stack = createNativeStackNavigator<AppParamsList>()

function Home({ navigation }: AppNavProps<"Home">) {
    return (

        <BaseLayout>
            <ImageListing /> 
        </BaseLayout>
    );
}

function Detail({ navigation }: AppNavProps<"Detail">) {
    return (
        <BaseLayout>
            <ImageDetail />
        </BaseLayout>
    );
}

export const AppStack: React.FC<AppStackProps> = ({}) => {
        return (
            <Stack.Navigator initialRouteName='Home'>
                
                <Stack.Screen
                options={{
                    headerTitle: 'Mars Images'
                }} 
                name='Home' 
                component={Home}/>
                
                <Stack.Screen 
                options={{
                    headerTitle: 'Image Detail'
                }} 
                name='Detail' 
                component={Detail}/>

            </Stack.Navigator>
        );
}