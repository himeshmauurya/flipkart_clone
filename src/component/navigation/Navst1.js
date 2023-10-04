
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Home/Home';
import Signup from '../authentication/Signup';
import Login1 from '../authentication/Login1';
import Mycart from '../cart/Mycart';
import Wish from '../favourite/Wish';
import Error from '../unavailable/Error';
import Category from '../category/Category';
import DetailPage from '../category/DetailPage';
import Drawernav from './Drawernav';

function Navst1() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Drawernav"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Drawernav" component={Drawernav} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login1" component={Login1} />
        <Stack.Screen name="Mycart" component={Mycart} />
        <Stack.Screen name="Wish" component={Wish} />
        <Stack.Screen name="Error" component={Error} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="DetailPage" component={DetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navst1;
