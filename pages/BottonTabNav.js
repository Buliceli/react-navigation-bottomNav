import React from 'react'
import {
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation'
import first from './first'
import second from './second'
import third from './third'
import Ionicons from 'react-native-vector-icons/Ionicons'

const BottomTab = createBottomTabNavigator({
        first: {
            screen: first,
            navigationOptions: {
                tabBarLabel: '首页',
                tabBarIcon: ({tintColor}) => (
                    <Ionicons
                        name={'ios-home'}
                        size={26}
                        style={{color: tintColor}}
                    />
                )
            }
        },
        second: {
            screen: second,
            navigationOptions: {
                tabBarLabel: '发现',
                tabBarIcon: ({tintColor}) => (
                    <Ionicons
                        name={'ios-hourglass'} //creditcard
                        size={26}
                        style={{color: tintColor}}
                    />
                )
            }
        },
        third: {
            screen: third,
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: ({tintColor}) => (
                    <Ionicons
                        name={'ios-musical-notes'}
                        size={26}
                        style={{color: tintColor}}
                    />
                )
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: 'red'
        }
    }
);

export default BottomTabNav = createAppContainer(BottomTab);