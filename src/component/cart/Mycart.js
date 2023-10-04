import React, {useContext, useEffect, useState} from 'react';
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
import { styles } from './MycartStyle';
import Cartitem from './Cartitem';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {
  aaddapidata,
  addtot,
  addcc,
  addlog,
  addfav,
  removefav,
  addcart,
  removecart,
  inccount,
  deccount,
  emptycart,
} from '../redux/Myslice';

function Mycart(props) {
  const p34 = useSelector(state => {
    return state.alldata;
  });
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [filt, setfilt] = useState([]);
function goback(){
  navigation.goBack();
}
function placeorderon(){
  Alert.alert('your order is placed');
  dispatch(emptycart());
}
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={goback}>
          <Image
            source={IMAGES.BACK}
            style={styles.cartback}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.carttext}>My Cart</Text>
      <ScrollView contentContainerStyle={styles.cartbox2}>
        {p34.cartitem.map(val => {
          return <Cartitem key={val.id} value3={val} value6={setfilt} />;
        })}
        {p34.cc > 0 ? (
          <View style={styles.cartbottom}>
            <View style={{}}>
              <Text style={styles.pricedetail}>Price Detail</Text>
            </View>
            <View style={styles.botbox1}>
              <Text style={styles.botprice}>Price</Text>
              <Text style={styles.botprice}>${p34.tot.toFixed(2)}</Text>
            </View>
            <View style={styles.botbox1}>
              <Text style={styles.botprice}>Discount</Text>
              <Text style={styles.botprice}>- $0</Text>
            </View>
            <View style={styles.botbox1}>
              <Text style={styles.botprice}>Delivery Charge</Text>
              <Text style={styles.botprice}>Free Delivery</Text>
            </View>
            <View style={styles.carttotal}>
              <Text style={styles.tottext}>Total Amount</Text>
              <Text style={styles.tottext}>${p34.tot.toFixed(2)}</Text>
            </View>
            <View style={styles.butcont}>
              <TouchableOpacity
                onPress={placeorderon}
                activeOpacity={0.7}
                style={styles.butact}>
                <Text style={styles.butacttext}>Place Order</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <Text></Text>
        )}
      </ScrollView>
    </>
  );
}

export default Mycart;
