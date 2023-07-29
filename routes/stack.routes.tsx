import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../pages/Auth/Welcome';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Dashboard from '../pages/Dashboard';


const {Screen, Navigator} = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Navigator>
            <Screen
                name='Welcolme'
                component={Welcome}
                options={{
                    headerShown: false,
                    title: 'Inicio',
                    headerTitleAlign: 'center'
                }}
            />   
            <Screen
                name='Login'
                component={Login}
                options={{
                    headerShown: false,
                    headerTitleAlign: 'center'
                }}
            />   
            <Screen
                name='Register'
                component={Register}
                options={{
                    headerShown: false
                }}
            />
            <Screen
                name='Dashboard'
                component={Dashboard}
                options={{
                    headerShown: false
                }}
            />
        </Navigator>
    )
}