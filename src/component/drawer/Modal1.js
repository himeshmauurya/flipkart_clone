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

const Modal1 = ({onClose}) => {
  //const {log,setlog} = useContext(MyContext);
  const p34 = useSelector(state => {
    return state.alldata;
  });
  const {data1, log, cc, tot} = p34;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <Modal
      //animationType="slide" // Use 'slide' animation type
      transparent={true}
      visible={true} // You can control the visibility with a state variable
      onRequestClose={onClose}>
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
                  onClose();
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
                  onClose();
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
                  onClose();
                  navigation.navigate('Home');
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
        <TouchableOpacity
          style={{width: '40%', height: '100%'}}
          onPress={onClose}></TouchableOpacity>
      </View>
    </Modal>
  );
};

export default Modal1;
