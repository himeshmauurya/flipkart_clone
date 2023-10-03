import {useNavigation} from '@react-navigation/native';
import React, {useState, useContext} from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';

const {width, height} = Dimensions.get('window');
import { styles } from './Modal1Style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {useSelector, useDispatch} from 'react-redux';
import {aaddapidata, addtot, addcc, addlog} from '../redux/Myslice';

const DrawerComponent = ({navigation}) => {
    const p34 = useSelector(state => {
        return state.alldata;
      });
      const {data1, log, cc, tot} = p34;
      const dispatch = useDispatch();
      // const navigation = useNavigation();
      //console.log("object")
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.modalContent}>
          <View style={styles.modbox1}>
            <Image
              source={require('../../Assets/Images/logo.png')}
              style={styles.modlogo}
            />
          </View>
          <View style={styles.modbox2}>
            <View>
              <TouchableOpacity
                style={styles.box1}
                onPress={() => {
                  navigation.closeDrawer()
                  navigation.navigate('Wish');
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={styles.modimg1}
                    source={require('../../Assets/Images/heart.png')}
                  />
                  <Text style={styles.modtext}>Favourite</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.box1}
                onPress={() => {
                  navigation.closeDrawer()
                  navigation.navigate('Mycart');
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={styles.modimg1}
                    source={require('../../Assets/Images/carts.png')}
                  />
                  <Text style={styles.modtext}>Cart</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.box1}
                onPress={() => {
                 
                  navigation.navigate('Login1');
                  navigation.closeDrawer()
                  // setlog(true);
                  dispatch(addlog(true));
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={styles.modimg1}
                    source={require('../../Assets/Images/logout.png')}
                  />
                  <Text style={styles.modtext}>Signout</Text>
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login1');
                navigation.closeDrawer()
              }}
              style={styles.logoutcont}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../Assets/Images/logouts23.png')}
              />
              <Text style={styles.logouttext}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </View>
    </View>
  )
}

export default DrawerComponent