import React, {useState, useContext, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import { styles } from './WishStyle';
// import Wishimage from './Wishimage';
import Image1 from '../category/Image1';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {aaddapidata, addtot, addcc, addlog} from '../redux/Myslice';

function Wish(props) {
  const navigation = useNavigation();
  //const {data1,setData1,tot,cc}=useContext(MyContext)
  const p34 = useSelector(state => {
    return state.alldata;
  });
  const {data1, log, cc, tot, favitem} = p34;
  const dispatch = useDispatch();
  const [filtfav, setfiltfav] = useState([]);
  useEffect(() => {
    setfiltfav(favitem);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../../Assets/Images/back.png')}
            style={styles.backbut}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Mycart');
          }}>
          <Image
            source={require('../../Assets/Images/cart.png')}
            style={styles.cartimg}
          />
          <View style={styles.cartcount}>
            <Text style={styles.cartcounttext}>{cc}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.titlewishlist}>My Wishlist</Text>
        <View style={styles.lockcont}>
          <Image
            source={require('../../Assets/Images/lock.png')}
            style={styles.lockimg}
          />
          <Text> {favitem.length} items</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.favcont}>
        {favitem.map(val => {
          return <Image1 key={val.id} value2={val} pagedata="wish"/>;
          //return <Wishimage key={val.id} value8={val} value9={setfiltfav} />;
        })}
      </ScrollView>
    </>
  );
}

export default Wish;
