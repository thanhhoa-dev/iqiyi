import { View, Text, StyleSheet } from 'react-native'
import { Image } from 'react-native';
import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import History from './screens/History';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Download from './screens/Download';
import Explore from './screens/Explore';
import Watch from './screens/Watch';

const screenOptions = ({ route }) => ({

    headerShown: false,
    tabBarIcon: ({ focused, color, size }) => {
        if (route.name == "Home") {
            if (focused) {
                return <View style={styles.focus}>
                <Image source={require('../../media/images/ic_home.png')} style={styles.icNav} />
            </View>
            } else {
                return <View style={styles.unfocus}>
                    <Image source={require('../../media/images/ic_home.png')} style={styles.icNav} />
                </View>
            }
        } else if (route.name == "Explore") {
            if (focused) {
                return <View style={styles.focus}>
                <Image source={require('../../media/images/ic_explore.png')} style={styles.icNav} />
            </View>
            } else {
                return <View style={styles.unfocus}>
                    <Image source={require('../../media/images/ic_explore.png')} style={styles.icNav} />
                </View>
            }
        }
        else if (route.name == "Download") {
            if (focused) {
                return <View style={styles.focus}>
                <Image source={require('../../media/images/ic_download.png')} style={styles.icNav} />
            </View>
            } else {
                return <View style={styles.unfocus}>
                    <Image source={require('../../media/images/ic_download.png')} style={styles.icNav} />
                </View>
            }
        }
        else if (route.name == "Profile") {
            if (focused) {
                return <View style={styles.focus}>
                <Image source={require('../../media/images/ic_profile.png')} style={styles.icNav} />
            </View>
            } else {
                return <View style={styles.unfocus}>
                    <Image source={require('../../media/images/ic_profile.png')} style={styles.icNav} />
                </View>
            }
        }

    },
    tabBarLabel: ({ focused, color, size }) => {
        if (route.name == "Home") {
            if (focused) {
                return <Text style={[{ color: 'white' }, styles.textNav]}>Home</Text>
            } else {
                return <Text style={[{ color: '#FFFFFF80' }, styles.textNav]}>Home</Text>
            }
        } else if (route.name == "Explore") {
            if (focused) {
                return <Text style={[{ color: 'white' }, styles.textNav]}>Explore</Text>
            } else {
                return <Text style={[{ color: '#FFFFFF80' }, styles.textNav]}>Explore</Text>
            }
        }
        else if (route.name == "Download") {
            if (focused) {
                return <Text style={[{ color: 'white' }, styles.textNav]}>Download</Text>
            } else {
                return <Text style={[{ color: '#FFFFFF80' }, styles.textNav]}>Download</Text>
            }
        }
        else if (route.name == "Profile") {

            if (focused) {
                return <Text style={[{ color: 'white' }, styles.textNav]}>Me</Text>
            } else {
                return <Text style={[{ color: '#FFFFFF80' }, styles.textNav]}>Me</Text>
            }
        }
    },
    tabBarStyle: {
        backgroundColor: '#2e3034', position: 'absolute', height: 78, flexDirection: 'row', justifyContent: 'space-between',
        paddingBottom: 15, paddingTop: 15
    },
})
const HomeBottomTab = (props) => {
    return (

        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={screenOptions}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Explore" component={Explore} />
            <Tab.Screen name="Download" component={Download} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}
const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#36454F',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
            initialRouteName='HomeBottomTab'>
            <Stack.Screen
                options={{ headerShown: false }}
                name='HomeBottomTab'
                component={HomeBottomTab}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name='Home'
                component={Home}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name='History'
                component={History}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name='Watch'
                component={Watch} />
        </Stack.Navigator>
    )
}



export default HomeStack

const styles = StyleSheet.create({
    focus : {
        opacity : 1,
        backgroundColor : 'white',
        borderRadius : 15,
        width : 23,
        height : 23,
    },
    unfocus : {
        width : 24,
        height : 24,
        opacity: 0.5
    },
    textNav: {
        fontFamily : 'Inter-Regular',
        fontSize: 12,
        lineHeight: 21,
        letterSpacing: 0.12
    },
    icNav: {
        width: 24,
        height: 24,
        marginStart: -0.5,
        marginTop : -0.5
    }
})