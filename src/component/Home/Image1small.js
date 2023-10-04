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
import IMAGES from '../../Assets';
import { NAV_PAGE } from '../../CONSTANT/String';
import {useSelector, useDispatch} from 'react-redux';
import { styles } from './Image1smallStyle';
function Image1small(props) {
  const p34 = useSelector(state => {
    return state.alldata;
  });
  const {title, price, image, rating, category, id, isfavourite} = props.value2;
  const [added, setadded] = useState(false);
  const navigation = useNavigation();
  const [fav, setfav] = useState(false);
  const {data1, log, cc, tot} = p34;
  function getDetail() {
    navigation.navigate(NAV_PAGE.DETAILPAGE, {val2: props.value2});
  }
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={getDetail}>
      <View style={styles.container}>
        <Image source={{uri: image}} style={styles.imgsmall} />
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.imgtitle}>
          Min. {Math.floor(Math.random() * (100 - 20 + 1)) + 20}% off
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default Image1small;
