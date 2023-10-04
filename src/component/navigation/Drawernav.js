import Home from '../Home/Home';
import Signup from '../authentication/Signup';
import Login1 from '../authentication/Login1';
import Mycart from '../cart/Mycart';
import Wish from '../favourite/Wish';
import Error from '../unavailable/Error';
import Category from '../category/Category';
import DetailPage from '../category/DetailPage';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerComponent from '../drawer/DrawerComponent';

const Drawernav = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerComponent {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Category" component={Category} />
      <Drawer.Screen name="Login1" component={Login1} />
      <Drawer.Screen name="Signup" component={Signup} />
      <Drawer.Screen name="Mycart" component={Mycart} />
      <Drawer.Screen name="Wish" component={Wish} />
    </Drawer.Navigator>
  );
};

export default Drawernav;
