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
import { styles } from './DetailPageStyle';
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
} from '../redux/Myslice';

function DetailPage(props) {
  const p34 = useSelector(state => {
    return state.alldata;
  });
  const dispatch = useDispatch();
  const {
    title,
    price,
    image,
    rating,
    category,
    description,
    id,
    isfavourite,
    count,
  } = props.route.params.val2;

  const [added, setadded] = useState(false);
  const navigation = useNavigation();
  const [fav, setfav] = useState(false);

  useEffect(() => {
    const t = p34.favitem.filter(val => {
      return val.id == id;
    });
    if (t.length > 0) {
      setfav(true);
    } else {
      setfav(false);
    }
  }, [p34.favitem]);

  useEffect(() => {
    const t = p34.cartitem.filter(val => {
      return val.id == id;
    });
    if (t.length > 0) {
      setadded(true);
    } else {
      setadded(false);
    }
  }, [p34.cartitem]);
  function gobackpage(){
    navigation.goBack();
  }
  function gotologinpage(){
    navigation.navigate(NAV_PAGE.LOGIN);
  }
  function gotowishpage(){
    navigation.navigate(NAV_PAGE.WISH);
  }
  function gotocartpage(){
    navigation.navigate(NAV_PAGE.MYCART);
  }
  function removefromfav(){
 let t1 = p34.data1.map((val, ind) => {
  if (val.id == id) {
    dispatch(removefav(id));
  }
  return val;
});
  }
  function addtofav(){
     p34.data1.map(val => {
      if (val.id == id) {
        dispatch(addfav(id));
      }
      return val;
    });
  }
  function alertPage(){
    Alert.alert('', 'Please login to the page', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        
      },
      {text: 'OK', onPress: () => navigation.navigate(NAV_PAGE.LOGIN)},
    ]);
  }
  function addtoacart(){
    p34.data1.map(val => {
      if (val.id == id) {
        dispatch(addcart(id));
        dispatch(addtot(p34.tot + val.price));
      } else {
      }
      return val;
    });
  }
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={gobackpage}>
          <Image
            source={IMAGES.BACK}
            style={styles.back1}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.marginRightpage}
          onPress={gotocartpage}>
          <Image
            source={IMAGES.CART}
            style={styles.cart1}
          />
          <View style={styles.cartcount}>
            <Text style={styles.cartcounttext}>{p34.cc}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.clickouter}>
        <View style={styles.clickbox1}>
          {!p34.log ? (
            fav ? (
              <TouchableOpacity
                onPress={removefromfav}
                activeOpacity={0.7}
                style={styles.favout}>
                <Image
                  source={IMAGES.FAV_RED}
                  style={styles.favred}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={addtofav}
                activeOpacity={0.7}
                style={styles.favout}>
                <Image
                  source={IMAGES.FAV_WHITE}
                  style={styles.favred}
                />
              </TouchableOpacity>
            )
          ) : (
            <TouchableOpacity
              onPress={alertPage}
              activeOpacity={0.7}
              style={styles.favout}>
              <Image
                source={IMAGES.FAV_WHITE}
                style={styles.favred}
              />
            </TouchableOpacity>
          )}
        </View>
        <Image source={{uri: image}} style={styles.mainimg} />
        <View style={styles.bottomout}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.bottitle}>
            {title}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.marginBottompage}>
            {category}
          </Text>
          <View style={styles.rateout}>
            <TouchableOpacity
              onPress={{}}
              activeOpacity={0.7}
              style={styles.ratebut}>
              <Text style={styles.ratetext}>{rating.rate} *</Text>
            </TouchableOpacity>
            
          </View>
          <Text style={styles.descriptionadded}>{description}</Text>
          <Text  ellipsizeMode="tail" style={styles.botprice}>
            ${price}
          </Text>

          <View style={styles.addedout}>
            {!p34.log ? (
              added ? (
                <TouchableOpacity
                  style={styles.butouter1}
                  onPress={gotocartpage}>
                  <Text style={styles.buttext}>MOVE TO CART</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={addtoacart}
                  activeOpacity={0.7}
                  style={styles.addtocart}>
                  <Text style={styles.addtocarttext}>Add To Cart</Text>
                </TouchableOpacity>
              )
            ) : (
              <TouchableOpacity
                onPress={alertPage}
                activeOpacity={0.7}
                style={styles.buynowout}>
                <Text style={styles.buynowtext}>BUY NOW</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default DetailPage;
