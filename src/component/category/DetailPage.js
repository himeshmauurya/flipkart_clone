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
    //console.log("list",p34.cartitem)
    const t = p34.cartitem.filter(val => {
      return val.id == id;
    });
    if (t.length > 0) {
      setadded(true);
    } else {
      setadded(false);
    }
  }, [p34.cartitem]);

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../../Assets/Images/back.png')}
            style={styles.back1}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{marginRight: 7}}
          onPress={() => {
            navigation.navigate('Mycart');
          }}>
          <Image
            source={require('../../Assets/Images/cart.png')}
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
                onPress={() => {
                  //console.log("red")
                  let t1 = p34.data1.map((val, ind) => {
                    if (val.id == id) {
                      dispatch(removefav(id));
                    }
                    return val;
                  });
                  // dispatch(aaddapidata(t1))
                  // setfav(false)
                }}
                activeOpacity={0.7}
                style={styles.favout}>
                <Image
                  source={require('../../Assets/Images/fav_red.png')}
                  style={styles.favred}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  //console.log('white');
                  p34.data1.map(val => {
                    if (val.id == id) {
                      dispatch(addfav(id));
                    }
                    return val;
                  });
                  //setfav(true)
                  //dispatch(aaddapidata(t1))
                }}
                activeOpacity={0.7}
                style={styles.favout}>
                <Image
                  source={require('../../Assets/Images/fav_white.png')}
                  style={styles.favred}
                />
              </TouchableOpacity>
            )
          ) : (
            <TouchableOpacity
              onPress={() => {
                Alert.alert('', 'Please login to the page', [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    //style: 'cancel',
                  },
                  {text: 'OK', onPress: () => navigation.navigate('Login1')},
                ]);
              }}
              activeOpacity={0.7}
              style={styles.favout}>
              <Image
                source={require('../../Assets/Images/fav_white.png')}
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
            style={{marginBottom: 1}}>
            {category}
          </Text>
          <View style={styles.rateout}>
            <TouchableOpacity
              onPress={{}}
              activeOpacity={0.7}
              style={styles.ratebut}>
              <Text style={styles.ratetext}>{rating.rate} *</Text>
            </TouchableOpacity>
            {/* <Text>({price})</Text> */}
          </View>
          <Text style={{color: 'blue', fontWeight: 'bold'}}>{description}</Text>
          <Text  ellipsizeMode="tail" style={styles.botprice}>
            ${price}
          </Text>

          <View style={styles.addedout}>
            {!p34.log ? (
              added ? (
                <TouchableOpacity
                  style={styles.butouter1}
                  onPress={() => {
                    navigation.navigate('Mycart');
                  }}>
                  <Text style={styles.buttext}>MOVE TO CART</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    p34.data1.map(val => {
                      if (val.id == id) {
                        dispatch(addcart(id));
                        dispatch(addtot(p34.tot + val.price));
                      } else {
                      }
                      return val;
                    });
                  }}
                  activeOpacity={0.7}
                  style={styles.addtocart}>
                  <Text style={styles.addtocarttext}>Add To Cart</Text>
                </TouchableOpacity>
              )
            ) : (
              <TouchableOpacity
                onPress={() => {
                  Alert.alert('Please login to the page');
                }}
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
