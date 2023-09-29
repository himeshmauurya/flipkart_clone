import {useNavigation} from '@react-navigation/native';
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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { styles } from './CartitemStyle';

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
  remcartitem,
} from '../redux/Myslice';

function Cartitem(props) {
  const p34 = useSelector(state => {
    return state.alldata;
  });
  const dispatch = useDispatch();
  const {title, price, image, rating, category, id, count} = props.value3;
  const img1 = image;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        navigation.navigate('DetailPage', {val2: props.value3});
      }}>
      <View style={styles.container}>
        {/* one */}
        <View style={styles.cartbox1}>
          <Image source={{uri: img1}} style={styles.cartimg} />
          <View style={styles.cartbox2}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.carttitle}>
              {title}
            </Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.cartcat}>
              {category}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.senddate}>
              Delivery by Sun Sep 24
            </Text>
            <TouchableOpacity activeOpacity={0.7} style={styles.rateouter}>
              <Text style={styles.textrate}>{rating.rate}</Text>
              <Image
                source={require('../../Assets/Images/star.png')}
                style={styles.cartstar}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* two */}
        <View style={styles.cartbox3}>
          <View style={styles.incdec}>
            <TouchableOpacity
              onPress={() => {
                p34.cartitem.map(val => {
                  if (val.id == id) {
                    dispatch(inccount(id));
                  }
                  return val;
                });
                let t2 = p34.tot + price;
                dispatch(addtot(t2));
              }}>
              <Image
                source={require('../../Assets/Images/plus1.png')}
                style={styles.cartplus}
              />
            </TouchableOpacity>

            <View style={styles.itemcount}>
              <Text style={styles.itemcounttext}>{count}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                p34.cartitem.map(val => {
                  if (val.id == id) {
                    //let p=val.count-1;
                    if (val.count - 1 > 0) {
                      dispatch(deccount(id));
                    } else {
                      dispatch(remcartitem(id));
                    }
                  }
                  return val;
                });
                let t2 = p34.tot - price;
                dispatch(addtot(t2));
              }}>
              <Image
                source={require('../../Assets/Images/minus.png')}
                style={styles.cartminus}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.itemtot}>
              ${price * count}
            </Text>
          </View>
        </View>
        {/* three */}
        <View style={styles.cartbox4}>
          <TouchableOpacity
            onPress={() => {
              p34.cartitem.map(val => {
                if (val.id == id) {
                  dispatch(remcartitem(id));
                }
              });
            }}
            activeOpacity={0.7}
            style={styles.rembut}>
            <Text style={styles.remtext}>Remove</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('your item is ready');
            }}
            activeOpacity={0.7}
            style={styles.buybut}>
            <Text
              style={styles.buytext}>
              Buy this now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Cartitem;
