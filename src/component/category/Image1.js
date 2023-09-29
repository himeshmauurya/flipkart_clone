import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { styles } from './Image1Style';
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
function Image1(props) {
  const p34 = useSelector(state => {
    return state.alldata;
  });
  const dispatch = useDispatch();
  const {title, price, image, rating, category, id, isfavourite} = props.value2;
  //console.log(props.pagedata)
  const [added, setadded] = useState(false);
  const navigation = useNavigation();
  const [fav, setfav] = useState(false);
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

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        navigation.navigate('DetailPage', {val2: props.value2});
      }}>
      <View style={styles.container}>
     {props.pagedata!="home1"?
     <View style={styles.wishbox1}>
     <TouchableOpacity
       onPress={() => {
         //console.log('red');
         let t1 = p34.data1.map((val, ind) => {
           if (val.id == id) {
             dispatch(removefav(id));
           }
           return val;
         });
       }}
       activeOpacity={0.7}>
       <Image
         source={require('../../Assets/Images/delete.png')}
         style={styles.wishdel}
       />
     </TouchableOpacity>
   </View>
     
     :<View></View>}
        <Image source={{uri: image}} style={styles.img1} />
        <View style={styles.catbox3}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.cattitle}>
            {title}
          </Text>
          {props.pagedata=="home1"? <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{marginBottom: 2}}>
            {category}
          </Text>:<Text numberOfLines={1} ellipsizeMode="tail" style={styles.wishprice}>
            ${price}
          </Text>}
          {props.pagedata=="home1"?
           <View style={styles.ratebox}>
           <TouchableOpacity activeOpacity={0.7} style={styles.rateouter}>
             <Text style={styles.ratetext}>{rating.rate}</Text>
             <Image
               source={require('../../Assets/Images/star.png')}
               style={{height: hp('2%'), width: wp('4%')}}
             />
           </TouchableOpacity>
           <Text>({rating.count})</Text>
         </View>
          :
          <View style={styles.rateouter12}>
          <TouchableOpacity activeOpacity={0.7} style={styles.rateinner}>
             <Text style={styles.wishrate123}>{rating.rate}</Text>
             <Image
               source={require('../../Assets/Images/star.png')}
               style={styles.wishstar}
             />
           </TouchableOpacity>
           <Image
            source={require('../../Assets/Images/plus.png')}
           style={styles.wishplus1}
           />
         </View>
        }
         {props.pagedata=="home1"?
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.price}>
            ${price}
          </Text>
          :<View></View>
          }
 
 {props.pagedata=="home1"?
          <View style={styles.box31}>
            {!p34.log ? (
              added ? (
                <TouchableOpacity
                  style={styles.imgadded}
                  onPress={() => {
                    navigation.navigate('Mycart');
                  }}>
                  <Text style={styles.movecart}>MOVE TO CART</Text>
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
                  style={styles.addouter}>
                  <Text style={{color: 'white', textAlign: 'center'}}>ADD</Text>
                </TouchableOpacity>
              )
            ) : (
              <TouchableOpacity
                onPress={() => {
                  Alert.alert('', 'Please login to the page', [
                    {
                      text: 'Cancel',
                      onPress: () => {},
                    },
                    {text: 'OK', onPress: () => navigation.navigate('Login1')},
                  ]);
                  //navigation.navigate('Login1')
                }}
                activeOpacity={0.7}
                style={styles.addouter}>
                <Text style={{color: 'white', textAlign: 'center'}}>ADD</Text>
              </TouchableOpacity>
            )}
            {props.pagedata=='home1'?!p34.log ? (
              fav ? (
                <TouchableOpacity
                  onPress={() => {
                    let t1 = p34.data1.map((val, ind) => {
                      if (val.id == id) {
                        dispatch(removefav(id));
                      }
                      return val;
                    });
                  }}
                  activeOpacity={0.7}
                  style={styles.favouter}>
                  <Image
                    source={require('../../Assets/Images/fav_red.png')}
                    style={styles.favred1}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    console.log('white');
                    p34.data1.map(val => {
                      if (val.id == id) {
                        dispatch(addfav(id));
                      }
                      return val;
                    });
                  }}
                  activeOpacity={0.7}
                  style={styles.favouter}>
                  <Image
                    source={require('../../Assets/Images/fav_white.png')}
                    style={styles.favred1}
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
                style={styles.favouter}>
                <Image
                  source={require('../../Assets/Images/fav_white.png')}
                  style={styles.favred1}
                />
              </TouchableOpacity>
            ):<View></View>}
          </View>
          :
          <View style={styles.box322}>
            {!p34.log ? (
              added ? (
                <TouchableOpacity
                  style={styles.imgadded}
                  onPress={() => {
                    navigation.navigate('Mycart');
                  }}>
                  <Text style={styles.movecart}>MOVE TO CART</Text>
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
                  style={styles.addouter1}>
                  <Text style={{color: 'white', textAlign: 'center',fontSize:14,fontWeight:'bold'}}>ADD</Text>
                </TouchableOpacity>
              )
            ) : (
              <TouchableOpacity
                onPress={() => {
                  Alert.alert('', 'Please login to the page', [
                    {
                      text: 'Cancel',
                      onPress: () => {},
                    },
                    {text: 'OK', onPress: () => navigation.navigate('Login1')},
                  ]);
                  //navigation.navigate('Login1')
                }}
                activeOpacity={0.7}
                style={styles.addouter1}>
                <Text style={{color: 'white', textAlign: 'center',fontSize:14,fontWeight:'bold'}}>ADD</Text>
              </TouchableOpacity>
            )}
            {props.pagedata=='home1'?!p34.log ? (
              fav ? (
                <TouchableOpacity
                  onPress={() => {
                    let t1 = p34.data1.map((val, ind) => {
                      if (val.id == id) {
                        dispatch(removefav(id));
                      }
                      return val;
                    });
                  }}
                  activeOpacity={0.7}
                  style={styles.favouter}>
                  <Image
                    source={require('../../Assets/Images/fav_red.png')}
                    style={styles.favred1}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    console.log('white');
                    p34.data1.map(val => {
                      if (val.id == id) {
                        dispatch(addfav(id));
                      }
                      return val;
                    });
                  }}
                  activeOpacity={0.7}
                  style={styles.favouter}>
                  <Image
                    source={require('../../Assets/Images/fav_white.png')}
                    style={styles.favred1}
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
                style={styles.favouter}>
                <Image
                  source={require('../../Assets/Images/fav_white.png')}
                  style={styles.favred1}
                />
              </TouchableOpacity>
            ):<View></View>}
          </View>}
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Image1;
