
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Home/Home';
// import Imageclick from '../category/Imageclick';
import Signup from '../authentication/Signup';
import Login1 from '../authentication/Login1';
import Mycart from '../cart/Mycart';
// import Wish from "../Wish";
import Wish from '../favourite/Wish';
// import Error from "../Error";
import Error from '../unavailable/Error';
import Category from '../category/Category';
import DetailPage from '../category/DetailPage';
import {createDrawerNavigator} from '@react-navigation/drawer';

import DrawerComponent from '../drawer/DrawerComponent';
function Root() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={props => <DrawerComponent{...props} />}>
    <Drawer.Screen
      name="Home"
      component={Home}
      options={{headerShown: false}}
    />
     <Drawer.Screen
      name="Category"
      component={Category}
      options={{headerShown: false}}
    />
     <Drawer.Screen
      name="Login1"
      component={Login1}
      options={{headerShown: false}}
    />
     <Drawer.Screen
      name="Signup"
      component={Signup}
      options={{headerShown: false}}
    />
     <Drawer.Screen
      name="Mycart"
      component={Mycart}
      options={{headerShown: false}}
    />
     <Drawer.Screen
      name="Wish"
      component={Wish}
      options={{headerShown: false}}
    />
    
    
  </Drawer.Navigator>
  );
}


function Navst1() {
    const Stack = createNativeStackNavigator();
   
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Root">
      <Stack.Screen name="Root" component={Root} 
        options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        {/* <Stack.Screen name="Imageclick" component={Imageclick} options={{headerShown:false}} /> */}
        <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
        <Stack.Screen name="Login1" component={Login1} options={{headerShown:false}}/>
        <Stack.Screen name="Mycart" component={Mycart} options={{headerShown:false}}/>
        <Stack.Screen name="Wish" component={Wish} options={{headerShown:false}}/>
        <Stack.Screen name="Error" component={Error} options={{headerShown:false}}/>
        <Stack.Screen name="Category" component={Category} options={{headerShown:false}}/>
        <Stack.Screen name="DetailPage" component={DetailPage} options={{headerShown:false}}/>
      </Stack.Navigator>
     
    </NavigationContainer>
  );
}

export default Navst1;
