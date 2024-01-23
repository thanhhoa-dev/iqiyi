import HomeNavigation from '../home/HomeNavigation'

import { NavigationContainer } from '@react-navigation/native';

const AppNavigation = (props) => {
    return (
        <NavigationContainer>
            <HomeNavigation />
        </NavigationContainer>
    )
}

export default AppNavigation