import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../pages/Home";
import New from "../pages/New";
import Profile from "../pages/Profile";
import CustonDrawer from "../components/CustomDrawer";

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
    return (
        <AppDrawer.Navigator
            drawerContent={(props)=> <CustonDrawer {...props}/>}
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: '#fff',
                    paddingTop: 20,
                },
                drawerActiveBackgroundColor: '#3b3dbf',
                drawerActiveTintColor: '#fff',

                drawerInactiveBackgroundColor: '#f0f2ff',
                drawerInactiveTintColor: '#121212'

            }}
        >
            <AppDrawer.Screen
                name="Home"
                component={Home}
            />

            <AppDrawer.Screen
                name="Registrar"
                component={New}
            />

            <AppDrawer.Screen
            name="Perfil"
            component={Profile}
            />

        </AppDrawer.Navigator>
    )
}

export default AppRoutes;
