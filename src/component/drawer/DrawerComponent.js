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
import IMAGES from '../../Assets';
import { NAV_PAGE } from '../../CONSTANT/String';
const {width, height} = Dimensions.get('window');
import { styles } from './Modal1Style';
import {useSelector, useDispatch} from 'react-redux';
import {aaddapidata, addtot, addcc, addlog} from '../redux/Myslice';

const DrawerComponent = ({navigation}) => {
    const p34 = useSelector(state => {
        return state.alldata;
      });
      const {data1, log, cc, tot} = p34;
      const dispatch = useDispatch();
    
      
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.modalContent}>
          <View style={styles.modbox1}>
            <Image
              source={IMAGES.LOGO}
              style={styles.modlogo}
            />
          </View>
          <View style={styles.modbox2}>
            <View>
              <TouchableOpacity
                style={styles.box1}
                onPress={() => {
                  navigation.closeDrawer()
                  navigation.navigate(NAV_PAGE.WISH);
                }}>
                <View style={styles.gotorow}>
                  <Image
                    style={styles.modimg1}
                    source={IMAGES.HEART}
                  />
                  <Text style={styles.modtext}>Favourite</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.box1}
                onPress={() => {
                  navigation.closeDrawer()
                  navigation.navigate(NAV_PAGE.MYCART);
                }}>
                <View style={styles.gotorow}>
                  <Image
                    style={styles.modimg1}
                    source={IMAGES.CARTS}
                  />
                  <Text style={styles.modtext}>Cart</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.box1}
                onPress={() => {
                 
                  navigation.navigate(NAV_PAGE.LOGIN);
                  navigation.closeDrawer()
                
                  dispatch(addlog(true));
                }}>
                <View style={styles.gotorow}>
                  <Image
                    style={styles.modimg1}
                    source={IMAGES.LOGOUT}
                  />
                  <Text style={styles.modtext}>Signout</Text>
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate(NAV_PAGE.LOGIN);
                navigation.closeDrawer()
              }}
              style={styles.logoutcont}>
              <Image
                style={styles.imgsize5}
                source={IMAGES.LOGOUTS23}
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