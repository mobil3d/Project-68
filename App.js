import * as React from 'react';
import {View,Text} from 'react-native'
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component{
    render(){
        return(
            <AppContainer/>
        )
    }
}

const TabNavigator = createBottomTabNavigator({
    Instagram: {screen: instagramScreen},
    Facebook: {screens:facebookScreen}
})

const AppContainer = createAppContainer(TabNavigator)