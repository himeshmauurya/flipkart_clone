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
import IMAGES from '../../Assets';
import { NAV_PAGE } from '../../CONSTANT/String';
import { styles } from './WishStyle';
import Image1 from '../category/Image1';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {aaddapidata, addtot, addcc, addlog} from '../redux/Myslice';

function Wish(props) {
  const navigation = useNavigation();
  const p34 = useSelector(state => {
    return state.alldata;
  });
  const {data1, log, cc, tot, favitem} = p34;
  const dispatch = useDispatch();
  const [filtfav, setfiltfav] = useState([]);
  useEffect(() => {
    setfiltfav(favitem);
  }, []);
function wishBack(){
  navigation.goBack();
}
function wishCart(){
  navigation.navigate(NAV_PAGE.MYCART);
}
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={wishBack}>
          <Image
            source={IMAGES.BACK}
            style={styles.backbut}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={wishCart}>
          <Image
            source={IMAGES.CART}
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
            source={IMAGES.LOCK}
            style={styles.lockimg}
          />
          <Text> {favitem.length} items</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.favcont}>
        {favitem.map(val => {
          return <Image1 key={val.id} value2={val} pagedata="wish"/>;
        })}
      </ScrollView>
    </>
  );
}

export default Wish;
